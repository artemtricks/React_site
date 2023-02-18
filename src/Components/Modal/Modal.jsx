import './index.scss';
import React from 'react';
import ModalOpt from './ModalOpt';

function Modal() {
  const [open, setOpen] = React.useState(false);
  
  return (
    <div className="Ap">
      <button onClick={() => setOpen(true)} className="open-modal-btn">✨ Открыть окно</button>
      <ModalOpt open={open} setOpen={setOpen} >
      <img className='animate, img' alt="gif-animation" src="https://media.giphy.com/media/ILW1fbJHW0Ndm/giphy.gif" />
      <h5>Это модальное окно!</h5>
      </ModalOpt>
    </div>
  );
}

export default Modal;