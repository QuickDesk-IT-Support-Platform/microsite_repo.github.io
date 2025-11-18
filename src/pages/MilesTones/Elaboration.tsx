// JSX-only component — explicit React import not required
import { useState } from "react";
import Header from "../Header";
import state_of_art_ticket from "../../assets/state_of_art_ticket.png";
import state_of_art_ai from "../../assets/state_of_art_ai.png";
import state_of_art_ux from "../../assets/state_of_art_ux.png";
import { func_requirements, nonFunctionalReqs } from "./requirements_data/Requisitosdata";
import end_user_use_case from "../../assets/end_user.png";
import support_staff_use_case from "../../assets/suport_staff.png";
import org_admin_use_case from "../../assets/org_admin.png";
import system_architecture from "../../assets/system_arc.png";
import container_architecture from "../../assets/container_arc.png";
import quickdesck_admin_use_case from "../../assets/quickdesck_admin.png";
import relational from "../../assets/relational.png";
import non_relational from "../../assets/non_relational.png";
export default function Elaboration() {
  const handleScrollTo = (id: string, name: string) => {
    setActiveNav(name);
    if (id === "M1 - Elaboration") {
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
  const [activeNav, setActiveNav] = useState('State of the Art');
    const navItems = [
    { name: 'M1 - Elaboration', isHeader: true },
    { name: 'State of the Art', indent: true },
    { name: 'Ticket Management', indent: true, sub: true,subSub: true },
    { name: 'User Support', indent: true, sub: true,subSub: true },
    { name: 'Automation and AI Integration', indent: true, sub: true,subSub: true },
    { name: 'Usability and UX/UI', indent: true, sub: true,subSub: true },
    { name: 'Requirements',isHeader:true },
    { name: 'Functional Requirements', indent: true },
    { name: 'Non-Functional Requirements', indent: true },
    { name: 'Use Cases',isHeader:true },
    { name: 'Architecture', isHeader:true },
    {name:"Mockups",isHeader:true},
  ];
  return (
    <div className="flex min-h-screen ">
      <Header />

    <div className="flex pt-18 w-full">
      {/* leftbar */}
      <div className="hidden md:flex md:flex-col md:w-2/8 md:bg-gray-200 p-4 md:border-t-2 md:border-gray-300 md:sticky md:top-16">
           
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li
              key={item.name}
              className={` px-4 py-3 mb-1 rounded-xl cursor-pointer transition-all duration-300
                ${item.isHeader ? "text-orange-600 text-xl font-bold uppercase tracking-wider mt-6 mb-3 px-3" : 'cursor-pointer '}
                ${item.indent ? 'ml-4' : ''}
                ${item.sub ? 'ml-8' : ''}
                ${item.subSub ? 'ml-12' : ''}
                ${activeNav === item.name  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30 transform scale-105' 
                      : 'text-gray-600 hover:bg-orange-50 hover:text-orange-600 hover:translate-x-1'}
              `}
              onClick={() => handleScrollTo(item.name, item.name)}
            >
              {item.name}
            </li>
          ))}
        </ul>

      </div>
  {/* main content */}
  <div id="inception-main" className="w-full md:w-8/8 p-4 md:p-20 bg-white md:h-[calc(100vh-4rem)] overflow-y-auto">
        <h1 className="font-bold text-4xl text-center md:text-start">M1 - Elaboration</h1>        
        <div className="mt-10 justify-center flex flex-col items-center space-y-6">
        
        <div className="w-full max-w-5xl aspect-video overflow-hidden rounded-2xl shadow-lg">
          <iframe
            src="https://www.canva.com/design/DAG4HWwxI4Q/aZoT5N_6snx0cYfDiV8Mqw/view?embed"
            allowFullScreen
            loading="lazy"
            className="w-full h-full border-0"
          ></iframe>
      </div>



        </div>


       
        <section id="State of the Art" className={`my-10 p-5 rounded-2xl  shadow-2xl ${activeNav === 'Context' ? ' bg-gray-200' : ' '}`}>
          <div className=" p-5 rounded-2xl ">
            <div className="flex flex-row  gap-3 items-center pb-3" >
               <span className={`w-2   h-10 rounded-2xl bg-orange-600/80`}></span>
              <h2 className="text-2xl font-extrabold ">Selected Features </h2>
            </div>
        

            <p className="text-sm md:text-xl leading-relaxed text-justify dark:text-slate-200 font-sans mb-4">
              These are the key features we identified in our market analysis.

            </p>


            <section id="Ticket Management" className={`my-6 ${activeNav === 'Ticket Management' ? 'bg-gray-200 p-5 rounded-xl' : ''}`}>
                <h3 className="text-xl font-bold mb-5 mt-5">Ticket Management</h3>
                <div className="flex item-start justify-start mb-10 rounded-lg overflow-hidden shadow-2xl">
                  <img src={state_of_art_ticket} alt="State of the Art Ticket Management" className="w-full h-auto" />  
                </div>
                <ul className="list-disc space-y-2 ml-6 text-sm md:text-xl">
                  <li>Centralized ticket creation and tracking system</li>
                  <li>Automated ticket categorization and prioritization</li>
                  <li>Service Level Agreement (SLA) monitoring</li>
                  <li>Real time Ticket updates and notifications</li>
                  <li>Technician Assignment Automation</li>
                </ul>
          
            </section>

            <section id="User Support" className={`my-6 ${activeNav === 'User Support' ? 'bg-gray-200 p-5 rounded-xl' : ''}`}>
              <h3 className="text-xl font-bold mb-5 mt-5">User Support</h3>
              <ul className="list-disc space-y-2 ml-6 text-sm md:text-xl">
                <li>Self-service portal for users to submit and track tickets</li>
                <li>Knowledge base integration for common issues</li>
                <li>Multi-channel support (email, chat, phone)</li>
              </ul>
            </section>

            <section id="Automation and AI Integration" className={`my-6 ${activeNav === 'Automation and AI Integration' ? 'bg-gray-200 p-5 rounded-xl' : ''}`}>
              <h3 className="text-xl font-bold mb-5 mt-5">Automation and AI Integration</h3>
              <div className="flex item-start justify-start mb-10 rounded-lg overflow-hidden shadow-2xl">
                  <img src={state_of_art_ai} alt="Automation and AI Integration" className="w-full h-auto" />  
              </div>
              <ul className="list-disc space-y-2 ml-6 text-sm md:text-xl">
                <li>AI-powered ticket classification</li>
                <li>AI Priority prediction</li>
                <li>Auto-routing based on Skills/workload</li>
                <li>Chatbots for initial user interaction and issue resolution</li>
                <li>Automatic Responses for common issues</li>
              </ul>
            </section>

            <section id="Usability and UX/UI" className={`my-6 ${activeNav === 'Usability and UX/UI' ? 'bg-gray-200 p-5 rounded-xl' : ''}`}>
              <h3 className="text-xl font-bold mb-5 mt-5">Usability and UX/UI</h3>
              <div className="flex item-start justify-start mb-10 rounded-lg overflow-hidden shadow-lg">
                  <img src={state_of_art_ux} alt="Usability and UX/UI" className="w-full h-auto" />  
              </div>
              <ul className="list-disc space-y-2 ml-6 text-sm md:text-xl">
                <li>Intuitive and user-friendly interface design</li>
                <li>Custom branding options</li>
                <li>Low Cognitive Load</li>
                <li>Dark Mode</li>
              </ul>
            </section>

          </div>
        </section>


        <section id="Functional Requirements" className={`my-10 p-5 rounded-2xl  shadow-2xl ${activeNav === 'Functional Requirements' ? 'bg-gray-200' : ' '}`}>
            <div className="flex flex-row  gap-3 items-center pb-3" >
               <span className={`w-2   h-10 rounded-2xl bg-orange-600/80`}></span>
              <h2 className="text-2xl font-extrabold ">Functional Requirements</h2>
            </div>
            <div className="p-5">

          {func_requirements.map((section, index) => (
                      <div key={index} className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">{section.category}</h2>
                        <ul className="space-y-2 list-disc list-inside">
                          {section.items.map((item, i) => (
                            <li key={i} className="text-sm md:text-xl leading-relaxed dark:text-slate-200">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  
            </div>

        
        </section>

        <section id="Non-Functional Requirements" className={`my-10 p-5 rounded-2xl  shadow-2xl ${activeNav === 'Non-Functional Requirements' ? 'bg-gray-200' : ' '}`}>
            <div className="flex flex-row  gap-3 items-center pb-3" >
               <span className={`w-2   h-10 rounded-2xl bg-orange-600/80`}></span>
              <h2 className="text-2xl font-extrabold ">Non-Functional Requirements</h2>
            </div>
            <div className="p-5">

          {nonFunctionalReqs.map((section, index) => (
                      <div key={index} className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">{section.category}</h2>
                        <ul className="space-y-2 list-disc list-inside">
                          {section.items.map((item, i) => (
                            <li key={i} className="text-sm md:text-xl leading-relaxed dark:text-slate-200">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  
            </div>

        
        </section>

        <section id="Use Cases" className={`my-10 p-5 rounded-2xl  shadow-2xl`}>
           <div className="flex flex-row  gap-3 items-center pb-3" >
               <span className={`w-2   h-10 rounded-2xl bg-orange-600/80`}></span>
              <h2 className="text-2xl font-extrabold ">Use Cases</h2>
            </div>
            <span className="text-sm md:text-xl leading-relaxed mb-4">Here is some of the use cases for our mvp</span>

            <div className="flex flex-col items-center ">
              
              <h1 className="text-xl font-bold">End User(Core)</h1>
              <div className="flex item-start justify-start mb-10 mt-10">
                  <img src={end_user_use_case} alt="End User(Core)" className=" md:scale-80" />  
              </div>

              <h1 className="text-xl font-bold">Support Staff</h1>
              <div className="flex item-start justify-start mb-10 mt-10">
                  <img src={support_staff_use_case} alt="Support Staff" className="scale-100  md:scale-80" />  
              </div>


             
              <h1 className="text-xl font-bold">Organization Administrator</h1>
              <div className="flex item-start justify-start mb-10 mt-10">
                  <img src={org_admin_use_case} alt="Organization Administrator" className="scale-100 md:scale-80" />  
              </div>


            <h1 className="text-xl font-bold">QuickDesk Administrator</h1>
              <div className="flex item-start justify-start mb-10 mt-10">
                  <img src={quickdesck_admin_use_case} alt="QuickDesk Administrator" className="scale-100" />  
              </div>
            </div>


        </section>





        <section id="Architecture" className={`my-10 p-5 rounded-2xl  shadow-2xl }`}>
            <div className="flex flex-row  gap-3 items-center pb-3" >
               <span className={`w-2   h-10 rounded-2xl bg-orange-600/80`}></span>
              <h2 className="text-2xl font-extrabold ">Architecture</h2>
            </div>
            <div className="flex flex-col ">
              
              <h1 className="text-xl font-bold">System Architecture</h1>
              <div className="flex item-center justify-center mb-10 mt-5">
                  <img src={system_architecture} alt="System Architecture" className="w-150 h-150" />  
              </div>

              <h1 className="text-xl font-bold">Container-level Diagram</h1>
              <div className="flex item-center justify-center mb-10 mt-5">
                  <img src={container_architecture} alt="Container-level Diagram" className="scale-100 md:scale-70" />  
              </div>


              <h1 className="text-xl font-bold">Domain Model </h1>
              <div className="flex flex-col md:flex-row p-5  gap-10">
                <div className="flex flex-col">
                  <h1 className="text-md font-bold">Relational Database</h1>
                  <img src={relational} alt="Relational Database" className="scale-100" />  
                </div>


                
                <div className="flex flex-col">
                  <h1 className="text-md font-bold">Non Relational Database</h1>
                  <img src={non_relational} alt="Non Relational Database" className="scale-100" />
                </div>

              </div>

              {/* <div className="flex flex-row items-center justify-center mb-10 mt-5">
                  <div className="flex flex-col item-center justify-center mb-10 mt-5">
                    <h1 className="text-xl font-bold">Relational Database</h1>
                    <img src={relational} alt="State of the Art Ticket Management" className="scale-70" />  
                  </div>

                <div className="flex flex-col item-center justify-center mb-10 mt-5">
                  <h1 className="text-xl font-bold">Non Relational Database</h1>
                  <img src={non_relational} alt="State of the Art Ticket Management" className="scale-70" />  
                </div>


              </div> */}
            

              
            </div>

        </section>


        <section id="mockups" className={`my-10 p-5 rounded-2xl  shadow-2xl ${activeNav === 'Mockups' ? ' bg-gray-200' : ' '}`}>
            <div className="flex flex-row  gap-3 items-center pb-3" >
               <span className={`w-2   h-10 rounded-2xl bg-orange-600/80`}></span>
              <h2 className="text-2xl font-extrabold ">Mockups</h2>
            </div>

            <span className="text-sm md:text-xl leading-relaxed">You can checkout our mockups <a className="text-sm md:text-xl leading-relaxed cursor-pointer text-orange-600 underline"
            href="https://www.figma.com/design/IaVOdhnnNxb1Njn40h55BM/QuickDeskIT-Views--No-Dark-Mode-?node-id=0-1&t=sYKamI7E2NDrzrkK-1"
            target="_blank"
            >here</a></span>
        </section>


      







      </div>
    </div>


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </div>
   
  )
}
