import React from "react";

const Query = () => {
    return (
         <div className="flex justify-center p-40">

            {/* left div */}
            <div className="flex flex-col pr-20 justify-evenly">
                {/*top div */}
                <div className="pb-7 font-semibold text-3xl">Designing With Passion While <br></br>Exploring The World.</div>

                {/*bottom div */}
                <div>
                    <p className="pb-5">Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. Quis ipsum 
                        suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
                    </p>
                    
                    <p>
                    Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua.
                    </p>

                </div>
            </div>
 
           {/* right div */}
            <div className="flex flex-col pr-32">
               
               <div className="font-semibold text-2xl pb-5">Any Type of Query <br></br> & Discussion</div>

               <div className="text-gray-700 font-semibold text-sm pb-3">Let's Talk With Me</div>

               <div className="font-semibold underline text-2xl">ishtiaque@gmail.com</div>

            </div>
         </div>
    )
}

export default Query;