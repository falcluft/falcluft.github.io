import React from 'react';

interface MyButtonProps {
	label: string;
}

export function MyButton({ label, ...props }: MyButtonProps){
	return (
		<button type="button" onClick={() => MyButtonClick()}>
		{label}
		</button>
	);
}

function MyButtonClick(){	
	window.location.href = "#myModalDialog";
}