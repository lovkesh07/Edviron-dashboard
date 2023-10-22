import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
	{
		name: 'Jan',
		Expense: 100,
		Income: 100
	},
	{
		name: 'Feb',
		Expense: 100,
		Income: 1398
	},
	{
		name: 'Mar',
		Expense: 100,
		Income: 9800
	},
	{
		name: 'Apr',
		Expense: 90,
		Income: 3908
	},
	{
		name: 'May',
		Expense: 80,
		Income: 4800
	},
	{
		name: 'Jun',
		Expense: 70,
		Income: 3800
	},
	{
		name: 'July',
		Expense: 50,
		Income: 4300
	},
	{
		name: 'Aug',
		Expense: 35,
		
	},
	{
		name: 'Sep',
		Expense: 25,
		
	},
	{
		name: 'Oct',
		Expense: 20,
		
	},
	{
		name: 'Nov',
		Expense: 10,
		
	},
	{
		name: 'Dec',
		Expense: 0,
		
	}
]

export default function Barchartcomp() {
	return (
		<div className=''>

		
		<div className="w-[18rem] h-[18rem]  lg:w-full lg:h-[28rem] p-4  bg-white rounded-3xl border border-gray-200 flex flex-col flex-1">
			<strong className="text-gray-700 text-2xl font-bold">Overview</strong>
			<p className="text-gray-400 ">Monthly Collection</p>

			<div className="  w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 20,
							right: 10,
							left: 0,
							bottom: 0
						}}
					>
						{/* <CartesianGrid   /> */}
						<XAxis dataKey="name" />
						{/* <YAxis /> */}
						<Tooltip />
						{/* <Legend /> */}
						{/* <Bar dataKey="Income" fill="#0ea5e9" /> */}
						<Bar dataKey="Expense" fill="#ea580c" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
		</div>
	)
}