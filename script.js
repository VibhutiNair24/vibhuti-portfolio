console.log(document.documentElement.scrollHeight);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("bg-animation").appendChild(renderer.domElement);

const geometry = new THREE.BufferGeometry();
const vertices = [];

for (let i = 0; i < 1000; i++) {
  vertices.push((Math.random() - 0.5) * 200);
  vertices.push((Math.random() - 0.5) * 200);
  vertices.push((Math.random() - 0.5) * 200);
}

geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
const material = new THREE.PointsMaterial({ color: 0x00ffe7, size: 1 });
const points = new THREE.Points(geometry, material);
scene.add(points);

camera.position.z = 100;

function animate() {
  requestAnimationFrame(animate);
  points.rotation.y += 0.001;
  points.rotation.x += 0.0005;
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
document.getElementById('flipCard').addEventListener('click', function () {
  this.classList.toggle('flipped');
});
// Filter Logic
function filterAchievements(category) {
  const cards = document.querySelectorAll('.achievement-card');
  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Confetti Trigger (once on scroll into quote)
// Confetti Trigger (on scroll into view)
let confettiStarted = false;

function triggerConfetti() {
  if (confettiStarted || typeof confetti !== "function") return;
  confettiStarted = true;

  // Multiple bursts
  const duration = 2 * 1000;
  const end = Date.now() + duration;

  const colors = ['#00f0ff', '#a0f0ff', '#ff00e6', '#ffffff'];

  (function frame() {
    confetti({
      particleCount: 6,
      angle: 60,
      spread: 100,
      origin: { x: 0 },
      colors: colors
    });
    confetti({
      particleCount: 6,
      angle: 120,
      spread: 100,
      origin: { x: 1 },
      colors: colors
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();

  // 🔊 Play sound (optional, see step 2)
  playConfettiSound();
}




document.getElementById('celebrateBtn').addEventListener('click', () => {
  // 🎉 Trigger confetti
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.3 },
    colors: ['#00f0ff', '#a0f0ff', '#ff00e6']
  });

  // 🔊 Play sound
  playConfettiSound();
});

// Sound function
function playConfettiSound() {
  const sound = document.getElementById('confetti-sound');
  if (sound) {
    sound.currentTime = 0;
    sound.volume = 0.8;
    sound.play().catch((err) => {
      console.warn("Autoplay blocked:", err.message);
    });
  }
}
document.getElementById("backToTopBtn").addEventListener("click", scrollToTop);
// Show or hide button based on scroll
//  Scroll to top function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show or hide the button
window.addEventListener("scroll", function () {
  const btn = document.getElementById("backToTopBtn");
  if (window.scrollY > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});
function scrollToTop() {
  console.log("Back to Top clicked");
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


