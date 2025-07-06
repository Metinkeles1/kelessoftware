"use client";

import React, { ReactNode, ButtonHTMLAttributes } from "react";

export type ButtonVariant = "gradient" | "outline" | "solid" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: React.ReactElement;
  iconPosition?: "left" | "right";
  children?: ReactNode;
  className?: string;
  "aria-label"?: string;
}

const baseStyles =
  "group relative font-semibold flex items-center justify-center overflow-hidden transition-all duration-300 focus:outline-none cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed";

const variantStyles: Record<ButtonVariant, string> = {
  gradient: "btn-gradient hover:shadow-2xl hover:-translate-y-2",
  outline: "btn-outline hover:shadow-md hover:-translate-y-1",
  solid: "btn-primary hover:shadow-md hover:-translate-y-1",
  ghost: "btn-ghost hover:shadow-sm",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-3 text-sm rounded-lg",
  md: "px-6 py-4 text-base rounded-xl",
  lg: "px-8 py-5 text-lg rounded-2xl",
};

const Button: React.FC<ButtonProps> = ({
  variant = "gradient",
  size = "md",
  loading = false,
  icon,
  iconPosition = "right",
  children,
  className = "",
  disabled,
  type = "button",
  "aria-label": ariaLabel,
  ...rest
}) => {
  const isDisabled = disabled || loading;

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="mr-2 flex items-center w-5 h-5 text-[16px]">{icon}</span>
      )}
      {children && <span>{children}</span>}
      {icon && iconPosition === "right" && (
        <span className="ml-2 flex items-center w-5 h-5 text-[16px]">{icon}</span>
      )}
      {loading && (
        <span className="ml-2 animate-spin w-5 h-5 border-2 border-t-transparent border-white rounded-full"></span>
      )}
    </>
  );

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={isDisabled}
      aria-label={ariaLabel}
      aria-busy={loading}
      onFocus={(e) => e.target.classList.add("btn-focus")}
      onBlur={(e) => e.target.classList.remove("btn-focus")}
      {...rest}
    >
      {content}
    </button>
  );
};

export default Button;
