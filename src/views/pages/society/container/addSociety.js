import React,{useState} from 'react'
import Society from '../subComponents/Society'
import User from '../subComponents/User'

export default function AddSociety({passDataToParent}){
	return(
			<div> 
				<h2>Society Informations</h2>
				<Society passDataToParent={passDataToParent} />
				<hr className="mt-2 mb-2"/>
				<h2>Admin Informations</h2>
				<User passDataToParent={passDataToParent} />
			</div>
		)
} 