import React from 'react'
import Button from './Button';

function Modal(props : any){


  return(
    <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">{props.title}</h4>
        </div>
        <div className="modal-body">
          {props.children}
        </div>
        <div className="modal-footer">
          <Button onClick={props.onClose} >Close</Button>
        </div>
      </div>
    </div>
  )

}

export default Modal;