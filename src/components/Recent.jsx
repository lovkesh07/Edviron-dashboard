import React from 'react'

const recentOrderData = [
	{
		id: '1',
		product_id: '4324',
		customer_id: '23143',
		customer_name: 'Shirley A. Lape',
		order_date: '2022-05-17T03:24:00',
		order_total: 'Prashant Kumar',
		current_order_status: 'PLACED',
		shipment_address: 'Super Admin'
	},
	{
		id: '7',
		product_id: '7453',
		customer_id: '96453',
		customer_name: 'Ryan Carroll',
		order_date: '2022-05-14T05:24:00',
		order_total: 'Jasraj Singh Bhatia',
		current_order_status: 'CONFIRMED',
		shipment_address: 'Admin'
	},
	{
		id: '2',
		product_id: '5434',
		customer_id: '65345',
		customer_name: 'Mason Nash',
		order_date: '2022-05-17T07:14:00',
		order_total: 'Tarun Kheria',
		current_order_status: 'SHIPPED',
		shipment_address: 'Admin'
	},
	{
		id: '3',
		product_id: '9854',
		customer_id: '87832',
		customer_name: 'Luke Parkin',
		order_date: '2022-05-16T12:40:00',
		order_total: 'Aditya Mullay',
		current_order_status: 'SHIPPED',
		shipment_address: 'Management Staff'
	},
	
	
]

const recentOrderData2 = [
	{
		id: '1',
		product_id: '4324',
		customer_id: '23143',
		customer_name: 'Shirley A. Lape',
		order_date: '2022-05-17T03:24:00',
		order_total: 'July 11, 2023',
		current_order_status: 'Pending',
		shipment_address: '5,03,123'
	},
	{
		id: '7',
		product_id: '7453',
		customer_id: '96453',
		customer_name: 'Ryan Carroll',
		order_date: '2022-05-14T05:24:00',
		order_total: 'July 10, 2023',
		current_order_status: 'Successfull',
		shipment_address: '5,03,123'
	},
	{
		id: '2',
		product_id: '5434',
		customer_id: '65345',
		customer_name: 'Mason Nash',
		order_date: '2022-05-17T07:14:00',
		order_total: 'July 9, 2023a',
		current_order_status: 'Successfull',
		shipment_address: '5,03,123'
	},
	{
		id: '3',
		product_id: '9854',
		customer_id: '87832',
		customer_name: 'Luke Parkin',
		order_date: '2022-05-16T12:40:00',
		order_total: 'July 8, 2023',
		current_order_status: 'Successfull',
		shipment_address: '5,03,123'
	},
	
	
]

export default function RecentOrders() {
	return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8'>

        
		<div className="bg-white px-4 pt-3 pb-4 rounded-2xl border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Recent Orders</strong>
			<div className="0 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead className=' border-b py-4'>
						<tr>
							<th>Name</th>
							<th>Role</th>
						</tr>
					</thead>
					<tbody>
						{recentOrderData.map((order) => (
							<tr key={order.id}>
								
								
								<td>{order.order_total}</td>
								<td>{order.shipment_address}</td>
								
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>

        <div>
        <div className="bg-white px-4 pt-3 pb-4 rounded-2xl border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Disbursals</strong>
			<div className=" rounded-sm mt-3">
				<table className="w-full text-gray-700 ">
					<thead className=' border-b py-4'>
						<tr>
							<th>Date</th>
							<th>Amount</th>
                            <th>Status</th>
						</tr>
					</thead>
					<tbody>
						{recentOrderData2.map((order) => (
							<tr key={order.id}>
								<td>{order.order_total}</td>
								<td>{order.shipment_address}</td>
                                <td>{order.current_order_status}</td>
								
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
        </div>
        </div>
        </>
	)
}