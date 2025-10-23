// JSX-only component — explicit React import not required
import CardDocumentacao from '../shared/components/CardDocumentacao'
import docs from '../docsData/DocksData';
export default function Documentacao() {


  return (
    <section id="documentacao" className='py-10 min-h-screen bg-gray-50 dark:bg-black/89 dark:text-white'>
      <div className='flex flex-col  items-center justify-center text-center'> 
        <h1 className='text-4xl font-bold mb-5'>Documentation</h1>
        <span className='text-xl'>In this section, you will find all the documentation related to the project.</span>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-10'>
        {docs.map((doc, idx) => (
          <CardDocumentacao key={idx} 
            title={doc.title}
            description={doc.description}
            link={doc.link}
            date={doc.date}
            status={doc.status} 
          />
        ))}
      </div>
      

 
    </section>
  )
}
