
interface LinkButtonInterface{
    to:string,
    styles:string,
    text:React.ReactNode,
    children?:React.ReactNode,
    target?:boolean
}

export default function LinkButton({to,styles= "",text,children,target = false}:LinkButtonInterface) {
  return (
    <a target={target ? "_blank" : "_self"} href={to} className={`flex items-center gap-2.5 rounded-[18px] w-max ${styles}`}>{text} {children}</a>
  )
}
