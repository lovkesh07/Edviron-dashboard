"use client"
import React from 'react'
import Sidebar from './Sidebar'

import Uppergrid from "../Uppergrid";
import Compup from "../Compup";
import Test from "../Test";
import Recent from "../Recent";


export default function Layout() {
	return (
		<div className=" h-screen w-screen overflow-hidden flex flex-row fixed">
			<Sidebar />
			

			<div className="flex flex-col">
				
				<div className="px-4 h-16 py-4">
                <div className="lg:text-3xl font-bold ">
                  <h1 className="float-left">DAV Public School, Bhilai</h1>
                </div>
              </div>
			  
				<div className="flex-1 p-4 min-h-0 overflow-auto">
					

              <div className="px-4">
                <Compup />
                <Uppergrid />
                <Test />
                {/* <Test /> */}
				<Recent/>

              </div>
				</div>
			</div>
		</div>
	)
}