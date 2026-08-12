import type { JSX } from "react/jsx-runtime"

interface LinkButtonInterface{
    to:string,
    styles:string,
    text:React.ReactNode,
    children?:React.ReactNode,
    target?:string,
    ComponentType:JSX.ElementType
}

export default function LinkButton({to,styles= "",text,children,ComponentType,target}:LinkButtonInterface) {
  
  return (
    <ComponentType target={target ?? null} href={to} className={`flex items-center gap-2.5 rounded-[18px] w-max ${styles}`}>{text} {children}</ComponentType>
  )
}
