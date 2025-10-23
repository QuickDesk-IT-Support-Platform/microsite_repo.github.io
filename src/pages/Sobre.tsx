import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { GrUserManager } from "react-icons/gr";

export default function Sobre() {
  const infoItems = [
    {
      icon: CiCalendar,
      title: "Duration",
      content: "Setembro de 2025 - julho de 2026"
    },
    {
      icon: CiLocationOn,
      title: "Institution",
      content: "Universidade de Aveiro"
    },
    {
      icon: FiUsers,
      title: "Team Members",
      content: "6 Students"
    }
  ];

  const orientadores = [
    { nome: "José Luís Oliveira", email: "jlo@ua.pt" },
    { nome: "João Almeida", email: "joao.rafael.almeida@ua.pt" }
  ];

  return (
    <section id="sobre" className="min-h-screen bg-gray-50 dark:from-black dark:to-gray-900 dark:text-white py-30">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center space-y-4">
         
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-black to-gray-800 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            About the Project
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            An overview of the project developed as a final year thesis.
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Resumo Card */}
          <div className="group relative bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700/50 overflow-hidden">
            <div className="absolute  dark:from-blue-500/10 dark:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-8 bg-black rounded-full" />
                <h3 className="text-3xl font-bold">Summary</h3>
              </div>
              <p className="text-lg sm:text-2xl leading-relaxed text-gray-700 dark:text-gray-300">
             QuickDeskIT is a service management platform that centralizes support requests, incidents, and assets. Inspired by solutions such as ServiceNow and EasyVista, the project aims to optimize communication between users and support teams, automate processes, and improve efficiency in request resolution
              </p>
            </div>
          </div>

          {/* Informações Card */}
          <div className="group relative bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700/50 overflow-hidden">
            <div className="absolute  dark:from-purple-500/10 dark:to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-8 bg-black rounded-full" />
                <h3 className="text-3xl font-bold">Project Information</h3>
              </div>

              <div className="space-y-6">
                {/* Info Items */}
                {infoItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 group/item">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-700 dark:text-gray-400">{item.content}</p>
                    </div>
                  </div>
                ))}

                {/* Orientadores */}
                <div className="flex items-start gap-4 group/item">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                    <GrUserManager className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-3">Project Supervisors</h4>
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-800/50 rounded-xl p-4 space-y-2 border border-gray-200 dark:border-gray-600/30">
                      {orientadores.map((orientador, idx) => (
                        <a
                          key={idx} 
                          href={`mailto:${orientador.email}`}
                          className="block px-4 py-2 rounded-lg hover:bg-white dark:hover:bg-gray-600/50 transition-all duration-300 group/link"
                        >
                          <div className="flex items-center justify-between">
                            <span className=" font-medium group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400 transition-colors">
                              {orientador.nome}
                            </span>
                            <svg className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{orientador.email}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}