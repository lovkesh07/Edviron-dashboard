import React from "react";
import Barchartcomp from "@/components/Barchartcomp";
import Piechart from "@/components/Piechart";

const Test = () => {
  return (
    <div  className="py-8">
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div className="lg:col-span-2 rounded-md">
            <Barchartcomp />
          </div>
          <div className=" rounded-md ">
            <Piechart />
          </div>
        </div>
      
    </div>
  );
};

export default Test;
