import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useEffect, useRef, useState } from "react";
import Home from "./sections/Home";
import 'locomotive-scroll/dist/locomotive-scroll.css'
import { AnimatePresence } from "framer-motion";
import About from "./sections/About";
import Navbar from "./components/Navbar";
import Project from "./sections/Project";
import Footer from "./sections/Footer";
import Experience from "./sections/Experience";
import Loader from "./components/Loader";
import Chaffle from 'chaffle'


function App() {

  const containerRef = useRef(null);
  const [Loaded, setLoaded] = useState(false);

  const elements = document.querySelectorAll('[data-chaffle]');
  Array.prototype.forEach.call(elements, function (el) {
    const chaffle = new Chaffle(el, { /* options */ });
    el.addEventListener('mouseover', function () {
      chaffle.init();
    });
  });

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <>
      <GlobalStyles />

      <ThemeProvider theme={dark} >
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
          }}
          watch={
            [

            ]
          }
          containerRef={containerRef}
        >
          <AnimatePresence>{Loaded ? null : <Loader />}   </AnimatePresence>
          <Navbar />
          <main className="App" data-scroll-container ref={containerRef}>
            <AnimatePresence>
              <Home key="home" />
              <About key="about" />
              <Project key="project" />
              <Experience key="experience" />
              <Footer key="footer" />
            </AnimatePresence>
          </main>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
