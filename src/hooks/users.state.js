import {useState} from 'react'
import UsersService from '../services/users.service'

export function useUser (){
	const [userConnected,setUserConnected] =useState(null)

	const register = async (data)=>{
		console.log({data})
		debugger
		//const userRegistered =  await UsersService.register(data)
		
	}

	return{
		userConnected,
		register
	} 
}