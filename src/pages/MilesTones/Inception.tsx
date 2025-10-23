// JSX-only component — explicit React import not required
import { useState } from "react";
import Header from "../Header"



export default function Inception() {
  const handleScrollTo = (id: string, name: string) => {
    setActiveNav(name);
    if (id === "M1 - Inception") {
      return;
    }
    const element = document.getElementById(id);
    if (!element) return;

    // Try to scroll the local main container if it exists (we made it scrollable)
    const container = document.getElementById('inception-main');
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
  const [activeNav, setActiveNav] = useState('Project Overview');
    const navItems = [
    { name: 'M1 - Inception', isHeader: true },
    { name: 'Project Overview', indent: true },
    { name: 'Context', indent: true, sub: true },
    { name: 'Problem', indent: true, sub: true },
    { name: 'Expected Results', indent: true, sub: true },
    { name: 'High-Level Architecture', indent: true, sub: true },
    { name: 'State of the Art', isHeader: true },
    { name: 'Selected Projects', indent: true },
    { name: 'Market Analysis Overview', indent: true },
  ];
  return (
    <div className="flex min-h-screen ">
      <Header />

    <div className="flex pt-18 w-full">
      {/* leftbar */}
      <div className="hidden md:flex md:flex-col md:w-2/8 md:bg-gray-200 p-4 md:border-t-2 md:border-gray-300 md:sticky md:top-16">
              {navItems.map((item, idx) => (
            <div key={idx}>
              {item.isHeader ? (
                <h2 className="text-orange-600 text-xl font-bold uppercase tracking-wider mt-6 mb-3 px-3">
                  {item.name}
                </h2>
              ) : (
                <div
                  onClick={() => handleScrollTo(item.name,item.name)}
                  className={`
                    px-4 py-3 mb-1 rounded-xl cursor-pointer transition-all duration-300
                    ${item.sub ? 'ml-4' : ''}
                    ${activeNav === item.name 
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30 transform scale-105' 
                      : 'text-gray-600 hover:bg-orange-50 hover:text-orange-600 hover:translate-x-1'
                    }
                  `}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">{item.name}</span>
                  </div>
                </div>
              )}
            </div>
          ))}

      </div>
  {/* main content */}
  <div id="inception-main" className="w-full md:w-8/8 p-4 md:p-20 bg-white md:h-[calc(100vh-4rem)] overflow-y-auto">
        <h1 className="font-bold text-4xl text-center md:text-start">M1 - Inception</h1>        
        <div className="mt-10 justify-center flex flex-col items-center space-y-6">
        
        <div className="w-full max-w-5xl aspect-video overflow-hidden rounded-2xl shadow-lg">
          <iframe
            src="https://www.canva.com/design/DAG1_FH9QYw/E3hprpNYD2unQRZsBiVL4w/view?embed"
            allowFullScreen
            loading="lazy"
            className="w-full h-full border-0"
          ></iframe>
      </div>



        </div>


        <section id="Project Overview" className="my-10 p-5 text-center">
          <div className={`shadow-2xl rounded-2xl p-5 bg-gray-200`}>
             <h2 className="text-2xl md:text-3xl mb-2 font-bold">Project Overview</h2>
            <p className="text-sm md:text-xl">Developing a web platform to optimize IT support services through self-service, ticket automation, and real-time dashboards.</p>
          </div>
          
        </section>
        <section id="Context" className={`my-10 p-5 rounded-2xl  shadow-2xl ${activeNav === 'Context' ? ' bg-gray-200' : ' '}`}>
          <div className=" p-5 rounded-2xl ">
            <div className="flex flex-row  gap-3 items-center pb-3" >
               <span className={`w-2   h-10 rounded-2xl bg-orange-600/80`}></span>
              <h2 className="text-2xl font-extrabold ">Context</h2>
            </div>
        

            <p className="text-sm md:text-xl leading-relaxed text-justify dark:text-slate-200 font-sans mb-4">
            Modern organizations depend heavily on IT services to ensure operational continuity and business efficiency. As IT infrastructures and applications grow more complex, departments face increasing challenges in managing incidents, service requests, and assets effectively. Traditional ticketing systems often lack automation, integration, and visibility, resulting in inefficient workflows and delayed problem resolution.
            </p>


            <p className="text-sm md:text-xl leading-relaxed text-justify  dark:text-slate-200 font-sans mb-4">
            <span className="font-extrabold  dark:text-white">HelpDesk360</span> emerges as a solution to these challenges, offering a <span className="font-semibold">centralized, user-friendly, and automated IT Service Management (ITSM) platform</span> inspired by solutions such as <span className="italic">EasyVista</span> and <span className="italic">ServiceNow</span>. The platform aims to streamline IT operations, enhance collaboration between users and IT teams, and provide actionable insights through real-time dashboards and intelligent automation.
            </p>


            <p className=" text-sm md:text-xl leading-relaxed text-justify  dark:text-slate-200 font-sans">
            By adopting <span className="font-extrabold   dark:text-white">HelpDesk360</span>, organizations can expect improved response times, optimized resource allocation, and a more transparent and efficient service experience for both end-users and IT staff.
            </p>
          </div>
        </section>
        <section id="Problem" className={`my-10 p-5 rounded-2xl  shadow-2xl ${activeNav === 'Problem' ? 'bg-gray-200' : ' '}`}>
            <div className="flex flex-row  gap-3 items-center pb-3" >
               <span className={`w-2   h-10 rounded-2xl bg-orange-600/80`}></span>
              <h2 className="text-2xl font-extrabold ">Problem</h2>
            </div>
              <p className="mb-4 leading-relaxed  text-sm md:text-xl font-[Sans-serif] text-justify dark:text-slate-200">
              Currently, many IT departments rely on fragmented and manual systems to manage support
              requests, incidents, and assets. These outdated processes create significant bottlenecks
              and reduce the overall quality of IT service delivery.
              </p>


              <p className="mb-4  text-sm md:text-xl">From this, the following problems arise:</p>


              <ul className="list-disc space-y-4 ml-10 mb-6 text-sm md:text-xl">
                  <li>
                  <p className="leading-relaxed">
                  <span className="font-bold">Lack of integration:</span> Existing tools are disconnected,
                  making it difficult to track requests and incidents across multiple systems.
                  </p>
                  </li>


                  <li>
                  <p className="leading-relaxed">
                  <span className="font-bold">Limited automation:</span> Manual ticket categorization and assignment slow
                  down response times and increase the risk of errors.
                  </p>
                  </li>


                  <li>
                  <p className="leading-relaxed">
                  <span className="font-bold">Poor visibility:</span> Managers lack access to real-time data, hindering
                  performance monitoring and decision-making.
                  </p>
                  </li>


                  <li>
                  <p className="leading-relaxed">
                  <span className="font-bold">User frustration:</span> End-users have limited transparency on ticket status and
                  resolution progress, leading to dissatisfaction.
                  </p>
                  </li>


                  <li>
                  <p className="leading-relaxed">
                  <span className="font-bold">Inefficient resource management:</span> Without centralized control,
                  prioritization and workload balancing are difficult to achieve.
                  </p>
                  </li>
              </ul>


              <p className="leading-relaxed dark:text-slate-200 text-sm md:text-xl">
              Addressing these challenges is essential for building a modern ITSM platform capable of enhancing productivity,
              improving service quality, and ensuring a seamless experience for both IT teams and end-users.
              </p>

        </section>
        <section id="Expected Results" className={`my-10 p-5 rounded-2xl  shadow-2xl ${activeNav === 'Expected Results' ? 'bg-gray-200' : ''}`}>
          <h2 className="text-2xl font-bold text-center">Expected Results</h2>
          <p>This section details the expected results of the project.</p>
        </section>
        <section id="High-Level Architecture" className={`my-10 p-5 rounded-2xl  shadow-2xl ${activeNav === 'High-Level Architecture' ? 'bg-gray-200' : ''}`}>
          <h2 className="text-2xl font-bold text-center">High-Level Architecture</h2>
          <p>This section presents the high-level architecture of the solution.</p>
        </section>
        <section id="State of the Art" className={`my-10 p-5 rounded-2xl  shadow-2xl ${activeNav === 'State of the Art' ? 'bg-gray-200' : ''}`}>
          <h2 className="text-2xl font-bold text-center">State of the Art</h2>
          <p>This section reviews the current state of the art related to the project.</p>
        </section>
        <section id="Selected Projects" className={`my-10 p-5 rounded-2xl  shadow-2xl ${activeNav === 'Selected Projects' ? 'bg-gray-200' : ''}`}>
          <h2 className="text-2xl font-bold text-center">Selected Projects</h2>
          <p>This section highlights selected projects relevant to our work.</p>
        </section>
        <section id="Market Analysis Overview" className={`my-10 p-5 rounded-2xl  shadow-2xl ${activeNav === 'Market Analysis Overview' ? 'bg-gray-200' : ''}`}>
          <h2 className="text-2xl font-bold text-center">Market Analysis Overview</h2>
          <p>This section provides an overview of the market analysis conducted.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo autem minus, eligendi delectus modi tenetur non accusamus, sapiente voluptas ratione labore eaque, necessitatibus ea nulla commodi at dolorum optio. Labore?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo autem minus, eligendi delectus modi tenetur non accusamus, sapiente voluptas ratione labore eaque, necessitatibus ea nulla commodi at dolorum optio. Labore?</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo autem minus, eligendi delectus modi tenetur non accusamus, sapiente voluptas ratione labore eaque, necessitatibus ea nulla commodi at dolorum optio. Labore?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo autem minus, eligendi delectus modi tenetur non accusamus, sapiente voluptas ratione labore eaque, necessitatibus ea nulla commodi at dolorum optio. Labore?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo autem minus, eligendi delectus modi tenetur non accusamus, sapiente voluptas ratione labore eaque, necessitatibus ea nulla commodi at dolorum optio. Labore?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo autem minus, eligendi delectus modi tenetur non accusamus, sapiente voluptas ratione labore eaque, necessitatibus ea nulla commodi at dolorum optio. Labore?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo autem minus, eligendi delectus modi tenetur non accusamus, sapiente voluptas ratione labore eaque, necessitatibus ea nulla commodi at dolorum optio. Labore?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo autem minus, eligendi delectus modi tenetur non accusamus, sapiente voluptas ratione labore eaque, necessitatibus ea nulla commodi at dolorum optio. Labore?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo autem minus, eligendi delectus modi tenetur non accusamus, sapiente voluptas ratione labore eaque, necessitatibus ea nulla commodi at dolorum optio. Labore?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo autem minus, eligendi delectus modi tenetur non accusamus, sapiente voluptas ratione labore eaque, necessitatibus ea nulla commodi at dolorum optio. Labore?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo autem minus, eligendi delectus modi tenetur non accusamus, sapiente voluptas ratione labore eaque, necessitatibus ea nulla commodi at dolorum optio. Labore?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo autem minus, eligendi delectus modi tenetur non accusamus, sapiente voluptas ratione labore eaque, necessitatibus ea nulla commodi at dolorum optio. Labore?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo autem minus, eligendi delectus modi tenetur non accusamus, sapiente voluptas ratione labore eaque, necessitatibus ea nulla commodi at dolorum optio. Labore?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo autem minus, eligendi delectus modi tenetur non accusamus, sapiente voluptas ratione labore eaque, necessitatibus ea nulla commodi at dolorum optio. Labore?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo autem minus, eligendi delectus modi tenetur non accusamus, sapiente voluptas ratione labore eaque, necessitatibus ea nulla commodi at dolorum optio. Labore?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo autem minus, eligendi delectus modi tenetur non accusamus, sapiente voluptas ratione labore eaque, necessitatibus ea nulla commodi at dolorum optio. Labore?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo autem minus, eligendi delectus modi tenetur non accusamus, sapiente voluptas ratione labore eaque, necessitatibus ea nulla commodi at dolorum optio. Labore?</p>

        </section>
      </div>
    </div>


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </div>
   
  )
}
