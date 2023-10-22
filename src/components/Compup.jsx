import React from "react";
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from "react-icons/io5";

export default function Compup() {
  return (
    <>
      {/* <div className="lg:text-3xl font-bold ">
        <h1 className="float-left">DAV Public School, Bhilai</h1>
      </div> */}

      <div className="my-6 rounded-md ">
        <div class="flex ">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-0">
            <div class="flex justify-center lg:text-6xl ">
              <BoxWrapper>
                <div className="rounded-full h-12 w-16 flex items-center justify-center bg-sky-500">
                  <IoBagHandle className="text-2xl rounded-4xl text-white" />
                </div>
                <div className="pl-4">
                  <span className="text-sm text-gray-500 font-light">
                    Collection till date
                  </span>
                  <div className="flex items-center">
                    <strong className="text-xl text-gray-700 font-semibold">
                      {" "}
                      5.34Cr
                    </strong>
                    <span className="text-sm text-green-500 pl-2">
                      {" "}
                      10% in last 30 days
                    </span>
                  </div>
                </div>
              </BoxWrapper>
            </div>

            <div class="flex justify-center lg:text-6xl  ">
              <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
                  <IoPieChart className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                  <span className="text-sm text-gray-500 font-light">
                    Balance
                  </span>
                  <div className="flex items-center">
                    <strong className="text-xl text-gray-700 font-semibold">
                      $2.4L
                    </strong>
                  </div>
                </div>
              </BoxWrapper>
            </div>
            <div class="flex justify-center text-6xl  ">
              <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
                  <IoPeople className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                  <span className="text-sm text-gray-500 font-light">
                    Defaulters
                  </span>
                  <div className="flex items-center">
                    <strong className="text-xl text-gray-700 font-semibold">
                      11 <span className="text-[10px] ">/1,049 Students</span>
                    </strong>
                    <span className="text-sm text-red-500 pl-2">
                      11% in last 30 days
                    </span>
                  </div>
                </div>
              </BoxWrapper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-3xl px-12 py-2 lg:px-16 lg:py-6 flex-1  flex items-center">
      {children}
    </div>
  );
}
