import React from 'react';

export function MyButton(backgroundColor, label){
	return (
		<button 
			type="button"
			style={{ backgroundColor }}
			label={{ label }}
		>
		{label}
		</button>
	);
}