import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="progetti" className="mt-20">
        <h2 className="text-cyan font-black text-xs">PROGETTI</h2>
        <p className="text-text font-extrabold text-[42px] mt-5">Lavori in Evidenza</p>
        <ul className="grid grid-cols-2 gap-6 mt-10">
          <li>
              <ProjectCard 
              index={1} 
              title="Dashboard Task Manager" 
              stack="React · Zustand · Tailwind"
              desc="SPA per organizzare task, filtri e stato completamento."
              slug="dashboard-tech"
              textColor="text-purple"
              bgColor="after:bg-purple"
              />
          </li>
          <li >
              <ProjectCard 
              index={2} 
              title="Dashboard Task Manager" 
              stack="React · Zustand · Tailwind"
              desc="SPA per organizzare task, filtri e stato completamento."
              slug="dashboard-tech"
              textColor="text-pink"
              bgColor="after:bg-pink"
              />
          </li>
          <li >
              <ProjectCard 
              index={3} 
              title="Dashboard Task Manager" 
              stack="React · Zustand · Tailwind"
              desc="SPA per organizzare task, filtri e stato completamento."
              slug="dashboard-tech"
              textColor="text-cyan"
              bgColor="after:bg-cyan"
              />
          </li>
          <li >
              <ProjectCard 
              index={4} 
              title="Dashboard Task Manager" 
              stack="React · Zustand · Tailwind"
              desc="SPA per organizzare task, filtri e stato completamento."
              slug="dashboard-tech"
              textColor="text-green"
              bgColor="after:bg-green"
              />
          </li>
        </ul>
    </section>
  )
}
