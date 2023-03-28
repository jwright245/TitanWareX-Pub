import React from "react";
import background from '../images/splashpage.jpeg'

function Home() {
  return (
    
      <div className="home" style={{backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
        <div class="text-center">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center dark:text-white">Innovative IT and developer tools</h1>
          <p class="mb-6 text-lg font-normal text-center text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">TitanwareX provides all things tech: cloud computing, Web IDE, coding library, more comming soon</p>
            <a href="/about" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Learn more
              <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
          </div>
      <div className="container">


      </div>

      </div>  
   
  );
}

export default Home;