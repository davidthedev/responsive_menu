function domReady() {
  // remove event listener
  document.removeEventListener("DOMContentLoaded", domReady);

  const navBtn = document.getElementsByClassName('nav__btn');

  navBtn[0].addEventListener('click', function() {
    const subnav = document.getElementsByClassName('dropdown-nav');
    if (subnav[0].style.display === 'block') {
      subnav[0].style.display = 'none';
    } else {
      subnav[0].style.display = 'block';
    }
  });
}

// HTML loaded, DOM built
document.addEventListener('DOMContentLoaded', domReady);
