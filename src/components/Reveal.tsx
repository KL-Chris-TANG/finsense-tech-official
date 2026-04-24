import { ReactNode, CSSProperties } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
  id?: string;
  style?: CSSProperties;
}

const Reveal = ({ children, className, delay = 0, as = "div", id, style }: RevealProps) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      id={id}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
