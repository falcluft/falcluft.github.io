import React from 'react';

export function MyButton({ label, ...props }){
	return (
		<button 
			type="button"
		>
		{label}
		</button>
	);
}