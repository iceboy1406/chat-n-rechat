import React from "react"
interface Props extends React.ComponentPropsWithoutRef<"div"> {
  illustration: JSX.Element
  title: string
  description: string
}
const WhyListItem: React.FC<Props> = ({
  description,
  illustration,
  title,
  ...restProps
}) => {
  return (
    <div className="w-full flex flex-col gap-10 items-center" {...restProps}>
      <div className="text-[170px]">{illustration}</div>
      <article className="flex flex-col gap-2.5 text-center">
        <h3 className="text-lg text-dark font-normal">{title}</h3>
        <p className="text-base text-dark/[60%] font-normal font-sourceSansPro">
          {description}
        </p>
      </article>
    </div>
  )
}

export default WhyListItem
