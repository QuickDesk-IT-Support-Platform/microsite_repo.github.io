// JSX-only component — explicit React import not required
import CardDocumentacao from '../shared/components/CardDocumentacao'
export default function Documentacao() {
  const docs = [
   
    {
      title: "Personas QuickDesk-IT",
      description: "Perfis de usuários representativos do sistema.",
      link: "https://uapt33090-my.sharepoint.com/:w:/g/personal/agm_ua_pt/EfjHIE8xgGRCi2lOT5U9G9UBc_7llU2hiMssfNqtXkIhuw?e=PMSXgZ",
      docType: "Manual",
      date: "06-10-2025",
      status: "Concluido"
    },
    {

      title:"User Stories QuickDesk-IT",
      description: "Conjunto de histórias de usuário para o desenvolvimento ágil.",
      link: "https://uapt33090-my.sharepoint.com/:w:/g/personal/agm_ua_pt/EcgtOCHcT8JDq56fqCdfvvYBKoI3_p1iF-JVDAbQuhDX9Q?e=4Qgqb9",
      docType: "Manual",
      date: "06-10-2025",
      status: "Concluido"
    },
     {

      title:"System Architecture ",
      description: "Diagrama de arquitetura do sistema.",
      link: "https://app.diagrams.net/#G1d_i9kkfodf59BMB0B-4O6N8jaP_wTCIU#%7B%22pageId%22%3A%22UNiyZUibPOel2K6aCp1S%22%7D",
      docType: "Manual",
      date: "06-10-2025",
      status: "Em Andamento"
    }
    , {

      title:"Functional Requirements ",
      description: "Documento que descreve as funcionalidades principais que o sistema deve oferecer, detalhando o comportamento esperado para satisfazer as necessidades dos utilizadores.",
      link: "https://uapt33090-my.sharepoint.com/:w:/g/personal/agm_ua_pt/EQbXWQdo-6xGqMM_EWCAq5oBaNHmv8mMIVl6Lx-t0UdF2g?e=UGsWlr",
      docType: "Agile",
      date: "13-10-2025",
      status: "Em Andamento"
    },
     {

      title:"Non-Functional Requirements ",
      description: "Documento que define os requisitos de qualidade e desempenho do sistema, como segurança, usabilidade, fiabilidade e eficiência.",
      link: "https://uapt33090-my.sharepoint.com/:w:/g/personal/agm_ua_pt/ETup_7x30ytGiLiTS0UL2F8BkPbCw4jYE35EZa0nmDYbew?e=oakn6g",
      docType: "Manual",
      date: "13-10-2025",
      status: "Em Andamento"
    },
      {

      title:"Acceptance Criterias ",
      description: "Documento que define os critérios de aceitação para as funcionalidades do sistema.",
      link: "https://uapt33090-my.sharepoint.com/:w:/g/personal/agm_ua_pt/EfoJ5pGjm-9LoUvFVre-CVIBjNWkYfVzACWGjw_B5tRaig?e=6RhtcD",
      docType: "Manual",
      date: "13-10-2025",
      status: "Em Andamento"
    },
      {

      title:"Database Diagram ",
      description: "Diagrama que ilustra a estrutura do banco de dados.",
      link: "https://drive.google.com/file/d/1uXe57AFQDdYNpmRPugiijl3ZJ9kISfKk/view?usp=sharing",
      docType: "Manual",
      date: "14-10-2025",
      status: "Em Andamento"
    }

  ];

  return (
    <section id="documentacao" className='py-30 min-h-screen bg-white dark:bg-black/89 dark:text-white'>
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
            date={doc.date}
            status={doc.status} 
          />
        ))}
      </div>
      

 
    </section>
  )
}
