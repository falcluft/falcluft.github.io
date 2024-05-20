import React from 'react';

interface MyButtonProps {
	label: string;
}

export function MyButton({ label, ...props }: MyButtonProps){

	const myButtonClick = () => {
		window.location.href = "#myModalDialog";
	};

	return (
		<button type="button" onClick={ myButtonClick }>
		{label}
		</button>
	);
}

