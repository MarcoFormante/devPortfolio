
interface LinkButtonInterface{
    to:string,
    styles:string,
    text:string,
    children?:React.ReactNode
}

export default function LinkButton({to,styles= "",text,children}:LinkButtonInterface) {
  return (
    <a href={to} className={`flex items-center gap-2.5 rounded-[18px] w-max ${styles}`}>{text} {children}</a>
  )
}
