import CustomCursor from './components/CustomCursor'
import BackToTop from './components/BackToTop'
import GoalStatement from './components/GoalStatement'
import WelcomeToast from './components/WelcomeToast'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Values from './components/Values'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <CustomCursor />
      <BackToTop />
      <WelcomeToast />
      <Navbar />
      <main>
        <Hero />
        <GoalStatement />
        <About />
        <Values />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
