import React, { useEffect } from 'react';
import {
  ShoppingBagIcon,
  CheckIcon,
  CreditCardIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

const Confirmation = () => {
  const state = useLocation().state;
  const navigate = useNavigate();

  const success = useParams().confirmation === 'success' ? true : false;

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'visible';
    };
  }, []);

  return (
    <div
      className={`confirmation ${
        success ? 'confirmation--success' : 'confirmation--error'
      }`}
    >
      <div className='confirmation__icon-container'>
        {success ? (
          <ShoppingBagIcon className='confirmation__icon confirmation__icon--success' />
        ) : (
          <CreditCardIcon className='confirmation__icon confirmation__icon--error' />
        )}
        <div
          className={`confirmation__icon-small-container ${
            success
              ? 'confirmation__icon-small-container--success'
              : 'confirmation__icon-small-container--error'
          }`}
        >
          {success ? (
            <CheckIcon className='confirmation__icon-small' />
          ) : (
            <XMarkIcon className='confirmation__icon-small' />
          )}
        </div>
      </div>
      <div className='confirmation__content-container'>
        <h2 className='confirmation__title'>
          {success
            ? `¡Gracias por tu compra, ${state.name}!`
            : 'Algo salió mal...'}
        </h2>
        <p className='confirmation__message'>
          {success
            ? `Tu número de orden es: ${state.orderId}`
            : 'Hubo un error procesando tu compra, intentá nuevamente mas tarde.'}
        </p>
      </div>
      <button
        onClick={() => navigate('/', { replace: true })}
        className='confirmation__btn'
      >
        Volver al inicio
      </button>
    </div>
  );
};

export default Confirmation;
