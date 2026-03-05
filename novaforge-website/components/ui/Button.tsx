"use client";

import { ReactNode, ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "accent";
type ButtonSize = "sm" | "md" | "lg" | "xl";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children: ReactNode;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    isLoading?: boolean;
    fullWidth?: boolean;
}

const buttonVariants: Record<ButtonVariant, string> = {
    primary: `
    bg-gradient-to-r from-[#00f0ff] to-[#00c4d4]
    text-[#050a14]
    font-semibold
    hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]
  `,
    secondary: `
    bg-transparent
    border border-white/20
    text-white
    font-medium
    hover:border-[#00f0ff]/50
    hover:bg-[#00f0ff]/5
  `,
    outline: `
    bg-transparent
    border border-white/10
    text-white/70
    font-medium
    hover:border-white/30
    hover:text-white
    hover:bg-white/5
  `,
    ghost: `
    bg-transparent
    text-white/70
    font-medium
    hover:text-white
    hover:bg-white/5
  `,
    accent: `
    bg-gradient-to-r from-[#ff00ff] to-[#d400d4]
    text-white
    font-semibold
    hover:shadow-[0_0_30px_rgba(255,0,255,0.4)]
  `,
};

const buttonSizes: Record<ButtonSize, string> = {
    sm: "h-10 px-5 py-2 text-sm gap-2 rounded-lg",
    md: "h-12 px-7 py-3 text-sm gap-2.5 rounded-xl",
    lg: "h-14 px-9 py-3.5 text-base gap-3 rounded-xl",
    xl: "h-16 px-12 py-4 text-lg gap-3.5 rounded-2xl",
};

const iconButtonSizes: Record<ButtonSize, string> = {
    sm: "w-10 h-10 p-2.5 rounded-lg",
    md: "w-12 h-12 p-3 rounded-xl",
    lg: "w-14 h-14 p-3.5 rounded-xl",
    xl: "w-16 h-16 p-4 rounded-2xl",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = "primary",
            size = "md",
            children,
            leftIcon,
            rightIcon,
            isLoading = false,
            fullWidth = false,
            className,
            disabled,
            ...props
        },
        ref
    ) => {
        const isIconOnly = !children && (leftIcon || rightIcon);

        const baseClasses = `
      relative
      inline-flex
      items-center
      justify-center
      font-sans
      font-medium
      tracking-wide
      text-center
      leading-tight
      transition-all
      duration-300
      ease-out
      disabled:opacity-50
      disabled:cursor-not-allowed
      disabled:hover:scale-100
      disabled:hover:shadow-none
      overflow-hidden
      whitespace-nowrap
      hover:scale-[1.02]
      active:scale-[0.98]
      align-middle
    `;

        const sizeClasses = isIconOnly ? iconButtonSizes[size] : buttonSizes[size];
        const variantClasses = buttonVariants[variant];
        const widthClass = fullWidth ? "w-full" : "";
        const labelPaddingClass = "px-[6px]";

        return (
            <button
                ref={ref}
                className={cn(
                    baseClasses,
                    sizeClasses,
                    variantClasses,
                    widthClass,
                    className
                )}
                disabled={disabled || isLoading}
                {...props}
            >
                {/* Loading Spinner */}
                {isLoading && (
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <svg
                            className="animate-spin h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                    </span>
                )}

                {/* Button Content - Centered with Proper Spacing */}
                <span
                    className={cn(
                        "flex items-center justify-center gap-2 relative z-10 tracking-wide leading-none",
                        isLoading && "opacity-0"
                    )}
                >
                    {leftIcon && <span className="flex-shrink-0 flex items-center">{leftIcon}</span>}
                    {children && <span className={cn("text-center flex items-center", labelPaddingClass)}>{children}</span>}
                    {rightIcon && <span className="flex-shrink-0 flex items-center">{rightIcon}</span>}
                </span>

                {/* Hover Gradient Overlay for Primary Button */}
                {variant === "primary" && !disabled && (
                    <span
                        className="absolute inset-0 bg-gradient-to-r from-[#ff00ff] to-[#d400d4] opacity-0 hover:opacity-100 transition-opacity duration-300"
                    />
                )}
            </button>
        );
    }
);

Button.displayName = "Button";

export { Button };
export default Button;
