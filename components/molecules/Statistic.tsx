import React from "react"
interface Props {
  icon: React.ReactNode
  label: string
  value: string
}
const Statistic: React.FC<Props> = ({ icon, label, value }) => {
  return (
    <div className="flex items-start gap-4 sm:gap-8">
      <div className="text-lg sm:text-2xl text-dark/[60%]">{icon}</div>
      <article className="flex flex-col gap-2">
        <h4 className="text-xs sm:text-sm text-dark/[60%] font-inter">
          {label}
        </h4>
        <p className="text-xl font-semibold font-inter text-dark">{value}</p>
      </article>
    </div>
  )
}

export default Statistic
