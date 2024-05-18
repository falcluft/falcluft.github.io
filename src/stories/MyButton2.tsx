import React from 'react';

interface MyButto2nProps {
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