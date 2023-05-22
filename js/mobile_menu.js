function menuPop() {
  const x = document.getElementById('top-navigation');
  const y = document.querySelector('#menu-button');
  const z = document.querySelector('.menu-icon h2');
  if (x.style.display === 'block') {
    x.style.display = 'none';
    z.style.visibility = 'visible';
    y.src = './images/icons/Union.png';
  } else {
    x.style.display = 'block';
    z.style.visibility = 'hidden';
    y.src = './images/icons/close.svg';
  }
}

menuPop();