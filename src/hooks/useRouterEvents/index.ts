import { useEffect } from "react";
import { useRouter } from "next/router";
import type { UseRouterEvents } from "./types";

export const useRouterEvents = ({
  onRouteChangeStart,
  onRouteChangeComplete,
  onRouteChangeError,
}: UseRouterEvents) => {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", onRouteChangeStart);
    router.events.on("routeChangeComplete", onRouteChangeComplete);
    router.events.on("routeChangeError", onRouteChangeError);

    return () => {
      router.events.off("routeChangeStart", onRouteChangeStart);
      router.events.off("routeChangeComplete", onRouteChangeComplete);
      router.events.off("routeChangeError", onRouteChangeError);
    };
  }, []);

  return {};
};

export default useRouterEvents;
