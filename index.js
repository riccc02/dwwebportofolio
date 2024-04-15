document.addEventListener("DOMContentLoaded", function() {
    var currentURL = window.location.href;
    var links = document.querySelectorAll('.navbar a');
    
    links.forEach(function(link) {
      if (link.href === currentURL) {
        link.classList.add('active');
      }
    });
  });