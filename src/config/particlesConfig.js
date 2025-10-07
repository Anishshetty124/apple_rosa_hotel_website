// src/config/particlesConfig.js
const particlesConfig = {
  background: {
    color: {
      value: '#2C3E50', // deep-blue-gray
    },
    image: "url('https://images.unsplash.com/photo-1510006850043-344421d5c363?q=80&w=2070')",
    position: '50% 50%',
    repeat: 'no-repeat',
    size: 'cover',
  },
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'bubble',
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 200,
        size: 5,
        duration: 2,
        opacity: 0.8,
      },
    },
  },
  retina_detect: true,
};

export default particlesConfig;