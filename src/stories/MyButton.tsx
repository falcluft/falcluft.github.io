import React from 'react';

export function MyButton({ ...props }){
	return (
		<button 
			type="button"
			label='My Button'
		>
		{label}
		</button>
	);
}