import React,{useState} from 'react'
import Society from '../subComponents/Society'
import User from '../subComponents/User'

export default function AddSociety({passDataToParent}){
	// const [dataUsers,setDataUsers] = useState(null)
	// const [societyData,setDataSociety] = useState(null)

	// const getDataSociety =(data)=>{
	// 	setDataSociety(data)
	// }

	// const getDataUser = (data) =>{
	// 	setDataUsers(data)
	// }
	// const onMouseLeave = ()=>{
	// 	const dataToPass ={
	// 		users:dataUsers,
	// 		society:societyData
	// 	}
	// 	if(dataToPass?.users && dataToPass?.society) passDataToParent(dataToPass)
	// }
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