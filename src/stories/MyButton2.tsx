import React from 'react';

interface MyButton2Props {
	label: string;
}

export function MyButton2({ label, ...props }: MyButton2Props){
	return (
		<button type="button"
			>
		{label}
		</button>
	);
}