
export default function StackItem({name}:{name:string}) {
  return (
    <li className="w-max px-3.5 py-[11px] text-text-soft text-[13px] rounded-[999px] border border-text/8 bg-text/7  min-w-[47px]">
        {name}
    </li>
  )
}
