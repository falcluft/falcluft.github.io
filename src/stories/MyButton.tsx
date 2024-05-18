import React from 'react';

export function MyButton({ ...props }){
	return (
		<button 
			type="button"
			label={{ props.label }}
		>
		{label}
		</button>
	);
}