import React, { useEffect, useRef, useState } from "react"
interface Props {
  /** w:h - for example if width is 0.7em and height is 1em so aspectRatio 0.7 */
  aspectRatio: number
  children: JSX.Element
}
const SvgFitToParent: React.FC<Props> = ({ aspectRatio, children }) => {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handler = () => {
      if (ref.current) {
        setWidth(ref.current.clientWidth)
      }
    }
    handler()
    window.addEventListener("resize", handler)
    return () => {
      window.removeEventListener("resize", handler)
    }
  }, [])
  return (
    <div
      ref={ref}
      className="w-full"
      style={{
        fontSize: width / aspectRatio,
      }}
    >
      {children}
    </div>
  )
}

export default SvgFitToParent
