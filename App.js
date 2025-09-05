
document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
    particles: {
      number: {value: 80, density: {enable: true, value_area: 800}},
      color: {value: "#64ffda"},
      shape: {type: "circle"},
      opacity: {value: 0.5, random: true},
      size: {value: 3, random: true},
      line_linked: {
        enable: true,
        distance: 150,
        color: "#64ffda",
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {enable: true, mode: "repulse"},
        onclick: {enable: true, mode: "push"},
      },
    },
  });

  const quotes = [
    "The most effective way to do it, is to do it.",
    "First, solve the problem. Then, write the code.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "The function of good software is to make the complex appear to be simple.",
    "Simplicity is the soul of efficiency.",
    "Make it work, make it right, make it fast.",
    "Programming isn't about what you know; it's about what you can figure out.",
    "The only way to learn a new programming language is by writing programs in it.",
    "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const funButton = document.getElementById("funButton");
  const funQuote = document.getElementById("funQuote");
  const profilePic = document.querySelector(".profile-pic");


  setTimeout(() => {
    const typingElements = document.querySelectorAll(".typing-animation");
    typingElements.forEach((el) => {
      el.style.borderRight = "2px solid var(--accent-color)";
    });
  }, 2000);

 
  funButton.addEventListener("click", function (e) {
    e.preventDefault();


    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  
    funQuote.classList.remove("show");
    void funQuote.offsetWidth;

    
    funQuote.textContent = randomQuote
    funQuote.classList.add("show");

    this.classList.add("clicked");
    setTimeout(() => {
      this.classList.remove("clicked");
    }, 300);
  });

 
  function floatAnimation() {
    const time = Date.now() * 0.001;
    const floatingDistance = Math.sin(time) * 10;
    profilePic.style.transform = `translateY(${floatingDistance}px)`;
    requestAnimationFrame(floatAnimation);
  }
  floatAnimation();
  const cardElements = document.querySelectorAll(".card > *");
  cardElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      el.style.transform = "translateZ(30px)";
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "translateZ(0)";
    });
  });
});