import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export function showNotification(message = "This feature will be implemented soon.\nStay tuned") {
  Toastify({
    text: message,
    duration: 2300,
    gravity: 'bottom',
    position: 'right',
    style: {
      background: '#f7dada',
      color: '#a05e5e',
      textAlign: 'center',
      fontSize: '14px',
      fontWeight: 300,
    },
  }).showToast();
}