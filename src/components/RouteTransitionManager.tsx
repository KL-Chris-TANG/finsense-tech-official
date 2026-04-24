import { LoaderCircle } from "lucide-react";
import { ReactNode, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

type RouteTransitionManagerProps = {
  children: ReactNode;
};

const RouteTransitionManager = ({ children }: RouteTransitionManagerProps) => {
  const location = useLocation();
  const previousPathnameRef = useRef(location.pathname);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const pathnameChanged = previousPathnameRef.current !== location.pathname;

    if (!pathnameChanged) {
      return;
    }

    previousPathnameRef.current = location.pathname;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    setIsLoading(true);

    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-background/85 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/20 bg-card/80 shadow-lg shadow-primary/10">
              <LoaderCircle className="h-8 w-8 animate-spin text-primary" />
            </div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Loading</p>
          </div>
        </div>
      )}
      {children}
    </>
  );
};

export default RouteTransitionManager;