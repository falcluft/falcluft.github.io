import React from 'react';
import './myModalDialog.css';

interface MyModelDialogProps {
    text: string;
}

export function MyModalDialog({ text, ...props }: MyModelDialogProps) {
    return (
        <div class="blackout-modal-dialog">
            <div class="modal-dialog-body">
                <div>{text}</div>
                <a href="#" class="button-ok">OK</a>
            </div>
        </div>
    );
}
