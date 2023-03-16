import React from "react"
interface Props extends React.ComponentPropsWithoutRef<'div'> {
  emoticon: string
  title: string
  description: string
}
const ReasonListItem: React.FC<Props> = ({ description, emoticon, title, ...restProps }) => {
  return (
    <div className="w-full flex gap-6" {...restProps}>
      <div className="text-[26px] p-[14px] bg-dark/[10%] rounded-md h-fit leading-8">{emoticon}</div>
      <article className="flex flex-col gap-2.5">
        <h3 className="text-lg text-dark font-medium">{title}</h3>
        <p className="text-base text-dark/[60%] font-normal font-sourceSansPro">{description}</p>
      </article>
    </div>
  )
}

export default ReasonListItem
