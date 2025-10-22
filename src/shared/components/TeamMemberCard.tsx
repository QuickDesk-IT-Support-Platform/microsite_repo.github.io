interface TeamMember {
    name: string
    role: string
    description?: string
    imageUrl: string
}
export default function TeamMemberCard({ name, role, description, imageUrl }: TeamMember) {
  return (
    <div className='flex flex-col  p-4  sm:w-70 rounded-lg  items-center  shadow-xl dark:shadow-none dark:bg-[#121212]'>
      <div className='flex sm:h-60 sm:w-60 rounded-4xl self-center mb-5 overflow-hidden'>
         <img src={imageUrl} alt={name}  />

      </div>

      <h3 className='sm:text-xl font-semibold mb-2'>{name}</h3>
      <p className='text-sm  text-gray-600'>{role}</p>
      <p className='mt-2 text-sm text-gray-700 dark:text-gray-300 text-center'>{description}</p>
    </div>
  )
}
