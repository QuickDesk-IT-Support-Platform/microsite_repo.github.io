
import Header from "../Header"
export default function Construction() {
  return (
    <div className="flex min-h-screen">
      <Header />
      <div className="pt-20 w-full flex flex-col items-center justify-center ">
        <div className="flex flex-col bg-orange-600/60 p-20 rounded-lg shadow-lg max-w-100 md:max-w-7xl items-center" >
              <h1 className="text-6xl md:text-6xl text-center">Construction</h1>
              <span className="text-center text-md md:text-2xl mt-10 p-2">The construction phase is under <span className="text-white p-1 rounded-sm text-xl bg-red-500">Construction 🙂</span>. please come back later😉.</span>
        
        </div>
      
      </div>
    </div>
  )
}
