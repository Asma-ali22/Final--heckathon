import React from "react";
import Image from "next/image";

const Editor=()=>{
    return(

<div>
  <div className="flex flex-col items-center p-6">
    <h1 className="text-xl font-bold mb-4">EDITORS PICK</h1>
    <p className="text-gray-500 mb-8">

      Problems trying to resolve the conflict between
    </p>
    <div className="gap-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 sm:mx-8 lg:mx-96">
        <div className="relative">
          <Image src="/edi6.jpeg" alt="kids" height={510} width={500} />
        </div>
        <div className="relative">
          <Image src="/edi5.jpeg" alt="kids" height={500} width={220} />
        </div>
        <div className="grid grid-rows-2 gap-4">
          <div className="relative">
            <Image src="/edi3.jpeg" alt="kids" height={90} width={120} />
            <button className="absolute bottom-4 left-1/4 transform -translate-x-1/2 bg-white px-4 py-2 text-sm font-medium rounded-lg shadow-md">
              ACCESSORIES
            </button>
          </div>
          <div className="relative">
            <Image src="/edi4.jpeg" alt="kids" height={70} width={120} />
            <button className="absolute bottom-4 left-1/4 transform -translate-x-1/2 bg-white px-4 py-2 text-sm font-medium rounded-lg shadow-md">
              KIDS
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    );
  }
    
export default Editor