import { ArrowRight, MousePointerClick } from "lucide-react";
import LinkButton from "../../components/LinkButton";

export default function Hero() {
  return (
    <section className="flex gap-20 mt-10 hero">
        <div className="max-w-1/2 flex flex-col gap-10 relative z-1">
            <div className="px-3.5 py-2.5 flex gap-2.5 items-center rounded-full bg-card-light/7 w-max border border-card-light/12"> 
                <span aria-hidden="true" className="bg-green w-2 h-2 block rounded-full opacity-75 animate-ping "></span>
                <p className="text-text text-sm font-bold">Disponibile per stage / junior frontend role</p>
            </div>
            <h1 className="text-text text-[68px] font-extrabold leading-20">Creo interfacce <br/> web pulite,<br/> responsive e facili <br/> da usare.</h1>
            <p className="text-muted text-lg w-[60%] min-w-[517px]">Sono un junior frontend developer: costruisco pagine web moderne con React, curo layout responsive e trasformo idee semplici in interfacce chiare e usabili.</p>
            <div className="flex items-center gap-3.5">
                <LinkButton 
                    to="/#contattami" 
                    styles="font-extrabold text-text flex items-center gap-2.5 py-4 px-5.5 drop-shadow-amber-600 rounded-[18px] bg-gradient-primary w-max drop-shadow-2xl drop-shadow-cyan/40"
                    text="Contattami"
                >
                    <ArrowRight className="w-4.5 h-4.5"/>
                </LinkButton>

                <LinkButton 
                    to="/#progetti" 
                    styles="font-extrabold text-text flex items-center gap-2.5 py-4 px-5.5 rounded-[18px] w-max bg-text/5 border border-text/12"
                    text="Vedi progetti"
                >
                    <MousePointerClick className="w-4.5 h-4.5"/>
                </LinkButton>
            </div>
            <div className="hero-radial hero-radial-left" aria-hidden="true"></div>
        </div>

        <div className="flex-1 rounded-4xl border border-text/12 bg-surface/80 px-13 py-5 h-stretch h-[500px] self-center relative overflow-hidden hero-code">
            <div className="px-7 py-5">
                <span className="font-bold text-[13px] text-muted">portfolio.tsx</span>
                <div aria-hidden="true" className="flex items-center gap-2 mt-3">
                    <span className="rounded-full w-2.5 h-2.5 bg-[#FF5F57]"></span> 
                    <span className="rounded-full w-2.5 h-2.5 bg-[#FFBD2E]"></span> 
                    <span className="rounded-full w-2.5 h-2.5 bg-green"></span> 
                </div>
                <p className="code-container text-2xl mt-12">
                    <span className="text-[#7CFFCB] writing-animation">{`const developer = {`}</span>
                    <span className="text-text-soft ml-6 writing-animation">{`name: 'Marco Formante',`}</span>
                    <span className="text-text-soft ml-6 writing-animation">{`role: 'Junior Frontend Developer',`}</span>
                    <span className="text-text-soft ml-6 writing-animation">{`skills: ['React', 'Next.js', 'UI'],`}</span>
                    <span className="text-text-soft ml-6 writing-animation">{`projects: buildWithCare(),`}</span>
                    <span className="text-[#7CFFCB]">{"}"}</span>
                </p>
            </div>
        </div>
    </section>
  )
}
