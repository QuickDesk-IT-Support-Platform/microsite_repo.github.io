import React from 'react'
import CardDocumentacao from '../shared/components/CardDocumentacao'
export default function Documentacao() {
  const docs = [
    {
      title: "Documentação da API",
      description: "Detalhes sobre a API RESTful utilizada no projeto.",
      link: "https://example.com/api-docs",
      docType: "API",
      date: "2023-10-01",
      status: "Concluido"
    },
    {
      title: "Guia do Usuário",
      description: "Instruções detalhadas para os usuários finais.",
      link: "https://example.com/user-guide",
      docType: "Manual",
      date: "2023-11-15",
      status: "Em Andamento"
    },
    {
      title: "Documentação Técnica",
      description: "Informações técnicas para desenvolvedores.",
      link: "https://example.com/tech-docs",
      docType: "Técnica",
      date: "2024-01-20",
      status: "Planeado"
    }
    
  ];

  return (
    <section id="documentacao" className='py-30 min-h-screen bg-white dark:bg-black dark:text-white'>
      <div className='flex flex-col  items-center justify-center text-center'> 
        <h1 className='text-4xl font-bold mb-5'>Documentação</h1>
        <span className='text-xl'>Nesta seção,encontrará toda a documentação relacionada ao projeto.</span>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-10'>
        {docs.map((doc, idx) => (
          <CardDocumentacao key={idx} 
            title={doc.title}
            description={doc.description}
            link={doc.link}
            docType={doc.docType}
            date={doc.date}
            status={doc.status} 
          />
        ))}
      </div>
    </section>
  )
}
