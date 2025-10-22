
export default function Footer() {
  return (
    <div className='bg-white  text-black  flex min-h-50 dark:dark:bg-[#0E0E0E] dark:text-white'>
       
       <div className='flex flex-row  justify-around py-10 w-full'>

        <div>
            <h1 className='text-2xl font-bold'>Orientadores</h1>
            <div className='flex flex-col'>
                <span>José Luís Oliveira</span>
                <span>João Almeida</span>


            </div>
        </div>

   
        <div>
            <h1 className='text-2xl font-bold'>More</h1>
            <div className='flex flex-col'>
                <div>
                    <a className='hover:underline' 
                    href='https://github.com/orgs/QuickDesk-IT-Support-Platform/repositories' target='_blank' rel='noopener noreferrer'>GitHub</a>
                </div>
                <div>
                    <a className='hover:underline'
                     href='https://tqsproject.atlassian.net/jira/software/projects/QUIC/summary?atlOrigin=eyJpIjoiZTAwMTk0MmE4MmNkNGIxOGE4YzE3MjY2NmZmMjNlNmMiLCJwIjoiaiJ9' target='_blank' rel='noopener noreferrer'>Jira</a>
                </div>

            </div>
        </div>

       </div>
      
    </div>
  )
}
