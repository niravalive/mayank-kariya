import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import ServicesPortfolio from './components/sections/ServicesPortfolio'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Ease out expo
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    } as any)

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  const [footerHeight, setFooterHeight] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight)
      }
    }

    // Initial check
    handleResize()
    
    // Slight delay to ensure DOM is fully painted for height calc
    const timeout = setTimeout(handleResize, 100)
    window.addEventListener('resize', handleResize)

    return () => {
      clearTimeout(timeout)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="min-h-screen font-sans selection:bg-[#DDF4E7] selection:text-[#124170] bg-[#124170]">
      <div
        className="relative z-10 bg-white shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
        style={{ marginBottom: isMobile ? '0px' : `${footerHeight}px` }}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <ServicesPortfolio />
          <Testimonials />
          <Contact />
        </main>
      </div>
      <div 
        ref={footerRef} 
        className={isMobile ? "relative z-20" : "fixed bottom-0 left-0 right-0 z-0"}
      >
        <Footer />
      </div>
    </div>
  )
}

export default App
