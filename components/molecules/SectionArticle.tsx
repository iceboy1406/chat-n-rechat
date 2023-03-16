import React from "react"
import { twMerge } from "tailwind-merge"
interface Props extends React.ComponentPropsWithoutRef<"article"> {
  badge: string
  title: string
  description: string
  textAlign?: "center" | "left"
}
const SectionArticle: React.FC<Props> = ({
  badge,
  description,
  title,
  textAlign = "left",
  className = "",
  ...restProps
}) => {
  return (
    <article
      className={twMerge(
        `flex flex-col gap-4 ${
          textAlign === "left" ? "text-left" : "text-center"
        } ${className}`
      )}
      {...restProps}
    >
      <span className="text-sm font-semibold font-sourceSansPro text-dark">{badge}</span>
      <div className="flex flex-col gap-2.5">
        <h2 className="text-[28px] text-dark font-normal">{title}</h2>
        <p className="text-base font-normal text-dark/[60%] font-sourceSansPro">{description}</p>
      </div>
    </article>
  )
}

export default SectionArticle
