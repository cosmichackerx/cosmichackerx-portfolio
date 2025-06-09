// Select all elements with the class "glow-btn"
const glowButtons = document.querySelectorAll(".glow-btn");

// Add event listeners to each button
glowButtons.forEach(button => {
  // Add mousemove event listener
  button.addEventListener("mousemove", (e) => {
    // Get the button's bounding rectangle
    const rect = button.getBoundingClientRect();
    
    // Calculate the x and y coordinates of the mouse pointer
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Update the box shadow
    button.style.boxShadow = `${x}px ${y}px 30px rgba(0, 255, 255, 0.5)`;
  });

  // Add mouseleave event listener
  button.addEventListener("mouseleave", () => {
    // Reset the box shadow
    button.style.boxShadow = "0px 0px 20px cyan";
  });

  // Add click effect
  button.addEventListener("mousedown", () => {
    button.style.transform = "scale(0.95)";
  });

  button.addEventListener("mouseup", () => {
    button.style.transform = "scale(1)";
  });
});


const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 50; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 2,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
});
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x> canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y> canvas.height) p.speedY *= -1;

        ctx.fillStyle = "rgba(0,255,255,0.8)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
});

    requestAnimationFrame(animateParticles);
}


