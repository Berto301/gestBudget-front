import React from 'react'
import Content from '../subComponents/Content'

export default function AddRecipe({ passDataToParent,onSubmit }) {
	return (
		<div>
			<Content passDataToParent={passDataToParent} onSubmit={onSubmit}/>
		</div>
	)
} 