import StackItem from "../../components/StackItem";

import me from "../../assets/me.webp"

const stackArray = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Next.js",
    "Typescript",
    "Node",
    "Git",
    "REST API",
    "Tailwind",
    "Responsive UI",
    "MongoDB",
    "SQL",
    "MYSQL",
    "PHP",
    "Symfony",
    "Accessibility",
]

export default function About() {
  return (
    <section className="my-20" id="percorso">
        <div className="flex gap-10">
            <div className="p-[30px] px-10 bg-card-light flex flex-col gap-4 rounded-[34px] h-[320px] w-full flex-2">
                <div className="flex items-center gap-3"> 
                    <img
                        src={me}
                        alt="Foto di Marco Formante"
                        className="w-20 h-20 rounded-full object-cover shrink-0 border-2 border-slate-700  transition-all duration-300 hover:scale-320 cursor-zoom-in"
                        loading="lazy"
                    /> 
                    <h2 className="text-bg font-extrabold text-[34px]">Chi sono</h2> 
                </div>
                
                <p className="text-light-text ">Sono uno sviluppatore web specializzato nella creazione di interfacce veloci, accessibili e curate nei dettagli. Utilizzo prevalentemente <strong>React</strong>, <strong>Next.js</strong> e <strong>Tailwind CSS</strong> per sviluppare interfacce utente moderne e responsive.
                    A una forte predisposizione per il Frontend affianco competenze lato server in <strong>Node.js</strong>, <strong>PHP/Symfony</strong>, che mi permettono di comprendere l'intera architettura dell'applicazione, integrare <strong>API REST</strong> e gestire l'interazione con i database.
                    Cura del codice, attenzione all'esperienza utente e rispetto dei requisiti di accessibilità sono i principi alla base di ogni progetto che realizzo.
                </p>   
            </div>

            <div className="p-[30px] px-10 bg-surface flex flex-col gap-4 rounded-[34px] h-[320px] w-full flex-2 border border-text/10">
                <h2 className="text-text text-[34px] font-extrabold">Skill principali</h2>
                <ul className="flex w-4/5 flex-wrap gap-2">
                    {stackArray.map(item => (
                        <StackItem name={item} key={item}/>
                    ))}
                   
                </ul>
            </div>
        </div>
    </section>
  )
}
