import React from 'react'



interface TeamMember {
    name: string
    role: string
    description: string
    imageUrl: string
}
export default function TeamMemberCard({ name, role, description, imageUrl }: TeamMember) {
  return (
    <div className='flex flex-col  p-4 w-70 rounded-lg  items-center ml-5  shadow-2xl dark:shadow-gray-700 '>
      <div className='flex h-60 w-60 rounded-4xl self-center mb-5 overflow-hidden'>
         <img src={imageUrl} alt={name}  />

      </div>

      <h3 className='text-xl font-semibold mb-2'>{name}</h3>
      <p className='text-gray-600'>{role}</p>
      {/* <p className='mt-2'>{description}</p> */}
    </div>
  )
}
