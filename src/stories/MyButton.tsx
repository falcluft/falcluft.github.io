import React from 'react';

export function MyButton({ ...props }){
	return (
		<button 
			type="button"
		>
		{props.label}
		</button>
	);
}