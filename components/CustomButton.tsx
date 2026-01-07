import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { Button as ShadcnButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type CustomButtonProps = {
  text: string;
  href?: string;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  variant?: "default" | "outline" | "ghost" | "link" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  ariaLabel?: string;
  target?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export function CustomButton({
  text,
  href,
  icon: Icon,
  iconPosition = "right",
  variant = "default",
  size = "default",
  className,
  ariaLabel,
  target,
  onClick,
  type = "button",
  disabled,
}: CustomButtonProps) {
  const iconElement = Icon ? (
    <Icon
      className={cn(
        iconPosition === "left" ? "mr-2" : "ml-2",
        size === "sm" ? "h-4 w-4" : size === "lg" ? "h-5 w-5" : "h-4 w-4"
      )}
      aria-hidden="true"
    />
  ) : null;

  const buttonContent = (
    <>
      {iconPosition === "left" && iconElement}
      {text}
      {iconPosition === "right" && iconElement}
    </>
  );

  const buttonClasses = cn("flex justify-center items-center", className);

  if (href) {
    return (
      <ShadcnButton
        asChild
        variant={variant}
        size={size}
        className={buttonClasses}
        aria-label={ariaLabel}
        disabled={disabled}
      >
        <Link
          href={href}
          target={target}
          className="flex justify-center items-center"
        >
          {buttonContent}
        </Link>
      </ShadcnButton>
    );
  }

  return (
    <ShadcnButton
      variant={variant}
      size={size}
      className={buttonClasses}
      aria-label={ariaLabel}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {buttonContent}
    </ShadcnButton>
  );
}
