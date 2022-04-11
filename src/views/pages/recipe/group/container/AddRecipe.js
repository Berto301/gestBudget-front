import React from 'react'
import Content from '../subComponents/Content'

export default function AddRecipe({ passDataToParent }) {
	return (
		<div>
			<Content passDataToParent={passDataToParent} />
		</div>
	)
} 