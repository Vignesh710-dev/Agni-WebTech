// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Initialize Swiper for testimonials
    // Modify the existing Swiper initialization
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: false, // Changed from true to false to prevent repetition
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }
    });
});

// Debug code to check if testimonials section is visible
document.addEventListener('DOMContentLoaded', function() {
    console.log('Testimonials section:', document.querySelector('#testimonials'));
    console.log('Swiper container:', document.querySelector('.swiper-container'));
    console.log('Swiper slides:', document.querySelectorAll('.swiper-slide').length);
});

// Feature icon animation
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.feature-icon i');
        icon.classList.add('fa-beat');
    });
    
    card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.feature-icon i');
        icon.classList.remove('fa-beat');
    });
});

// How It Works section interaction
document.addEventListener('DOMContentLoaded', function() {
    const stepItems = document.querySelectorAll('.step-item');
    
    stepItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const number = this.querySelector('.step-number');
            number.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        item.addEventListener('mouseleave', function() {
            const number = this.querySelector('.step-number');
            number.style.transform = 'scale(1)';
        });
        
        // For touch devices
        item.addEventListener('touchstart', function() {
            const number = this.querySelector('.step-number');
            number.style.transform = 'scale(1.1) rotate(5deg)';
            setTimeout(() => {
                number.style.transform = 'scale(1)';
            }, 300);
        });
    });
});

// Initialize particles.js for hero section
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ["#7928ca", "#ff0080", "#00c6ff"]
                },
                shape: {
                    type: "circle"
                },
                opacity: {
                    value: 0.5,
                    random: true
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.1,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    out_mode: "out"
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                }
            },
            retina_detect: true
        });
    }
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            bootstrap.Collapse.getInstance(navbarCollapse).hide();
        }
    });
});
// Enhanced horizontal scroll prevention for both Features and Testimonials sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = [
        { id: 'features', selector: '.row' },
        { id: 'testimonials', selector: '.swiper-container' }
    ];
    
    function handleResize() {
        sections.forEach(section => {
            const element = document.getElementById(section.id);
            const container = element ? element.querySelector(section.selector) : null;
            
            if (window.innerWidth < 768) {
                if (element) {
                    element.style.overflowX = 'hidden';
                    element.style.width = '100vw';
                }
                
                if (container) {
                    container.style.marginLeft = '0';
                    container.style.marginRight = '0';
                    container.style.maxWidth = '100%';
                }
                
                // Adjust cards in features section
                if (section.id === 'features') {
                    document.querySelectorAll('#features .feature-card').forEach(card => {
                        card.style.minWidth = 'calc(100% - 2rem)';
                        card.style.margin = '0 1rem 1rem';
                    });
                }
            } else {
                // Reset all styles for desktop
                if (element) {
                    element.style.overflowX = '';
                    element.style.width = '';
                }
                
                if (container) {
                    container.style.marginLeft = '';
                    container.style.marginRight = '';
                    container.style.maxWidth = '';
                }
            }
        });
    }
    
    // Run immediately and on resize
    handleResize();
    window.addEventListener('resize', handleResize);
});

// Add this at the top of your main.js file
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    document.querySelector('.glass-loader').style.display = 'none';
  }, 3000); // Adjust time as needed
});
// Show loader on page load
document.addEventListener('DOMContentLoaded', function() {
    const loader = document.querySelector('.holographic-loader');
    
    // Show loader immediately
    loader.style.display = 'flex';
    
    // Hide after 1 second
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'flex';
        }, 300);
    }, 1000);
});

const connectionLoader = document.querySelector('.connection-loader');

// Show loader with connecting state
connectionLoader.style.display = 'flex';

// Simulate connection (replace with actual connection logic)
setTimeout(() => {
    // On successful connection
    connectionLoader.classList.add('connected');
    document.querySelector('.connection-status').textContent = 'Connected';
    
    // Hide after 1 second
    setTimeout(() => {
        connectionLoader.style.opacity = '0';
        setTimeout(() => {
            connectionLoader.style.display = 'none';
            connectionLoader.style.opacity = '1';
            connectionLoader.classList.remove('connected');
        }, 300);
    }, 1000);
    
    // For error state example:
    // connectionLoader.classList.add('error');
    // document.querySelector('.connection-status').textContent = 'Connection Failed';
}, 1500);

document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const form = e.target;
  const formData = new FormData(form);
  
  // Verify form data is being collected
  console.log('Form data:', Object.fromEntries(formData.entries()));
  
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      const data = await response.json();
      const name = document.getElementById('name').value;
      console.log('Formspree response:', data);
      
      Swal.fire({
        title: `Thank you, ${name}!`,
        text: 'Your message has been sent successfully.',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: 'var(--primary)'
      });
      
      form.reset();
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    console.error('Submission error:', error);
    Swal.fire({
      title: 'Error!',
      text: 'There was a problem sending your message. Please try again.',
      icon: 'error',
      confirmButtonText: 'OK',
      confirmButtonColor: 'var(--primary)'
    });
  }
});
// Pause animation on hover
const movingContainer = document.querySelector('.moving-container');
if (movingContainer) {
  movingContainer.addEventListener('mouseenter', () => {
    movingContainer.style.animationPlayState = 'paused';
  });
  
  movingContainer.addEventListener('mouseleave', () => {
    movingContainer.style.animationPlayState = 'running';
  });
}
// Add secret Konami code functionality
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            // Trigger fun effect
            document.body.style.transform = 'rotate(180deg)';
            document.body.style.transition = 'transform 2s';
            setTimeout(() => {
                document.body.style.transform = '';
            }, 2000);
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});
