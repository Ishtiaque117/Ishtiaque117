import React from "react";

const About = () => {
    return (
      <div className="flex bg-gray-300 w-full"> 

            {/*left div*/}
          <div className="flex flex-col justify-between p-16">

            {/*para1 div*/}
            <div>
             <p className="text-red-500"> GET EVERY SINGLE SOLUTIONS.</p>
            </div>

            {/*header div*/}
            <div className="text-7xl font-serif from-neutral-500"> 
            <h1>
                <p>I'm Designer</p>
                <p>Ishtiaque Ahmed</p>
            </h1>
            </div>
            
            {/*para2 div*/}
            <div className="text-sm">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt delectus neque beatae consequuntur esse id molestiae expedita corrupti ipsa, voluptate rem, possimus quasi eius aperiam. Aliquid ab itaque a hic!</p>
            </div>
        
           {/*button div*/}
            <div className="space-x-12">

                <button className="relative h-9 w-28 rounded overflow-hidden border border-green-900 bg-green-600 shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-green-900 before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-green-900 after:duration-500 hover:text-white hover:shadow-green-900 hover:before:h-2/4 hover:after:h-2/4">
                    <span class="relative z-10">Learn More</span>
                </button>

                <button className="before:ease relative h-9 w-28 rounded overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180">
                <span class="relative z-10">Hire Me</span>
                </button>
            </div>

          </div>
        

        {/*image div*/}
        <div className="pr-32"> 
            <img src="cr7.jpg" alt="" />
        </div>
      </div>
    );
}

export default About;