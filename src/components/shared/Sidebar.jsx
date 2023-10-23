"use client"
import React ,{ useState } from 'react'
import classNames from 'classnames'
import AppsIcon from "@material-ui/icons/Apps";
import { HiOutlineLogout } from 'react-icons/hi'



const linkClass =
	'flex items-center gap-2 font-light px-3 py-4 hover:bg-blue-500 hover:rounded-2xl hover:text-white hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {

	return (
		<div className="bg-white w-60 p-3 flex flex-col">
			<div className="flex items-center gap-2 px-1 py-3">
				<span className="text-neutral-900 font-bold text-2xl">Edviron</span>

			
			</div>
			
			<div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
				
				<div className={classNames(linkClass, 'cursor-pointer text-gray-500')}>
					<span className="text-xl">
						<HiOutlineLogout />
					</span>
					Dashboard
				</div>

				<div className={classNames(linkClass, 'cursor-pointer text-gray-500')}>
					<span className="text-xl">
						<HiOutlineLogout />
					</span>
					Fee Management
				</div>


				<div className={classNames(linkClass, 'cursor-pointer text-gray-500')}>
					<span className="text-xl">
						<HiOutlineLogout />
					</span>
					Students
				</div>


				<div className={classNames(linkClass, 'cursor-pointer text-gray-500')}>
					<span className="text-xl">
						<HiOutlineLogout />
					</span>
					Disbursal
				</div>


				<div className={classNames(linkClass, 'cursor-pointer text-gray-500')}>
					<span className="text-xl">
						<HiOutlineLogout />
					</span>
					Promote
				</div>

				<div className={classNames(linkClass, 'cursor-pointer text-gray-500')}>
					<span className="text-xl">
						<HiOutlineLogout />
					</span>
					Help
				</div>
			</div>
		</div>
	)
}

