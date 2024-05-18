import React from 'react';
import './myModalDialog.css';

interface MyModelDialogProps {
    text: string;
}

export function MyModalDialog({ text = "Default text", ...props }: MyModelDialogProps) {
    return (
        <div class="modal-dialog-blackout">
            <div class="modal-dialog-body">
                <h5>{text}</h5>
                <a href="#" class="button-ok">OK</a>
            </div>
        </div>
    );
}
