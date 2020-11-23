ScrollReveal().reveal('.logo', { delay: 250 });
ScrollReveal().reveal('.columns', { distance: '100%', opacity: 0, origin: 'right' });
ScrollReveal().reveal('.columnsReverse', { distance: '100%', opacity: 0, origin: 'left' });

window.addEventListener('load', () => {
  const nav = document.getElementsByClassName('nav')[0];
  const navButton = document.querySelector('.nav .btn');
  navButton.addEventListener('click', clickInsideEvent => {
    nav.classList.toggle('active');

    const onClickOutside = clickOutsideEvent => {
      if (clickInsideEvent !== clickOutsideEvent) {
        nav.classList.remove('active');
        document.removeEventListener('click', onClickOutside);
      }
    };
    document.addEventListener('click', onClickOutside);
  });
});
