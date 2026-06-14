const buttons = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.page');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((btn) => btn.classList.remove('active'));
    pages.forEach((page) => page.classList.remove('active'));

    button.classList.add('active');
    const target = document.getElementById(button.dataset.page);
    if (target) target.classList.add('active');
  });
});
