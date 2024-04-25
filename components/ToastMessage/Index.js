
function showToastMessage(message, type = "info") {
  type = type.toLocaleLowerCase();
  const colors = {
    'success': 'green',
    'info': 'yellow',
    'error': 'red'
  };
  
  const textColors = {
    'success': 'white',
    'info': 'black',
    'error': 'white',
  };

  // let theme = localStorage ? localStorage.getItem("theme") : 'dark';

  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    document.body.appendChild(toastContainer);
    Object.assign(toastContainer.style, {
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: '9999'
    });
  }

  const toast = document.createElement('div');
  toast.innerText = message;


  Object.assign(toast.style, {
    padding: '8px 36px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    transition: 'all 0.5s',
    marginTop: '10px',
    fontSize: '18px',
    background: colors[type],
    color: textColors[type],
  });

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 500);
  }, 2000);
}

export default showToastMessage;
