import { ArrowDown, MousePointerClick } from "lucide-react";
import LinkButton from "../../components/LinkButton";

export default function Hero() {
  return (
    <section className="flex gap-20 mt-10 hero">
        <div className="max-w-1/2 flex flex-col gap-10 relative z-1">
            <div className="px-3.5 py-2.5 flex gap-2.5 items-center rounded-full bg-card-light/7 w-max border border-card-light/12"> 
                <span aria-hidden="true" className="bg-green w-2 h-2 block rounded-full opacity-75 animate-ping "></span>
                <p className="text-text text-sm font-bold">Disponibile per progetti e posizioni Full-Stack / Frontend</p>
            </div>
            <h1 className="text-text text-[68px] font-extrabold leading-20">Creo interfacce <br/> web pulite,<br/> responsive e facili <br/> da usare.</h1>
            <p className="text-muted text-lg w-[80%] min-w-[517px]">Sviluppo applicazioni web moderne, veloci e performanti. Focalizzato sull'ecosistema Frontend con React e Next.js, affianco una solida comprensione del Backend per la creazione di API e gestione dati con Node.js, PHP e Symfony.</p>
            <div className="flex items-center gap-3.5">
                <LinkButton
                    ComponentType="a" 
                    to="/#contatti" 
                    styles="font-extrabold text-text flex items-center transition-all duration-300 hover:rotate-x-20 gap-2.5 py-4 px-5.5 drop-shadow-amber-600 rounded-[18px] bg-gradient-primary w-max drop-shadow-2xl drop-shadow-cyan/40"
                    text="Contattami"
                >
                    <ArrowDown className="w-4.5 h-4.5"/>
                </LinkButton>

                <LinkButton 
                    ComponentType="a" 
                    to="/#progetti" 
                    styles="font-extrabold text-text flex items-center gap-2.5 py-4 px-5.5 transition-all duration-300 hover:rotate-x-20 rounded-[18px] w-max bg-text/5 border border-text/12"
                    text="Vedi progetti"
                >
                    <MousePointerClick className="w-4.5 h-4.5"/>
                </LinkButton>

                <LinkButton 
                ComponentType="a" 
                to="https://github.com/MarcoFormante/" 
                target="_blank" styles="hover:rotate-x-20 px-5 py-[15px] transition-all duration-300 text-text text-[15px] bg-text/7 border border-text/13 flex items-center w-max rounded-[18px] gap-2.5 font-black" 
                text={<span className="order-2">GitHub</span> }
                >
                    <svg
                        data-pencil-name="GitHub Icon"
                        data-icon-name="github"
                        data-icon-set="lucide"
                        viewBox="0 0 13.99993896484375 14"
                        preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg"
                        className="box-border w-[18px] shrink-0 h-[18px]"
                    >
                        <path
                            d="M2.82666 0.60156q-0.12305 0.01367-0.24268 0.09912-0.11963 0.08203-0.17431 0.19483-0.08545 0.15381-0.15723 0.6289-0.05469 0.29395-0.04785 0.71436 0.00684 0.42041 0.06494 0.72803l0.02735 0.12646-0.07178 0.12647q-0.30762 0.54688-0.43408 1.23388-0.02734 0.13672-0.03418 0.54346-0.00684 0.40674 0.00683 0.61865 0.12646 1.34326 1.07666 2.26612 0.59131 0.54688 1.33301 0.84082 0.15381 0.05469 0.38281 0.12646 0.23242 0.06836 0.27344 0.06836 0.04102 0 0.04102 0.03076 0 0.02734-0.04102 0.12305-0.05469 0.19824-0.11279 0.48535-0.05469 0.28369-0.05469 0.45459l0 0.0957-0.14014 0.04444q-0.33496 0.0957-0.65967 0.08203-0.18115-0.01367-0.29394-0.04102-0.10938-0.02734-0.24951-0.0957-0.14014-0.07178-0.2666-0.17773-0.12646-0.10596-0.3794-0.3418-0.51611-0.47852-0.72803-0.60156-0.37598-0.21191-0.74169-0.21192-0.11279 0-0.16065 0.00684-0.04785 0.00684-0.11963 0.03418-0.28027 0.12646-0.32812 0.42041-0.04785 0.29395 0.16064 0.51953 0.12646 0.12646 0.3794 0.16748 0.15381 0.02734 0.24267 0.08545 0.09229 0.05469 0.44092 0.37598 0.31104 0.29394 0.43408 0.3999 0.12646 0.10596 0.28027 0.20166 0.42041 0.28027 0.89893 0.37939 0.19482 0.04102 0.49561 0.04102 0.30078 0 0.52636-0.02735l0.2085-0.04101q0.01367 0 0.01367 0.81006 0 0.57422 0 0.70752 0 0.1333 0.03418 0.21875 0.0376 0.08203 0.11963 0.16748 0.08545 0.08203 0.18799 0.1333 0.10596 0.04785 0.23242 0.04785 0.12646 0 0.229-0.04785 0.10596-0.05127 0.18799-0.1333 0.08545-0.08545 0.11963-0.16748 0.0376-0.08545 0.0376-0.28028l0-2.68994q0.01367-0.64258 0.42041-1.20312 0.08203-0.12646 0.10937-0.18799 0.03076-0.06494 0.05127-0.14697 0.02051-0.08545 0-0.18799-0.02051-0.10596-0.0581-0.17432-0.03418-0.07178-0.1128-0.14697-0.0752-0.07861-0.16748-0.11963-0.08887-0.04443-0.32812-0.05811-0.40332-0.01367-0.72803-0.09912-0.72803-0.18115-1.24414-0.64258-0.30762-0.25293-0.51953-0.60839-0.2085-0.35889-0.28027-0.74854-0.02734-0.12646-0.04102-0.44775-0.01367-0.32471 0-0.49219 0.04102-0.62891 0.42041-1.20313 0.12646-0.19482 0.14697-0.31445 0.02051-0.11963-0.03418-0.33154-0.08545-0.37598-0.08544-0.78272 0-0.2666 0.01367-0.2666l0.18115 0.09912q0.23926 0.12646 0.72803 0.46143 0.19824 0.12646 0.36572 0.14014 0.06836-0.01367 0.32129-0.05469 0.96729-0.16748 2.0166-0.16748 1.04932 0 2.0166 0.16748 0.25293 0.05469 0.32129 0.05469 0.16748-0.01367 0.34863-0.14014 0.49219-0.32129 0.70069-0.44092 0.21191-0.11963 0.22558-0.11279 0.01367 0.00684 0.01367 0.22558 0 0.21533-0.0205 0.39307-0.02051 0.17432-0.06494 0.39307-0.04102 0.21533-0.04102 0.27002 0 0.15381 0.15381 0.40673 0.30762 0.4751 0.40674 0.99463 0.01367 0.14014 0.0205 0.46827 0.00684 0.32813-0.0205 0.4956-0.14014 1.12109-1.1211 1.77734-0.42041 0.2666-0.95019 0.40674-0.32471 0.08545-0.72803 0.09912-0.15381 0.01367-0.21875 0.02735-0.06152 0.01367-0.11963 0.04101-0.26318 0.12646-0.33496 0.43409-0.04102 0.21191 0.12647 0.44775 0.37598 0.54688 0.44775 1.03906 0.01367 0.12305 0.01367 1.60987l0 1.30224q0 0.2085 0.03418 0.29395 0.0376 0.08203 0.11963 0.16748 0.08545 0.08203 0.18799 0.1333 0.10596 0.04785 0.23242 0.04785 0.12646 0 0.229-0.04785 0.10596-0.05127 0.18799-0.1333 0.08545-0.08545 0.1128-0.16748 0.03076-0.08545 0.04443-0.31104l0.01367-1.32959q0-1.52441-0.01367-1.67822-0.05469-0.33496-0.15381-0.646-0.04102-0.10938-0.04102-0.13672 0-0.03076 0.04102-0.03076 0.04102 0 0.27002-0.07519 0.23242-0.07861 0.38623-0.1333 0.57422-0.22559 1.05615-0.6084 0.48535-0.38623 0.79297-0.875 0.16748-0.25293 0.30078-0.57422 0.1333-0.32471 0.18799-0.63233 0.09912-0.43408 0.09229-0.96386-0.00684-0.5332-0.10596-0.90918-0.14014-0.50586-0.36231-0.92627l-0.08544-0.14014 0.02734-0.16748q0.11279-0.67334 0.01709-1.34326-0.05811-0.51953-0.15039-0.68701-0.08887-0.16748-0.28369-0.2666-0.3794-0.16748-1.26123 0.28027-0.30762 0.14014-0.65967 0.37939l-0.2085 0.14014-0.18115-0.02734q-0.92627-0.15381-1.98926-0.15381-1.06299 0-2.07129 0.15381l-0.14013 0.02734-0.14014-0.09912q-0.51953-0.3623-1.03223-0.56396-0.50928-0.20508-0.80322-0.16407z"
                            fill="#FFFFFF"
                        >
                        </path>
                    </svg>
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
                    <span className="text-text-soft ml-6 writing-animation">{`skills: ['React','TypeScript', 'Tailwind', 'Symfony', 'Node'],`}</span>
                    <span className="text-text-soft ml-6 writing-animation">{`projects: buildWithCare(),`}</span>
                    <span className="text-[#7CFFCB]">{"}"}</span>
                </p>
            </div>
        </div>
    </section>
  )
}
