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
              color="purple"
              />
          </li>
          <li >
              <ProjectCard 
              index={2} 
              title="Dashboard Task Manager" 
              stack="React · Zustand · Tailwind"
              desc="SPA per organizzare task, filtri e stato completamento."
              slug="dashboard-tech"
              color="pink"
              />
          </li>
          <li >
              <ProjectCard 
              index={3} 
              title="Dashboard Task Manager" 
              stack="React · Zustand · Tailwind"
              desc="SPA per organizzare task, filtri e stato completamento."
              slug="dashboard-tech"
              color="cyan"
              />
          </li>
          <li >
              <ProjectCard 
              index={4} 
              title="Dashboard Task Manager" 
              stack="React · Zustand · Tailwind"
              desc="SPA per organizzare task, filtri e stato completamento."
              slug="dashboard-tech"
              color="green"
              />
          </li>
        </ul>
    </section>
  )
}
