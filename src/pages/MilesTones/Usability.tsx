// JSX-only component — explicit React import not required
import Header from "../Header";

import container_architecture from "../../assets/updated_container_diagram.png";
import { useState } from "react";
export default function Usability() {
  const handleScrollTo = (id: string, name: string) => {
      setActiveNav(name);
      if (id === "M1 - Usability and Digital Accessibility") {
        return;
      }
      const element = document.getElementById(id);
      if (!element) return;
  
      // Try to scroll the local main container if it exists (we made it scrollable)
      const container = document.getElementById('M1 - Usability and Digital Accessibility');
      const header = document.getElementById('site-header');
      const headerHeight = header ? header.offsetHeight : 0;
  
      if (container) {
        // compute element position relative to container and scroll container
        const elementRect = element.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const offset = elementRect.top - containerRect.top + container.scrollTop - headerHeight - 8;
        container.scrollTo({ top: offset, behavior: 'smooth' });
        return;
      }
  
      // fallback to window scrolling
      const y = element.getBoundingClientRect().top + window.scrollY - headerHeight - 8;
      window.scrollTo({ top: y, behavior: 'smooth' });
    };
    const [activeNav, setActiveNav] = useState('Updated Architecture');
        const navItems = [
        { name: 'M1 - Usability and Digital Accessibility', isHeader: true },
        { name: 'Updated Architecture', indent: true }
    ];

  return (
    <div className="flex min-h-screen ">
      <Header />

    <div className="flex pt-18 w-full">
  
  {/* main content */}
    <div id="M1 - Usability and Digital Accessibility" className="w-full md:w-8/8 p-4 md:p-20 bg-white md:h-[calc(100vh-4rem)] overflow-y-auto">
        
          
        <h1 className="font-bold text-4xl text-center md:text-start">M1 - Usability and Digital Accessibility</h1>        
        
        <div className="mt-10 justify-center flex flex-col items-center space-y-6">
            
            <div className="w-full max-w-5xl aspect-video overflow-hidden rounded-2xl shadow-lg">
                <iframe
                  src="https://www.canva.com/design/DAHDjaVxZrQ/eX4e639yc6nNOekIr4Cimg/view?embed"
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full border-0"
                ></iframe>
            </div>

        </div>

        <section id="Updated Architecture" className={`my-10 p-5 rounded-2xl  shadow-2xl }`}>
            <div className="flex flex-row  gap-3 items-center pb-3" >
               <span className={`w-2   h-10 rounded-2xl bg-orange-600/80`}></span>
              <h2 className="text-2xl font-extrabold ">Updated Architecture</h2>
            </div>
            <div className="flex flex-col ">

              <h1 className="text-xl font-bold">Container-level Diagram</h1>
              <div className="flex item-center justify-center mb-10 mt-5">
                  <img src={container_architecture} alt="Container-level Diagram" className="scale-100 md:scale-70" />  
              </div>

            </div>

          </section>
      </div>
    </div>
    
    </div>
   
  )
}
