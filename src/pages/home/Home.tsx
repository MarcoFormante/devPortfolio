import About from "./About";
import Contacts from "./Contacts";
import Hero from "./Hero";
import Projects from "./projects/Projects";

export default function Home() {
  return (
    <div>
        <Hero/>
        <Projects/>
        <About/>
        <Contacts/>
    </div>
  )
}
