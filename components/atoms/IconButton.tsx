import React from 'react'
import { twMerge } from 'tailwind-merge'
interface Props extends React.ComponentPropsWithoutRef<'button'> {
    
}
const IconButton: React.FC<Props> = ({className = '', ...restProps}) => {
  return (
    <button className={twMerge(`p-2 text-2xl text-dark bg-dark/[10%] rounded-md ${className}`)} {...restProps} />
  )
}

export default IconButton