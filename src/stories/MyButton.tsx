import React from 'react';

interface MyButtonProps {
	label: string;
}

export function MyButton({ label, ...props }: MyButtonProps){
	return (
		<button type="button" onClick={ myButtonClick }>
		{label}
		</button>
	);
}

const myButtonClick => () => {
	window.location.href = "#myModalDialog";
}