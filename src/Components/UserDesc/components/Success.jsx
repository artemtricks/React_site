import React from 'react';
import success from '../components/Users/success.svg';

export const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img className='img' src={success} alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button onClick={() => window.location.reload()} className="send-invite-btn">Назад</button>
    </div>
  );
};
