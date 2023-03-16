import React from "react"
import { SvgChevronDownIcon } from "svg/component/icon"
interface Props extends React.ComponentPropsWithoutRef<"div"> {
  question: string
  answer: string
  open: boolean
  onToggle: () => void
}
const FAQListItem: React.FC<Props> = ({
  answer,
  question,
  onToggle,
  open,
  ...restProps
}) => {
  return (
    <div
      className={`w-full ${
        open
          ? "bg-primary rounded-md shadow-[0px_30px_60px_rgba(74,114,255,0.25)]"
          : "border-b border-b-dark/[10%]"
      }`}
      {...restProps}
    >
      <button
        className="px-4 py-2.5 sm:px-[30px] sm:py-5 flex items-center justify-between gap-2 w-full"
        onClick={() => onToggle()}
      >
        <p
          className={`text-lg font-medium text-left ${
            open ? "text-white" : "text-dark"
          }`}
        >
          {question}
        </p>
        <SvgChevronDownIcon
          className={`text-2xl transform transition-all duration-300 flex-shrink-0 ${
            open ? "rotate-180 text-white" : "rotate-0 text-dark"
          }`}
        />
      </button>
      {open && (
        <div className="border-t border-t-white/[10%] px-4 py-2.5 sm:px-[30px] sm:py-5">
          <p className="text-base font-normal font-sourceSansPro text-white text-left">
            {answer}
          </p>
        </div>
      )}
    </div>
  )
}

export default FAQListItem
