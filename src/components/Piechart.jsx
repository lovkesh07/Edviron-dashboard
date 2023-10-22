
import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

const data = [
	{ name: 'Online', value: 63 },
	{ name: 'Cash', value: 25 },
	{ name: 'Cheque', value: 11 }
]

const RADIAN = Math.PI / 180
const COLORS = ['#00C49F', '#FFBB28', '#FF8042']

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5
	const x = cx + radius * Math.cos(-midAngle * RADIAN)
	const y = cy + radius * Math.sin(-midAngle * RADIAN)

	return (
		<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	)
}

export default function Piechart() {
	return (
		<div className="w-[18rem] h-[28rem]  lg:w-[24rem] lg:h-[28rem]  bg-white p-4 rounded-3xl border border-gray-200 flex flex-col">
			<p className="text-gray-700 px-4 text-2xl font-bold">Payment Mode</p>
			<p className='px-4 text-gray-500' >Split betwwen Online, Cash and Cheque for collections till date</p>
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<PieChart width={400} height={300}>
						<Pie
							data={data}
							cx="50%"
							cy="45%"
							labelLine={false}
							label={renderCustomizedLabel}
							outerRadius={105}
							fill="#8884d8"
							dataKey="value"
						>
							{data.map((_, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
						<Legend />
					</PieChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}