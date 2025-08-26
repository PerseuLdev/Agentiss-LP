import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ButtonProps } from "@/components/ui/button";
import { forwardRef } from "react";

interface ShineButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const ShineButton = forwardRef<HTMLButtonElement, ShineButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "relative overflow-hidden bg-gradient-primary shadow-primary",
          "before:absolute before:inset-0 before:bg-gradient-to-r",
          "before:from-transparent before:via-white/20 before:to-transparent",
          "before:translate-x-[-100%] before:transition-transform before:duration-700",
          "hover:before:translate-x-[100%]",
          "hover:shadow-glow hover:scale-105 transition-all duration-300",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

ShineButton.displayName = "ShineButton";

export const OutlineButton = forwardRef<HTMLButtonElement, ShineButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="outline"
        className={cn(
          "border-border/50 bg-background/5 backdrop-blur-sm",
          "hover:bg-background/10 hover:border-primary/50",
          "hover:shadow-lg hover:scale-105 transition-all duration-300",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

OutlineButton.displayName = "OutlineButton";

export const GlassButton = forwardRef<HTMLButtonElement, ShineButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "bg-card/20 border border-border/20 backdrop-blur-md",
          "hover:bg-card/30 hover:border-primary/30",
          "hover:shadow-card hover:scale-105 transition-all duration-300",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

GlassButton.displayName = "GlassButton";