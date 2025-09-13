import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

function Modal({ title, content, onClose }) {
    return (
        <div className="modal center-both padding">
            <div className="modal__container padding flex-v gap">
                <div className="modal__header flex-s gap">
                    <p className="logo">{title}</p>
                    <div className="flex-e" onClick={onClose}><CloseIcon src="close.png" className="icon" /></div>
                </div>
                <div className="modal__content padding-bottom flex-v gap-sm">
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}

export default Modal