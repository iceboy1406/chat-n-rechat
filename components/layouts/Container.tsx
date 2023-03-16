import React from "react"
import { twMerge } from "tailwind-merge"
interface Props extends React.ComponentPropsWithoutRef<"div"> {}
const Container: React.FC<Props> = ({ className = "", children, ...restProps }) => {
  return (
    <div className={twMerge(`container md:max-w-3xl lg:max-w-5xl mx-auto px-6 xl:px-0 ${className}`)} {...restProps}>
      {children}
    </div>
  )
}

export default Container
