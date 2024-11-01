import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll 
    z-0 overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Geetesh's Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Geetesh's Portfolio showcasing skills, experience, and projects" />
      </Head>
      
      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>    

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      {/* footer  */}
      <Link href='#hero'>
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img 
            className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
            src="About.png" alt="" />
          </div>
        </footer>
      </Link>

    </div>
  );
}
