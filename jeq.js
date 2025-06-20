$(document).ready(function () {
  $("img").click(function () {
    const src = $(this).attr("src");

    // Create overlay
    const overlay = $(`
      <div id="img-overlay" style="
        position: fixed;
        top: 0; left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
      ">
        <img src="${src}" style="
          max-width: 90%;
          max-height: 90%;
          box-shadow: 0 0 20px #fff;
          border: 4px solid white;
          border-radius: 12px;
        ">
      </div>
    `);

    $("body").append(overlay);

    // Close on click
    $("#img-overlay").click(function () {
      $(this).fadeOut(200, function () {
        $(this).remove();
      });
    });
  });
});


 function initMap() {
    const location = { lat: -23.9045, lng: 29.4689 }; // Example: Polokwane, South Africa
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: location,
    });

    const marker = new google.maps.Marker({
      position: location,
      map: map,
      title: "TCC IT Group",
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
  const revealElements = document.querySelectorAll("section, h1, h2, h3, p, ul");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 50) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Trigger on load
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  // Start with dark mode
  body.classList.add("dark-mode");

  // Button toggle
  toggleBtn.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    toggleBtn.textContent = body.classList.contains("dark-mode") ? "🌙" : "☀️";
  });
});

const products = [
  {
    id: 1,
    name: "Gaming Keyboard",
    description: "Mechanical RGB backlit keyboard.",
    price: "R1200",
    image: "images/keyboard.jpg"
  },
  {
    id: 2,
    name: "27-inch Monitor",
    description: "High refresh rate IPS monitor.",
    price: "R5000",
    image: "images/monitor.jpg"
  },
  {
    id: 3,
    name: "Wireless Mouse",
    description: "Ergonomic and fast response mouse.",
    price: "R650",
    image: "images/mouse.jpg"
  }
];


function loadProducts() {
  const container = document.getElementById('products-container');
  container.innerHTML = ''; // Clear container first

  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" width="200" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p><strong>Price: </strong>${product.price}</p>
    `;

    container.appendChild(productCard);
  });
}

// Run this on page load
window.addEventListener('DOMContentLoaded', loadProducts)


$(document).ready(function () {
  $('#mainSearchInput').on('input', function () {
    renderNews('main');
  });
});

function renderNews(source = 'main') {
  const input = source === 'main'
    ? $('#mainSearchInput').val().toLowerCase()
    : '';

  const container = $('#news-container'); // This is your <div id="news-container"></div>
  let filtered = newsItems.filter(item =>
    item.title.toLowerCase().includes(input) ||
    item.content.toLowerCase().includes(input)
  );

  container.empty();
  filtered.forEach(item => {
    const card = $(`
      <div class="news-card">
        <h2>${item.title}</h2>
        <p>${item.content}</p>
      </div>
    `);
    container.append(card);
  });
}






