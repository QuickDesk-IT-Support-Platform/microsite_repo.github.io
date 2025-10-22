


import { Calendar, CheckSquare } from 'lucide-react';
import milestones from "../milestonesdata/milestonesdata";
export default function CalendarProject() {


  return (
    <section id="calendar" className=' min-h-screen  space-y-4 bg-gray-50 dark:bg-black/89 dark:text-white p-4 md:py-20 '>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
            <Calendar className="w-10 h-10 text-orange-600 dark:text-blue-400" />
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Calendar
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center md:text-left">
            Project milestones and tasks timeline
          </p>
        </div>

        {/* Table */}
        <div className="bg-white w-full dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-orange-500 to-orange-600 dark:bg-gray-700">
                  <th className="px-3 md:px-20 py-4 text-left text-sm font-extrabold text-black dark:text-white uppercase tracking-wider">
                    Milestone
                  </th>
                  <th className="px-3 md:px-20 py-4 text-left text-sm font-extrabold text-black dark:text-white uppercase tracking-wider">
                    Date (2025)
                  </th>
                  <th className="px-3 md:px-20 py-4 text-left text-sm font-extrabold text-black dark:text-white uppercase tracking-wider">
                    Task List
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {milestones.map((milestone, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                    {/* Milestone Name */}
                    <td className="px-3 md:px-20 py-6 whitespace-nowrap align-top">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${milestone.color}`} />
                        <span className="text-sm md:text-xl font-semibold text-gray-900 dark:text-white">
                          {milestone.name}
                        </span>
                      </div>
                    </td>

                    {/* Date Range */}
                    <td className="px-3 md:px-20 py-6 whitespace-nowrap align-top">
                      <span className="text-sm md:text-xl text-gray-700 dark:text-gray-300 font-medium">
                        {milestone.dateRange}
                      </span>
                    </td>

                    {/* Tasks */}
                    <td className="px-3 md:px-20 py-6 align-top">
                      <ul className="space-y-5 md:space-y-2">
                        {milestone.tasks.map((task, taskIdx) => (
                          <li key={taskIdx} className="flex  items-center  gap-2">
                            <CheckSquare className="w-4 h-4 text-gray-400 dark:text-gray-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm md:text-xl text-gray-700 dark:text-gray-300">
                              {task}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}