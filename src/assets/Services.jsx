import React from "react";

const Service = () => {

    return (
        <div className="flex flex-col w-full p-28">
            {/*header div */}
            <div className="pb-28 ml-10 text-4xl font-serif">
              What Services you will <br></br>Get from me!
            </div>
            
            {/*boxes div */}
            <div className="flex gap-8">
               
               {/*box1 div */}
               <div className="flex flex-col items-center rounded-md h-80 gap-5 w-7/12 border-solid border-2 border-gray-300 hover:text-white hover:bg-red-500 transition duration-300  ">
                        <img className = "rounded-full w-28 h-28" src="box1.jpg" alt=""/>
                        <h2 className="font-semibold text-2xl">UI/UX Design</h2>
                        <p className="text-center">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                             Facere molestiae itaque amet accusantium eum aspernatur?
                        </p>

               </div>

               {/*box2 div */}
               <div className="flex flex-col items-center rounded-md h-80 gap-5 w-7/12 border-solid border-2 border-gray-300">
                        <img className = "rounded-full w-28 h-28" src="box2.jpg" alt=""/>
                        <h2 className="font-semibold text-2xl">Digital Marketing</h2>
                        <p className="text-center">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                             Facere molestiae itaque amet accusantium eum aspernatur?
                        </p>

               </div>

               {/*box3 div */}
               <div className="flex flex-col items-center rounded-md h-80 gap-5 w-7/12 border-solid border-2 border-gray-300">
                        <img className = "rounded-full w-28 h-28" src="box3.png" alt=""/>
                        <h2 className="font-semibold text-2xl">Website Design</h2>
                        <p className="text-center">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                             Facere molestiae itaque amet accusantium eum aspernatur?
                        </p>

               </div>

            </div>

        </div>
    )
} 

export default Service;