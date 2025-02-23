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
        nav.classList.toggle('show-navbar');
        toggle.classList.toggle('bx-x');
        bodypd.classList.toggle('body-placement');
        headerpd.classList.toggle('body-placement');
        overlay.classList.toggle('active');
      });

        // For Closing sidebar
        overlay.addEventListener('click', () => {
        nav.classList.remove('show-navbar');
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

function realTimeDateUpdate() {
  const realTimeDate = new Date();
  
  // Update date
  const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
  };
  document.getElementById('current-date').textContent = realTimeDate.toLocaleDateString('en-US', options);
  
  // Update time
  document.getElementById('current-time').textContent = realTimeDate.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
  });
}
// Update Invocation
realTimeDateUpdate();
setInterval(realTimeDateUpdate, 1000);