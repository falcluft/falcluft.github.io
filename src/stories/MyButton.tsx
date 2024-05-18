import React from 'react';

interface MyButtonProps {
	label: string;
}

export function MyButton({ label, ...props }: MyButtonProps){
	return (
		<button 
			type="button"
		>
		{label}
		</button>
	);
}