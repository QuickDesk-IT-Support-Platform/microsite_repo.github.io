import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-lg text-center">
        <h1 className="text-6xl font-extrabold mb-4">404</h1>
        <p className="text-xl mb-6">Page not found.</p>
        <Link to="/" className="inline-block px-6 py-3 bg-orange-500 text-white rounded-lg shadow hover:opacity-90">Go back to Home</Link>
      </div>
    </div>
  )
}
