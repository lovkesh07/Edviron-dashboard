
import React from 'react'
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5'

export default function Uppergrid() {
	return (
		<div className="flex gap-4">

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 ">


<div class="flex justify-center text-6xl ">
			<BoxWrapper>
				
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Students</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">1,049</strong>
						
					</div>
				</div>
			</BoxWrapper>
			</div>
			<div class="flex justify-center text-6xl ">
			<BoxWrapper>
				
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Sections</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">18</strong>
						<span className="text-sm text-green-500 pl-2">in 12 classes</span>
					</div>
				</div>
			</BoxWrapper>

			</div>
			<div class="flex justify-center text-6xl ">
			<BoxWrapper>
				
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">collection this month</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">90.56L</strong>
						
					</div>
				</div>
			</BoxWrapper>

			</div>
			<div class="flex justify-center text-6xl ">
			<BoxWrapper>
				
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Fine Collected till date</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">11.20L</strong>
					
					</div>
				</div>
			</BoxWrapper>
			</div>
		</div>
		</div>

	)
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-3xl px-16 py-6 flex-1 border border-gray-200 flex items-center">{children}</div>
}