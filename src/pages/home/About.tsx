import StackItem from "../../components/StackItem";

const stackArray = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Next.js",
    "Typescript",
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
    <section className="my-20">
        <div className="flex gap-10">
            <div className="p-[30px] px-10 bg-card-light flex flex-col gap-4 rounded-[34px] h-[320px] w-full flex-2">
                <h2 className="text-bg font-extrabold text-[34px]"> Chi sono </h2>
                <p className="text-light-text">Junior developer con focus frontend. Mi piace trasformare idee in interfacce ordinate, accessibili e facili da mantenere. Sto cercando un team dove crescere, ricevere feedback e contribuire a prodotti reali.</p>   
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
