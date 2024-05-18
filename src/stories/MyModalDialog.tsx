import React from 'react';
import './myModalDialog.css';

interface MyModelDialogProps {
    text: string;
}

export function MyModalDialog({ text = "Default text", ...props }: MyModelDialogProps) {
    return (
        <div class="blackout-modal-dialog">
            <div class="modal-dialog-body">
                <h5>{text}</h5>
                <a href="#" class="button-ok" style="min-width: 100px;">OK</a>
            </div>
        </div>
    );
}
