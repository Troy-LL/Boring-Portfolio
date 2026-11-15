"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const SEEN_KEY = "boring-card-door";
const SCRIPT_SRC = "/opening/js/card-lab.js?v=14";
const FAILSAFE_MS = 5000;
const SHEETS = [
  "/opening/css/Card.css?v=14",
  "/opening/css/card-back-fonts.css?v=14",
  "/opening/css/card-lab.css?v=14",
];
const DOOR_COVER = `
.card-door {
  position: fixed;
  inset: 0;
  z-index: 40;
  width: 100%;
  height: 100%;
  height: 100dvh;
  margin: 0;
  overflow: hidden;
  background: transparent;
}
.card-door:not(.is-ready) {
  background: #f2eee8;
}
.card-door:not(.is-ready) .site-stage {
  visibility: hidden;
}
`;

type BoringDoorWindow = Window & {
  __boringDoorWheel?: EventListener;
  __boringDoorTouch?: {
    start: EventListener;
    move: EventListener;
    end: EventListener;
  };
};

function clearDoorListeners() {
  const win = window as BoringDoorWindow;
  if (win.__boringDoorWheel) {
    window.removeEventListener("wheel", win.__boringDoorWheel);
    delete win.__boringDoorWheel;
  }
  if (win.__boringDoorTouch) {
    const touch = win.__boringDoorTouch;
    window.removeEventListener("touchstart", touch.start);
    window.removeEventListener("touchmove", touch.move);
    window.removeEventListener("touchend", touch.end);
    window.removeEventListener("touchcancel", touch.end);
    delete win.__boringDoorTouch;
  }
}

export default function CardDoor() {
  const [open, setOpen] = useState(true);
  const [portal, setPortal] = useState(false);
  const [cssReady, setCssReady] = useState(false);
  const [armed, setArmed] = useState(false);
  const loadedRef = useRef(new Set<string>());
  const armedRef = useRef(false);
  const enteredRef = useRef(false);
  const live = cssReady && armed;

  const markSheet = (href: string) => {
    loadedRef.current.add(href);
    if (loadedRef.current.size >= SHEETS.length) setCssReady(true);
  };

  const finish = () => {
    if (enteredRef.current) return;
    enteredRef.current = true;
    sessionStorage.setItem(SEEN_KEY, "1");
    window.dispatchEvent(new CustomEvent("card-door:abort"));
    document.querySelectorAll("[data-home-scroll]").forEach((el) => {
      if (el instanceof HTMLElement) el.style.transform = "";
    });
    clearDoorListeners();
    document.body.style.overflow = "";
    setOpen(false);
  };

  useLayoutEffect(() => {
    setPortal(true);
    const params = new URLSearchParams(window.location.search);
    if (params.get("door") === "0") {
      setOpen(false);
      return;
    }
    if (params.get("door") === "1") return;
    if (sessionStorage.getItem(SEEN_KEY) === "1") setOpen(false);
  }, []);

  useLayoutEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    for (const href of SHEETS) {
      const link = document.querySelector(
        `link[rel="stylesheet"][href="${href}"]`,
      );
      if (link instanceof HTMLLinkElement && link.sheet) markSheet(href);
    }
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const coverFailSafe = window.setTimeout(() => {
      if (!armedRef.current) finish();
    }, FAILSAFE_MS);
    return () => window.clearTimeout(coverFailSafe);
  }, [open]);

  useEffect(() => {
    if (!open || !cssReady) return;

    let script: HTMLScriptElement | null = null;
    const timer = window.setTimeout(() => {
      script = document.createElement("script");
      script.type = "module";
      script.src = SCRIPT_SRC;
      document.body.appendChild(script);
    }, 0);

    const onArmed = () => {
      armedRef.current = true;
      setArmed(true);
    };

    window.addEventListener("card-door:enter", finish);
    window.addEventListener("card-door:armed", onArmed);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("card-door:enter", finish);
      window.removeEventListener("card-door:armed", onArmed);
      script?.remove();
      clearDoorListeners();
      document.body.style.overflow = "";
    };
  }, [open, cssReady]);

  if (!open) return null;

  const door = (
    <>
      <style>{DOOR_COVER}</style>
      {SHEETS.map((href) => (
        <link
          key={href}
          rel="stylesheet"
          href={href}
          onLoad={() => markSheet(href)}
          onError={() => markSheet(href)}
        />
      ))}
      <div
        className={live ? "card-door is-ready" : "card-door"}
        data-card-door
      >
        <main className="site-stage" aria-label="Calling card">
          <section className="pane" data-engine="css">
            <div className="pane-fps" aria-hidden="true">
              — fps
            </div>
            <p
              className="css-scroll-hint"
              data-visible="false"
              aria-hidden="true"
            >
              scroll down
            </p>
            <div className="css-stage">
              <div className="horizon-track">
                <div
                  className="horizon-station horizon-station--card"
                  data-station="01"
                >
                  <span className="horizon-mark" aria-hidden="true">
                    01
                  </span>
                  <div className="css-world">
                    <div className="css-rig">
                      <div className="css-stack">
                        <div className="css-shadows" aria-hidden="true">
                          <div className="css-shadow css-shadow--soft" />
                          <div className="css-shadow css-shadow--contact" />
                        </div>
                        <div className="css-hatch-slot" aria-hidden="true">
                          <div className="css-hatch-well">
                            <video
                              className="css-hatch-video"
                              muted
                              loop
                              playsInline
                              preload="none"
                            />
                            <div className="css-hatch-vignette" />
                          </div>
                          <div className="css-hatch" />
                        </div>
                        <article className="css-card css-card--fold">
                          <div className="css-card__flip">
                            <div className="css-card__front">
                              <div className="fold-sheet">
                                <div
                                  className="fold-panel fold-panel--top"
                                  data-fold="top"
                                >
                                  <div className="fold-panel__face">
                                    <div className="fold-panel__clip">
                                      <div
                                        className="fold-panel__print"
                                        style={{ transform: "translateY(0%)" }}
                                      >
                                        <div
                                          className="css-card__material"
                                          data-physical-host=""
                                          data-third="0"
                                        />
                                      </div>
                                    </div>
                                    <span
                                      className="fold-panel__shade fold-panel__shade--top"
                                      aria-hidden="true"
                                    />
                                    <span
                                      className="fold-panel__edge"
                                      aria-hidden="true"
                                    />
                                    <span className="fold-panel__crease fold-panel__crease--bottom" />
                                    <span
                                      className="fold-panel__thickness"
                                      aria-hidden="true"
                                    />
                                  </div>
                                  <div
                                    className="fold-panel fold-panel--mid"
                                    data-fold="mid"
                                  >
                                    <div className="fold-panel__face css-card__face">
                                      <div className="fold-panel__clip">
                                        <div
                                          className="fold-panel__print"
                                          style={{
                                            transform: "translateY(-33.333%)",
                                          }}
                                        >
                                          <div
                                            className="css-card__material"
                                            data-physical-host=""
                                            data-third="1"
                                          />
                                        </div>
                                      </div>
                                      <span
                                        className="fold-panel__shade fold-panel__shade--mid"
                                        aria-hidden="true"
                                      />
                                      <span
                                        className="fold-panel__edge"
                                        aria-hidden="true"
                                      />
                                      <span className="fold-panel__crease fold-panel__crease--top" />
                                      <span className="fold-panel__crease fold-panel__crease--bottom" />
                                    </div>
                                    <div
                                      className="fold-panel fold-panel--bot"
                                      data-fold="bot"
                                    >
                                      <div className="fold-panel__face">
                                        <div className="fold-panel__clip">
                                          <div
                                            className="fold-panel__print"
                                            style={{
                                              transform: "translateY(-66.666%)",
                                            }}
                                          >
                                            <div
                                              className="css-card__material"
                                              data-physical-host=""
                                              data-third="2"
                                            />
                                          </div>
                                        </div>
                                        <span
                                          className="fold-panel__shade fold-panel__shade--bot"
                                          aria-hidden="true"
                                        />
                                        <span
                                          className="fold-panel__edge"
                                          aria-hidden="true"
                                        />
                                        <span className="fold-panel__crease fold-panel__crease--top" />
                                        <span
                                          className="fold-panel__thickness"
                                          aria-hidden="true"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="css-card__back" aria-hidden="true">
                              <div
                                className="css-card__back-stock"
                                data-physical-host=""
                                data-card-back=""
                              />
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                  <div
                    className="horizon-hand horizon-hand--front"
                    aria-hidden="true"
                  >
                    <img
                      className="horizon-hand__img"
                      src="/opening/hands/push-fingers.png"
                      alt=""
                      decoding="async"
                    />
                  </div>
                </div>
                <div
                  className="horizon-station horizon-station--leg"
                  data-station="02"
                  aria-hidden="true"
                >
                  <div className="horizon-hand horizon-hand--back">
                    <img
                      className="horizon-hand__img"
                      src="/opening/hands/push-palm.png"
                      alt=""
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );

  if (!portal) return door;
  return createPortal(door, document.body);
}
