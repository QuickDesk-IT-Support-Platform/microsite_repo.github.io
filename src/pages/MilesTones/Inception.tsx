// JSX-only component — explicit React import not required
import { useState } from "react";
import Header from "../Header"
import glpi from "../../assets/glpi.png";
import servicenow from "../../assets/ServiceNow-Logo.png";
import logoua from "../../assets/logoUA.webp";


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
    { name: 'Related work ', isHeader: true },
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
            <p className="text-sm md:text-xl">A technical support system that allows users to request help, track the status of their requests, and enables support teams to manage, prioritize, and resolve those requests quickly and efficiently.</p>
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




        

        <section id="Expected Results" className={`my-10 p-5 rounded-2xl shadow-2xl ${activeNav === 'Expected Results' ? 'bg-gray-200' : ''}`}>
              <div className="flex flex-row gap-3 items-center pb-3">
                <span className="w-2 h-10 rounded-2xl bg-orange-600/80"></span>
                <h2 className="text-2xl font-extrabold">Expected Results</h2>
              </div>

              <p className="mb-4 leading-relaxed text-sm md:text-xl font-[Sans-serif] text-justify dark:text-slate-200">
                By implementing this project, we aim to achieve the following key outcomes:
              </p>

              <ul className="list-disc space-y-4 ml-10 mb-6 text-sm md:text-xl">
                <li>
                  <p className="leading-relaxed">
                    <span className="font-bold">A Centralized IT Support Platform:</span> QuickDesk will deliver a unified and intuitive web-based platform where organizations can efficiently manage incidents, service requests, and IT assets, eliminating fragmented and manual workflows.
                  </p>
                </li>

                <li>
                  <p className="leading-relaxed">
                    <span className="font-bold">Automated Ticket Management and Assignment:</span> The system will feature intelligent automation for ticket classification and assignment based on categories, keywords, and priorities — ensuring faster response times and reduced human error.
                  </p>
                </li>

                <li>
                  <p className="leading-relaxed">
                    <span className="font-bold">Real-Time Dashboards and Analytics:</span> Administrators will gain access to interactive dashboards providing real-time insights into ticket volumes, SLA compliance, technician performance, and user satisfaction, supporting data-driven decision-making.
                  </p>
                </li>

                <li>
                  <p className="leading-relaxed">
                    <span className="font-bold">Enhanced User Experience for Clients:</span> End-users will benefit from a self-service portal that allows them to create, track, and evaluate their support requests easily, improving transparency and overall satisfaction.
                  </p>
                </li>

                <li>
                  <p className="leading-relaxed">
                    <span className="font-bold">Efficient Technician Workflows:</span> Organization employees will have personalized dashboards for managing assigned tickets, viewing past resolutions, and collaborating effectively with users and colleagues to accelerate problem-solving.
                  </p>
                </li>

                <li>
                  <p className="leading-relaxed">
                    <span className="font-bold">Advanced Organization and Role Management:</span> Administrators will be able to manage technicians, permissions, and SLAs within their organizations, ensuring proper access control, accountability, and performance optimization.
                  </p>
                </li>

                <li>
                  <p className="leading-relaxed">
                    <span className="font-bold">Secure and Scalable Architecture:</span> The platform will ensure data security, proper anonymization of deleted accounts, and scalability to accommodate multiple organizations and thousands of concurrent users.
                  </p>
                </li>
              </ul>

              <p className="leading-relaxed dark:text-slate-200 text-sm md:text-xl">
                These outcomes ensure that QuickDesk provides a seamless, efficient, and data-driven IT support experience for users, workers, and administrators alike.
              </p>
      </section>













       
        <section id="Selected Projects" className={`my-10 p-5 rounded-2xl  shadow-2xl ${activeNav === 'Selected Projects' ? 'bg-gray-200' : ''}`}>
          <h2 className="text-2xl font-bold text-center">Selected Projects</h2>
          <div className="flex flex-col space-y-4 md:flex-row  justify-evenly mt-10 mb-10">
            <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center justify-center hover:shadow-lg hover:scale-105 transition-transform duration-300 hover:cursor-pointer"
              onClick={() => window.open("https://www.glpi-project.org/en/", "_blank")}
            >
              <img src={glpi} alt="GLPI Logo" className="min-w-50 h-24 object-contain mb-2" />
              <span>GLPI Project</span>
            </div>
          
            <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center  justify-center hover:shadow-lg hover:scale-105 transition-transform duration-300 hover:cursor-pointer "
              onClick={() => window.open("https://www.servicenow.com/", "_blank")}
            >
                <img src={servicenow} alt="ServiceNow Logo" className="min-w-50 h-20 object-contain mb-2" />
                <span>ServiceNow Project</span>
            </div>


            <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center justify-center hover:shadow-lg hover:scale-105 transition-transform duration-300 hover:cursor-pointer"
            
              onClick={() => window.open("https://bud-ev.ua.pt/s/suporte", "_blank")}
              >
                <img src={logoua} alt="BUD@UA Logo" className="min-w-50 h-24 object-contain mb-2 p-4" />
                <span>BUD@UA</span>
            </div>



          </div>
       





        </section>
        <section id="Market Analysis Overview" className={`my-10 p-5 rounded-2xl shadow-2xl ${activeNav === 'Market Analysis Overview' ? 'bg-gray-200' : ''}`}>
          <div className="flex flex-row gap-3 items-center pb-3">
            <span className="w-2 h-10 rounded-2xl bg-orange-600/80"></span>
            <h2 className="text-2xl font-extrabold">Market Analysis Overview</h2>
          </div>

          <p className="mb-4 leading-relaxed text-sm md:text-xl font-[Sans-serif] text-justify dark:text-slate-200">
              These are the projects that inspired the development of our project
          </p>

          <ul className="list-disc space-y-4 ml-10 mb-6 text-sm md:text-xl">
            <li>
              <p className="leading-relaxed">
                <span className="font-bold">ServiceNow:</span> Enterprise-grade ITSM platform offering powerful automation, AI-driven search, and real-time dashboards for large-scale organizations. However, it may be complex for smaller teams and less intuitive to use.
              </p>
            </li>

            <li>
              <p className="leading-relaxed">
                <span className="font-bold">GLPI:</span> Open-source solution for IT asset management and helpdesk, providing solid ticket tracking but limited automation, AI integration, and dashboard functionality.
              </p>
            </li>

            <li>
              <p className="leading-relaxed">
                <span className="font-bold">BUD@UA:</span> Academic support platform mainly focused on internal request handling. It provides basic ticket management but lacks real-time metrics and AI-based capabilities.
              </p>
            </li>

    
          </ul>

          <p className="leading-relaxed dark:text-slate-200 text-sm md:text-xl">
            A detailed feature comparison — including ticket management, chat integration, real-time dashboards, AI capabilities, and usability — is summarized in the Related Work table above and further discussed in the <a className="font-bold hover:underline hover:cursor-pointer"
            onClick={()=>alert("In Progress")}
            >Elaboration phase</a>.
          </p>
        </section>

      </div>
    </div>


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </div>
   
  )
}
