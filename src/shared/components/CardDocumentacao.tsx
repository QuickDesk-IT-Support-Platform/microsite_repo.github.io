// JSX-only component — explicit React import not required
import FileIcon from '../../assets/fileicon.png'
import CalendarIcon from '../../assets/calendar.png'
interface CardDocumentacaoProps {
  title: string;
  description: string;
  link?: string;
  date?: string; // Optional prop for date
  status: string; // Status of the documentation
}

export default function CardDocumentacao({title,description,link,date,status}:CardDocumentacaoProps) {
  return (
    <div className='p-5 shadow-2xl hover:shadow-lg transition duration-300 rounded-2xl dark:bg-[#121212] border-gray-900 dark:shadow-none' >
      
      <div className='flex flex-row items-center space-x-2 mb-4'>
        <div className='p-2 bg-gray-100 dark:bg-gray-800 rounded-full'>
          <img src={FileIcon} alt="File Icon" className='w-5 h-5 dark:invert' />
        </div>
        <div className='flex flex-col '>
          <h2 className='text-lg font-bold'>{title}</h2>
          <div className='flex flex-row gap-2 text-sm'>
              {/* <span>{docType}</span>
              <span>1.8MB</span> */}
              <div className={`px-2 py-1 rounded-full text-xs font-semibold
                  ${status === 'Concluido' ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' : ''}
                  ${status === 'Em Andamento' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100' : ''}
                  ${status === 'Planeado' ? 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100' : ''}
                `}>
                <span>
                  {status}
                </span>
              </div>
          </div>
        
        </div>

      </div>
      
    
      <span>{description}</span>
      <div className='flex flex-row justify-between items-center mt-4'>
        
        <div className='flex flex-row space-x-2 items-center'>
          <img src={CalendarIcon} alt="Calendar Icon" className='w-5 h-5 dark:invert' />
          <span className='text-sm'>{date}</span>
        </div>
        <div>
          <button className='h-full w-32  bg-black/70 text-white p-2 rounded-2xl dark:bg-white/20 dark:text-white hover:bg-blue-700 transition duration-300 hover:cursor-pointer mr-2 '
            onClick={() => window.open(link, '_blank')}
          >
            <div className='flex flex-row justify-center items-center'>
              <span className="text-sm font-bold">
                  Visualizar
              </span>
            </div>
          </button>
          
          {/* <button className='h-full w-32  bg-orange-300 text-white p-2 rounded-2xl dark:bg-gray-200 dark:text-black hover:bg-blue-700 transition duration-300 hover:cursor-pointer'>
            <div className='flex flex-row justify-center items-center'>
              <img src={DownloadIcon} alt="Download Icon" className='w-4 h-4 inline-block mr-2 '/>
              <span className="text-sm font-bold">
                  Download
              </span>
            </div>
        
          </button> */}
        </div>
      </div>
    </div>
  )
}
