import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const MILESTONES = [
  { id: 'm1', title: 'M1-Inception' , path: '/milestones/inception' },
  { id: 'm2', title: 'M2-Elaboration', path: '/milestones/elaboration' },
  { id: 'm3', title: 'M3-Construction', path: '/milestones/construction' },
  // { id: 'm4', title: 'M4-Transition', path: '/milestones/transition' },
]

export default function DropDownMilestones() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)
  const navigate = useNavigate();
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!ref.current) return
      if (!ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])

  return (
    <div className="relative inline-block" ref={ref}>
      <button
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        className=" rounded-md hover:underline hover:cursor-pointer text-black font-bold focus:outline-none"
      >
        Milestones {open ? <span className='ml-2 text-sm'>▲</span> : <span className='ml-2 text-sm'>▼</span>}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 rounded-lg bg-orange-600 text-white shadow-lg overflow-hidden z-20">
          <ul className="py-2">
            {MILESTONES.map((m) => (
              <li
                key={m.id}
                className="px-4 py-2 hover:bg-white hover:text-black cursor-pointer"
                onClick={() => {
                  // comportamento padrão: fechar o menu
                  setOpen(false)
                  // se quiser, navegar ou emitir evento
                  navigate(m.path)
                }}
              >
                {m.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
