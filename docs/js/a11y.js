document.addEventListener('DOMContentLoaded', () => {
  const skip = document.querySelector('.skip-link');
  const main = document.getElementById('main');

  if (skip && main) {
    skip.addEventListener('click', () => {
      main.setAttribute('tabindex', '-1');
      main.focus();
    });
  }
});
