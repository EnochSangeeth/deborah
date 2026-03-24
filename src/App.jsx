import CustomCursor from './components/CustomCursor'
import BackToTop from './components/BackToTop'
import ThemeToggle from './components/ThemeToggle'
import WelcomeToast from './components/WelcomeToast'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Values from './components/Values'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'
import ThankYou from './components/ThankYou'

export default function App() {
  return (
    <>
      <CustomCursor />
      <BackToTop />
      <ThemeToggle />
      <WelcomeToast />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Values />
        <Experience />
        <Education />
        <Skills />
        <Contact />
        <ThankYou />
      </main>
    </>
  )
}
