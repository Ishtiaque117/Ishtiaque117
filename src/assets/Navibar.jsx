import React from "react";

const Navbar = () => {
    return (
        <div className="bg-green-200 flex justify justify-between items-center space-x-14 h-20 font-bold" >
           <div> <h1 className="p-12 text-2xl">PORTFOLIO</h1></div>
           <div className="space-x-12 p-20 text-sm ">
            <button className="hover:bg-orange-200">Home</button>
            <button className="hover:bg-orange-200">About</button>
            <button className="hover:bg-orange-200">Portfolio</button>
            <button className="hover:bg-orange-200">Contact</button>
            <button class="before:ease relative h-12 w-40 rounded overflow-hidden border border-green-500 bg-green-600 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
      <span relative="relative z-10">Get Free Consultent</span>
    </button>
           </div>
        </div>
    )
}

export default Navbar;