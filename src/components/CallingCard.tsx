"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useDoor } from "./DoorProvider";

export default function CallingCard() {
  const { open, enter } = useDoor();
  const [leaving, setLeaving] = useState(false);
  const [tilt, setTilt] = useState({ x: -1.4, y: 2.2 });
  const leaveTimer = useRef<number | null>(null);

  const goIn = useCallback(() => {
    if (leaving) return;
    setLeaving(true);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    leaveTimer.current = window.setTimeout(enter, reduce ? 0 : 720);
  }, [enter, leaving]);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        goIn();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goIn, open]);

  useEffect(() => {
    return () => {
      if (leaveTimer.current) window.clearTimeout(leaveTimer.current);
    };
  }, []);

  if (!open && !leaving) return null;

  const onMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -1.4 + y * -5, y: 2.2 + x * 7 });
  };

  const onLeave = () => setTilt({ x: -1.4, y: 2.2 });

  return (
    <div
      data-door
      className={`door${leaving ? " is-leaving" : ""}`}
      role="dialog"
      aria-label="Calling card"
      aria-modal="true"
    >
      <div className="door-field">
        <div className="door-scene">
          <button
            type="button"
            className="door-card"
            onClick={goIn}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{
              transform: leaving
                ? undefined
                : `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
          >
            <span className="door-face door-face-front">
              <span className="door-name">Troy Lazaro</span>
              <span className="door-line">
                I make things. I care how they look and how they work.
              </span>
            </span>
            <span className="door-face door-face-back" aria-hidden="true">
              <span className="door-motto">
                Life&apos;s too short
                <br />
                to be boring.
              </span>
            </span>
          </button>
        </div>
        <p className="door-hint">
          <span className="door-url">troylazaro.dev</span>
          <span>enter</span>
        </p>
      </div>
    </div>
  );
}
