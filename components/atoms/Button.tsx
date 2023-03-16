import React from "react"
import { twMerge } from "tailwind-merge"
interface Props extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "fill" | "soft"
  size?: "small" | "base"
  startIcon?: JSX.Element
  endIcon?: JSX.Element
}
const Button: React.FC<Props> = ({
  variant = "fill",
  size = "base",
  className = "",
  children,
  startIcon,
  endIcon,
  ...restProps
}) => {
  const sizeClassName = {
    small: `px-5 py-2 md:px-6 md:py-2.5 rounded-md text-lg font-semibold`,
    base: `px-8 py-3 md:px-11 md:py-4 rounded-md text-lg font-semibold`,
  }
  const variantClassName = {
    fill: `bg-primary text-light hover:brightness-95 font-sourceSansPro shadow-[0px_30px_60px_rgba(74,114,255,0.25)]`,
    soft: `bg-primary/[5%] text-primary hover:bg-primary/[10%] font-sourceSansPro`
  }
  return (
    <button
      className={twMerge(`flex items-center gap-4  ${sizeClassName[size]} ${variantClassName[variant]} ${className}`)}
      {...restProps}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  )
}

export default Button
