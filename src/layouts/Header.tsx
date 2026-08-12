import { ArrowDownToLine, Loader } from 'lucide-react'
import { useState } from 'react'

const links = [
  {
    href:"#progetti",
    name:"Progetti"
  },
  {
    href:"#skills",
    name:"Skills",
  },
  {
    href:"#percorso",
    name:"Percorso",
  },
  {
    href:"#contatti",
    name:"Contatti",
  }
]

export default function Header() {
  const [isDownloadingCV,setIsDownloadingCV] = useState(false)

  const donwloadCV = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const href = e.currentTarget.dataset.href
    const download = e.currentTarget.dataset.download

    if (!href || !download) return

    setIsDownloadingCV(true)
    const link = document.createElement('a')
    link.href = href
    link.download = download
    document.body.appendChild(link)
    link.click()
    link.remove()

    setTimeout(() => {
      setIsDownloadingCV(false)
    }, 500)
  }

  return (
    <header className="bg-bg w-full py-7 relative z-10">
        <nav aria-label="Navigazione principale" className="flex justify-between items-center h-full">
          <a href="/" className="text-text flex items-center gap-3">
            <span className="w-10 h-10 font-bold tracking-wider bg-linear-240 from-purple to-cyan rounded-xl grid place-items-center">MF</span>
            <span className='text-text font-bold'>Web.Dev</span>
          </a>

          <ul className="flex gap-4 ">
            {links.map(link => (
              <li key={"navItem-" + link.name} className='hover:-translate-y-0.5 transition-transform duration-300'>
                <a 
                href={link.href} 
                className="text-muted block relative transition-all duration-300   hover:text-text after:content-[''] after:w-0 after:h-full after:border-b after:border-b-text after:absolute after:left-0 after:top-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button data-href={"/CV_Marco_Formante_ita_2026.pdf"} data-download={"CV_Marco_Formante"} onClick={donwloadCV} className="bg-card-light cursor-pointer flex items-center px-3 py-4 gap-2 rounded-[999px] w-[133px] h-[41px] justify-center font-bold">
             {isDownloadingCV ?  <Loader className='w-4 h-4 animate-spin'/> :  <ArrowDownToLine className='w-4 h-4' /> }
              <span>Scarica CV</span>
          </button>
        </nav>
    </header>
  )
}
