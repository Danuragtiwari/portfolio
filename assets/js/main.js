document.addEventListener("DOMContentLoaded", function() {
  new SweetScroll({});
  particlesJS("particles-js", {
    // ... (other configurations)
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push" // Change 'push' to 'remove' to prevent new particles and bonding
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2 // This mode will remove particles on click
        }
      }
    },
    retina_detect: true
  });
});
