function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');

  const button = document.querySelector('#button_mode');
    
  if (html.classList.contains('light')) {
    button.textContent = 'Dark';
  } else {
    button.textContent = 'Light';
  }
}