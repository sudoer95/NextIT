// app/providers.tsx or custom layout
"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export function RouteProgress() {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.start();
    const timeout = setTimeout(() => {
      NProgress.done();
    }, 500); // fake duration for transition

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
