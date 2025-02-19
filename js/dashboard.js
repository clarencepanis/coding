document.addEventListener("DOMContentLoaded", function (event) {
  const overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  document.body.appendChild(overlay);

  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId);

    // For showing sidebar
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show');
        toggle.classList.toggle('bx-x');
        bodypd.classList.toggle('body-placement');
        headerpd.classList.toggle('body-placement');
        overlay.classList.toggle('active');
      });

        // For Closing sidebar
        overlay.addEventListener('click', () => {
        nav.classList.remove('show');
        toggle.classList.remove('bx-x');
        bodypd.classList.remove('body-placement');
        headerpd.classList.remove('body-placement');
        overlay.classList.remove('active');
      });
    }
  }
  
  showNavbar('header-toggle', 'nav-bar', 'body-placement', 'header');

  // for active link in sidebar
  const linkColor = document.querySelectorAll('.nav_link');

  function colorLink() {
    if (linkColor) {
      linkColor.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    }
  }

  linkColor.forEach(l => l.addEventListener('click', colorLink));
});
