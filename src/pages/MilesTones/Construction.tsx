// JSX-only component — explicit React import not required
import Header from "../Header";

import container_architecture from "../../assets/updated_container_diagram.png";
import mvp_video from "../../assets/mvp_video.mp4"
export default function Construction() {



  return (
    <div className="flex min-h-screen ">
      <Header />

    <div className="flex pt-18 w-full">
  
  {/* main content */}
    <div id="M3 - Construction" className="w-full md:w-8/8 p-4 md:p-20 bg-white md:h-[calc(100vh-4rem)] overflow-y-auto">
        
          
        <h1 className="font-bold text-4xl text-center md:text-start">M3 - Construction</h1>        
        
        <div className="mt-10 justify-center flex flex-col items-center space-y-6">
            
            <div className="w-full max-w-5xl aspect-video overflow-hidden rounded-2xl shadow-lg">
                <iframe
                  src="https://www.canva.com/design/DAG7CDEW_Fc/IQ6QrCU9IV48uxnq8s8ruQ/view?embed"
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full border-0"
                ></iframe>
            </div>

        </div>

        <section id="Updated Architecture" className={`my-10 p-5 rounded-2xl  shadow-2xl }`}>
            <div className="flex flex-row  gap-3 items-center pb-3" >
               <span className={`w-2   h-10 rounded-2xl bg-orange-600/80`}></span>
              <h2 className="text-2xl font-extrabold ">Updated Architecture</h2>
            </div>
            <div className="flex flex-col ">

              <h1 className="text-xl font-bold">Container-level Diagram</h1>
              <div className="flex item-center justify-center mb-10 mt-5">
                  <img src={container_architecture} alt="Container-level Diagram" className="scale-100 md:scale-70" />  
              </div>

            </div>

          </section>
          
          <section id="Demo" className={`my-10 p-5 rounded-2xl  shadow-2xl }`}>
            <div className="flex flex-row  gap-3 items-center pb-3" >
               <span className={`w-2   h-10 rounded-2xl bg-orange-600/80`}></span>
              <h2 className="text-2xl font-extrabold ">MVP DEMO</h2>
            </div>
            <div className="flex flex-col ">
              
                <video
                  src={mvp_video}
                  controls
                  className="w-full h-full rounded-2xl shadow-lg"
                  poster=""
                >
                  Seu navegador não suporta vídeo.
                </video>
            </div>

        </section>


      </div>
    </div>
    
    </div>
   
  )
}
