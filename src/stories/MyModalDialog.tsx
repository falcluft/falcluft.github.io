import React from 'react';
import './myModalDialog.css';

interface MyModelDialogProps {
    text: string;
}

export function MyModalDialog({ text = "Default text", ...props }: MyModelDialogProps) {
    return (
        <div id="myModalDialog" class="modal-dialog-blackout">
            <div class="modal-dialog-body">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <h5>{text}</h5>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="#" class="button-ok">OK</a>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
}
