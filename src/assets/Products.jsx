import React from "react";

const Product = () => {
    
    return(
    <div className="flex flex-col pl-64 gap-5 w-[85%]">
        {/*header div */}
        <div className="flow-root">
            {/*main heading div */}
            <div className="text-3xl font-medium float-left">
                What Service you will <br /> Get From Me!
            </div>

            {/*buttons div */}
            <div className="space-x-4 pt-12 float-right">
                <button className="transition duration-150 border-b-4 border-transparent hover:border-red-500">All</button>
                <button className="transition duration-150 border-b-4 border-transparent hover:border-red-500">Branding</button>
                <button className="transition duration-150 border-b-4 border-transparent hover:border-red-500">Logo</button>
                <button className="transition duration-150 border-b-4 border-transparent hover:border-red-500">UI/UX</button>
                <button className="transition duration-150 border-b-4 border-transparent hover:border-red-500">Web Design</button>
            </div>
        </div>

        {/*first image container div */}
        <div className="flex justify-between">
            <img src="dress.webp" alt="" />
            <div className="flex flex-col justify-between">
            <img src="car.webp" alt="" />
            <img src="shoe.webp" alt="" />
            </div>
        </div>

        {/*second image container div */}
        <div className="flex justify-between">
            <img src="book.webp" alt="" />
            <img src="man.webp" alt="" />
            <img src="family.webp" alt="" />
        </div>
    </div>
    )
}

export default Product;