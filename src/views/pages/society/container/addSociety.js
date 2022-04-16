import React from 'react'
import Society from '../subComponents/Society'
import User from '../subComponents/User'

export default function AddSociety({passDataToParent ,onSubmit}){
	return(
			<div> 
				<h2>Society Informations</h2>
				<Society passDataToParent={passDataToParent} onSubmit={onSubmit}/>
				<hr className="mt-2 mb-2"/>
				<h2>Admin Informations</h2>
				<User passDataToParent={passDataToParent} onSubmit={onSubmit} onUpdate={false} />
			</div>
		)
} 