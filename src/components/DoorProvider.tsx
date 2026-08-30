"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "troy-door";

type DoorContextValue = {
  open: boolean;
  enter: () => void;
};

const DoorContext = createContext<DoorContextValue>({
  open: false,
  enter: () => {},
});

export function useDoor() {
  return useContext(DoorContext);
}

function markRoomOpen() {
  document.documentElement.dataset.room = "open";
  document.documentElement.style.overflow = "";
}

function markDoorOpen() {
  delete document.documentElement.dataset.room;
  document.documentElement.style.overflow = "hidden";
}

export default function DoorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(pathname === "/");

  useEffect(() => {
    if (pathname !== "/") {
      setOpen(false);
      markRoomOpen();
      return;
    }

    const skip =
      window.location.hash.length > 0 ||
      sessionStorage.getItem(STORAGE_KEY) === "entered";

    if (skip) {
      setOpen(false);
      markRoomOpen();
      return;
    }

    setOpen(true);
    markDoorOpen();
  }, [pathname]);

  const enter = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, "entered");
    setOpen(false);
    markRoomOpen();
  }, []);

  const value = useMemo(() => ({ open, enter }), [open, enter]);

  return <DoorContext.Provider value={value}>{children}</DoorContext.Provider>;
}
