const toggleBtn = document.getElementById('darkModeToggle');

  toggleBtn.addEventListener('click', () => {
    // Toggle dark mode class on body
    document.body.classList.toggle('dark-mode');

    // Toggle icon between on/off
    toggleBtn.classList.toggle('fa-toggle-off');
    toggleBtn.classList.toggle('fa-toggle-on');
  });
const lipstickProducts = [
  {
    id: 1,
    brand: "MAC",
    name: "Retro Matte Lipstick - Ruby Woo",
    currentPrice: "₹1,800",
    originalPrice: "₹2,200",
    discount: "18% Off",
    rating: "4.5",
    reviews: "2.3K",
    icon: "💄",
    color: "#dc2626",
  },
  {
    id: 2,
    brand: "NYKAA",
    name: "Matte to Last Liquid Lipstick - Scarlet",
    currentPrice: "₹449",
    originalPrice: "₹599",
    discount: "25% Off",
    rating: "4.2",
    reviews: "1.8K",
    icon: "💋",
    color: "#be185d",
  },
  {
    id: 3,
    brand: "LAKME",
    name: "9to5 Primer + Matte Lip Color - Crimson Silk",
    currentPrice: "₹525",
    originalPrice: "₹650",
    discount: "19% Off",
    rating: "4.3",
    reviews: "956",
    icon: "💄",
    color: "#ef4444",
  },
  {
    id: 4,
    brand: "MAYBELLINE",
    name: "SuperStay Matte Ink - Pioneer",
    currentPrice: "₹599",
    originalPrice: "₹750",
    discount: "20% Off",
    rating: "4.4",
    reviews: "3.1K",
    icon: "💋",
    color: "#ec4899",
  },
  {
    id: 5,
    brand: "SUGAR",
    name: "Matte As Hell Crayon Lipstick - Scarlett O'Hara",
    currentPrice: "₹399",
    originalPrice: "₹499",
    discount: "20% Off",
    rating: "4.1",
    reviews: "742",
    icon: "💄",
    color: "#b91c1c",
  },
  {
    id: 6,
    brand: "COLORBAR",
    name: "Velvet Matte Lipstick - Deep Pink",
    currentPrice: "₹850",
    originalPrice: "₹1,100",
    discount: "23% Off",
    rating: "4.0",
    reviews: "421",
    icon: "💋",
    color: "#f59e0b",
  },
];

const sunscreenProducts = [
  {
    id: 1,
    brand: "DOT & KEY",
    name: "Vitamin C + E Super Bright Sunscreen SPF 50",
    currentPrice: "₹495",
    originalPrice: "₹599",
    discount: "17% Off",
    rating: "4.6",
    reviews: "4.2K",
    icon: "☀",
    color: "#f97316",
  },
  {
    id: 2,
    brand: "MINIMALIST",
    name: "SPF 50 PA++++ Sunscreen - Multi Vitamin",
    currentPrice: "₹349",
    originalPrice: "₹399",
    discount: "13% Off",
    rating: "4.4",
    reviews: "2.8K",
    icon: "🧴",
    color: "#ea580c",
  },
  {
    id: 3,
    brand: "NEUTROGENA",
    name: "Ultra Sheer Dry Touch Sunblock SPF 50+",
    currentPrice: "₹499",
    originalPrice: "₹599",
    discount: "17% Off",
    rating: "4.3",
    reviews: "1.9K",
    icon: "☀",
    color: "#fb923c",
  },
  {
    id: 4,
    brand: "LAKME",
    name: "Sun Expert SPF 50 PA+++ Ultra Matte Sunscreen",
    currentPrice: "₹425",
    originalPrice: "₹550",
    discount: "23% Off",
    rating: "4.2",
    reviews: "1.5K",
    icon: "🧴",
    color: "#f59e0b",
  },
  {
    id: 5,
    brand: "PLUM",
    name: "Hello Aloe SPF 35 PA+++ Sunscreen",
    currentPrice: "₹398",
    originalPrice: "₹465",
    discount: "14% Off",
    rating: "4.5",
    reviews: "3.3K",
    icon: "☀",
    color: "#eab308",
  },
  {
    id: 6,
    brand: "RE'EQUIL",
    name: "Ultra Matte Dry Touch Sunscreen SPF 50",
    currentPrice: "₹399",
    originalPrice: "₹499",
    discount: "20% Off",
    rating: "4.7",
    reviews: "5.1K",
    icon: "🧴",
    color: "#d97706",
  },
];

const moisturizerProducts = [
  {
    id: 1,
    brand: "OLAY",
    name: "Regenerist Micro-Sculpting Cream",
    currentPrice: "₹1,299",
    originalPrice: "₹1,599",
    discount: "19% Off",
    rating: "4.4",
    reviews: "2.7K",
    icon: "🫧",
    color: "#059669",
  },
  {
    id: 2,
    brand: "CETAPHIL",
    name: "Daily Facial Moisturizer SPF 15",
    currentPrice: "₹799",
    originalPrice: "₹950",
    discount: "16% Off",
    rating: "4.6",
    reviews: "3.9K",
    icon: "🧴",
    color: "#10b981",
  },
  {
    id: 3,
    brand: "NEUTROGENA",
    name: "Hydra Boost Water Gel",
    currentPrice: "₹649",
    originalPrice: "₹799",
    discount: "19% Off",
    rating: "4.3",
    reviews: "1.8K",
    icon: "💧",
    color: "#06b6d4",
  },
  {
    id: 4,
    brand: "THE BODY SHOP",
    name: "Vitamin E Moisture Cream",
    currentPrice: "₹1,095",
    originalPrice: "₹1,295",
    discount: "15% Off",
    rating: "4.2",
    reviews: "956",
    icon: "🫧",
    color: "#0891b2",
  },
  {
    id: 5,
    brand: "HIMALAYA",
    name: "Nourishing Skin Cream",
    currentPrice: "₹155",
    originalPrice: "₹175",
    discount: "11% Off",
    rating: "4.1",
    reviews: "4.5K",
    icon: "🌿",
    color: "#16a34a",
  },
  {
    id: 6,
    brand: "PONDS",
    name: "Super Light Gel Oil Free Moisturizer",
    currentPrice: "₹199",
    originalPrice: "₹250",
    discount: "20% Off",
    rating: "4.0",
    reviews: "6.2K",
    icon: "💧",
    color: "#0d9488",
  },
];

// State management
let activeProduct = null;
let activeCards = [];

// DOM elements
const lipstickText = document.getElementById("lipstick");
const sunscreenText = document.getElementById("sunscreen");
const moisturizerText = document.getElementById("moisturizer");
const lipstickContainer = document.getElementById("lipstick-cards");
const sunscreenContainer = document.getElementById("sunscreen-cards");
const moisturizerContainer = document.getElementById("moisturizer-cards");
const interactiveOverlay = document.getElementById("interactive-overlay");

// Create product card element
function createProductCard(product, delay = 0) {
  const card = document.createElement("div");
  card.className = "product-card";
  card.style.animationDelay = `${delay}ms`;


  // Generate star rating
  const fullStars = Math.floor(parseFloat(product.rating));
  const hasHalfStar = parseFloat(product.rating) % 1 !== 0;
  let starsHtml = "★".repeat(fullStars);
  if (hasHalfStar) starsHtml += "☆";
  while (starsHtml.length < 5) starsHtml += "☆";

  card.innerHTML = `
    <div class="product-image" style="background: linear-gradient(135deg, ${product.color}15, ${product.color}05)">
      <div class="product-icon" style="color: ${product.color}">${product.icon}</div>
    </div>
    <div class="product-info">
      <div class="product-brand">${product.brand}</div>
      <div class="product-name">${product.name}</div>
      <div class="product-rating">
        <span class="stars">${starsHtml}</span>
        <span class="rating-text">${product.rating} (${product.reviews})</span>
      </div>
      <div class="product-price">
        <span class="current-price">${product.currentPrice}</span>
        <span class="original-price">${product.originalPrice}</span>
        <span class="discount">${product.discount}</span>
      </div>
      <button class="add-to-cart">Add to Cart</button>
    </div>
  `;

  return card;
}

// Show product cards
function showProductCards(products, container, productType) {
  if (activeProduct === productType) return;

  // Clear any existing cards
  clearAllCards();

  activeProduct = productType;
  interactiveOverlay.classList.add("active");

  // Create and append cards with stagger animation
  products.forEach((product, index) => {
    const card = createProductCard(product, index * 100);
    container.appendChild(card);
    activeCards.push(card);

    // Add click handler to add-to-cart button
    const addToCartBtn = card.querySelector(".add-to-cart");
    addToCartBtn.addEventListener("click", (e) => {
      e.preventDefault();
      // Simple cart animation
      addToCartBtn.textContent = "Added!";
      addToCartBtn.style.background =
        "linear-gradient(135deg, #059669, #047857)";
      setTimeout(() => {
        addToCartBtn.textContent = "Add to Cart";
        addToCartBtn.style.background =
          "linear-gradient(135deg, #e91e63, #ad1457)";
      }, 1500);
    });
  });
}

// Hide product cards
function hideProductCards() {
  if (!activeProduct) return;

  // Fade out animation
  activeCards.forEach((card, index) => {
    setTimeout(() => {
      if (card.parentNode) {
        card.style.opacity = "0";
        card.style.transform = "scale(0.8) translateY(30px)";
      }
    }, index * 50);
  });

  // Remove elements after animation
  setTimeout(
    () => {
      clearAllCards();
    },
    activeCards.length * 50 + 300,
  );
}

// Clear all cards
function clearAllCards() {
  [lipstickContainer, sunscreenContainer, moisturizerContainer].forEach(
    (container) => {
      container.innerHTML = "";
    },
  );
  activeCards = [];
  activeProduct = null;
  interactiveOverlay.classList.remove("active");
}

// Event handlers
function handleLipstickHover() {
  showProductCards(lipstickProducts, lipstickContainer, "lipstick");
}

function handleLipstickLeave() {
  setTimeout(() => {
    if (activeProduct === "lipstick") {
      hideProductCards();
    }
  }, 300); // Small delay to prevent flickering
}

function handleSunscreenHover() {
  showProductCards(sunscreenProducts, sunscreenContainer, "sunscreen");
}

function handleSunscreenLeave() {
  setTimeout(() => {
    if (activeProduct === "sunscreen") {
      hideProductCards();
    }
  }, 300);
}

function handleMoisturizerHover() {
  showProductCards(moisturizerProducts, moisturizerContainer, "moisturizer");
}

function handleMoisturizerLeave() {
  setTimeout(() => {
    if (activeProduct === "moisturizer") {
      hideProductCards();
    }
  }, 300);
}

// Event listeners
lipstickText.addEventListener("mouseenter", handleLipstickHover);
lipstickText.addEventListener("mouseleave", handleLipstickLeave);

sunscreenText.addEventListener("mouseenter", handleSunscreenHover);
sunscreenText.addEventListener("mouseleave", handleSunscreenLeave);

moisturizerText.addEventListener("mouseenter", handleMoisturizerHover);
moisturizerText.addEventListener("mouseleave", handleMoisturizerLeave);

// Prevent cards from disappearing when hovering over them
[lipstickContainer, sunscreenContainer, moisturizerContainer].forEach(
  (container, index) => {
    const productTypes = ["lipstick", "sunscreen", "moisturizer"];

    container.addEventListener("mouseenter", () => {
      // Keep the current cards visible
    });

    container.addEventListener("mouseleave", () => {
      if (activeProduct === productTypes[index]) {
        hideProductCards();
      }
    });
  },
);

// Touch device support
function handleTouchInteraction(productType, products, container) {
  if (activeProduct === productType) {
    hideProductCards();
  } else {
    showProductCards(products, container, productType);
    // Auto-hide after 4 seconds on touch devices
    setTimeout(() => {
      if (activeProduct === productType) {
        hideProductCards();
      }
    }, 4000);
  }
}

lipstickText.addEventListener("touchstart", (e) => {
  e.preventDefault();
  handleTouchInteraction("lipstick", lipstickProducts, lipstickContainer);
});

sunscreenText.addEventListener("touchstart", (e) => {
  e.preventDefault();
  handleTouchInteraction("sunscreen", sunscreenProducts, sunscreenContainer);
});

moisturizerText.addEventListener("touchstart", (e) => {
  e.preventDefault();
  handleTouchInteraction(
    "moisturizer",
    moisturizerProducts,
    moisturizerContainer,
  );
});

// Close cards when clicking outside
document.addEventListener("click", (e) => {
  const isProductText = e.target.classList.contains("product-text");
  const isProductCard = e.target.closest(".product-card");
  const isProductContainer = e.target.closest(".product-cards-container");

  if (!isProductText && !isProductCard && !isProductContainer) {
    hideProductCards();
  }
});

// Performance optimizations
document.addEventListener("DOMContentLoaded", () => {
  // Preload product card styles
  const stylePreloader = document.createElement("div");
  stylePreloader.className = "product-card";
  stylePreloader.style.position = "absolute";
  stylePreloader.style.left = "-9999px";
  stylePreloader.style.top = "-9999px";
  document.body.appendChild(stylePreloader);
  setTimeout(() => {
    document.body.removeChild(stylePreloader);
  }, 100);

  // Add reduced motion support
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const style = document.createElement("style");
    style.textContent = `
      .product-card { animation: none !important; }
      .product-card:hover { transform: none !important; }
    `;
    document.head.appendChild(style);
  }
});

// Handle visibility change
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    clearAllCards();
  }
});

// Handle window resize
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    if (activeProduct) {
      clearAllCards();
    }
  }, 250);
});

// Cleanup function
function cleanup() {
  clearAllCards();
  // Remove any remaining event listeners if needed
}

// Export for potential external use
window.cosmeticsApp = {
  cleanup,
  clearAllCards,
  activeProduct,
  lipstickProducts,
  sunscreenProducts,
  moisturizerProducts,
};
const foundationProducts = [
  {
    id: 1,
    brand: "MAYBELLINE",
    name: "Fit Me Liquid Foundation - Natural Beige",
    currentPrice: "₹399",
    originalPrice: "₹499",
    discount: "20% Off",
    rating: "4.3",
    reviews: "3.8K",
    icon: "🎨",
    color: "#f59e0b",
  },
  {
    id: 2,
    brand: "L'OREAL",
    name: "True Match Super-Blendable Foundation",
    currentPrice: "₹1,099",
    originalPrice: "₹1,299",
    discount: "15% Off",
    rating: "4.4",
    reviews: "2.1K",
    icon: "💄",
    color: "#d97706",
  },
  {
    id: 3,
    brand: "LAKME",
    name: "Absolute Perfect Radiance Foundation",
    currentPrice: "₹650",
    originalPrice: "₹750",
    discount: "13% Off",
    rating: "4.1",
    reviews: "1.2K",
    icon: "🎨",
    color: "#f97316",
  },
  {
    id: 4,
    brand: "NYKAA",
    name: "SKINgenius Foundation - Medium",
    currentPrice: "₹799",
    originalPrice: "₹999",
    discount: "20% Off",
    rating: "4.2",
    reviews: "876",
    icon: "💄",
    color: "#ea580c",
  },
  {
    id: 5,
    brand: "MAC",
    name: "Studio Fix Fluid SPF 15 Foundation",
    currentPrice: "₹2,200",
    originalPrice: "₹2,600",
    discount: "15% Off",
    rating: "4.6",
    reviews: "1.9K",
    icon: "🎨",
    color: "#fb923c",
  },
  {
    id: 6,
    brand: "REVLON",
    name: "ColorStay Makeup Foundation",
    currentPrice: "₹1,149",
    originalPrice: "₹1,349",
    discount: "15% Off",
    rating: "4.0",
    reviews: "965",
    icon: "💄",
    color: "#f59e0b",
  },
];

const skincareProducts = [
  {
    id: 1,
    brand: "THE ORDINARY",
    name: "Niacinamide 10% + Zinc 1%",
    currentPrice: "₹590",
    originalPrice: "₹700",
    discount: "16% Off",
    rating: "4.5",
    reviews: "5.2K",
    icon: "🌿",
    color: "#059669",
  },
  {
    id: 2,
    brand: "MINIMALIST",
    name: "Vitamin C 10% Face Serum",
    currentPrice: "₹599",
    originalPrice: "₹699",
    discount: "14% Off",
    rating: "4.3",
    reviews: "3.1K",
    icon: "💧",
    color: "#10b981",
  },
  {
    id: 3,
    brand: "PLUM",
    name: "Green Tea Renewed Clarity Night Gel",
    currentPrice: "₹345",
    originalPrice: "₹395",
    discount: "13% Off",
    rating: "4.2",
    reviews: "2.8K",
    icon: "🌿",
    color: "#16a34a",
  },
  {
    id: 4,
    brand: "PILGRIM",
    name: "Korean Red Ginseng Anti-Aging Face Serum",
    currentPrice: "₹449",
    originalPrice: "₹549",
    discount: "18% Off",
    rating: "4.1",
    reviews: "1.7K",
    icon: "💧",
    color: "#0d9488",
  },
  {
    id: 5,
    brand: "FOREST ESSENTIALS",
    name: "Kumkumadi Radiance Face Serum",
    currentPrice: "₹2,975",
    originalPrice: "₹3,500",
    discount: "15% Off",
    rating: "4.4",
    reviews: "892",
    icon: "🌿",
    color: "#059669",
  },
  {
    id: 6,
    brand: "MAMA EARTH",
    name: "Vitamin C Face Serum with Turmeric",
    currentPrice: "₹399",
    originalPrice: "₹499",
    discount: "20% Off",
    rating: "4.0",
    reviews: "4.1K",
    icon: "💧",
    color: "#10b981",
  },
];

// Category carousel functionality
const categoryData = {
  lipsticks: lipstickProducts,
  sunscreen: sunscreenProducts,
  moisturizer: moisturizerProducts,
  foundation: foundationProducts,
  skincare: skincareProducts,
};

let currentCategory = "lipsticks";
let currentSlide = 0;
let cardsPerView = 4;
let totalSlides = 0;

// DOM elements for carousel
const categoryTabs = document.querySelectorAll(".category-tab");
const carouselTrack = document.getElementById("carouselTrack");
const carouselPrev = document.getElementById("carouselPrev");
const carouselNext = document.getElementById("carouselNext");
const carouselIndicators = document.getElementById("carouselIndicators");

// Initialize carousel
function initializeCarousel() {
  updateCardsPerView();
  loadCategoryProducts(currentCategory);
  updateCarouselButtons();
  updateIndicators();
}

// Update cards per view based on screen size
function updateCardsPerView() {
  if (window.innerWidth <= 768) {
    cardsPerView = 1;
  } else if (window.innerWidth <= 1024) {
    cardsPerView = 3;
  } else {
    cardsPerView = 4;
  }
}

// Create carousel product card
function createCarouselProductCard(product) {
  const card = document.createElement("div");
  card.className = "carousel-product-card";

  // Generate star rating
  const fullStars = Math.floor(parseFloat(product.rating));
  const hasHalfStar = parseFloat(product.rating) % 1 !== 0;
  let starsHtml = "★".repeat(fullStars);
  if (hasHalfStar) starsHtml += "☆";
  while (starsHtml.length < 5) starsHtml += "☆";

  card.innerHTML = `
    <div class="carousel-product-image" style="background: linear-gradient(135deg, ${product.color}15, ${product.color}05)">
      <div class="carousel-product-icon" style="color: ${product.color}">${product.icon}</div>
    </div>
    <div class="carousel-product-info">
      <div class="carousel-product-brand">${product.brand}</div>
      <div class="carousel-product-name">${product.name}</div>
      <div class="carousel-product-rating">
        <span class="stars">${starsHtml}</span>
        <span class="rating-text">${product.rating} (${product.reviews})</span>
      </div>
      <div class="carousel-product-price">
        <span class="carousel-current-price">${product.currentPrice}</span>
        <span class="carousel-original-price">${product.originalPrice}</span>
        <span class="carousel-discount">${product.discount}</span>
      </div>
      <button class="carousel-add-to-cart">Add to Cart</button>
    </div>
  `;

  return card;
}

// Load products for selected category
function loadCategoryProducts(category) {
  const products = categoryData[category] || [];
  carouselTrack.innerHTML = "";

  products.forEach((product) => {
    const card = createCarouselProductCard(product);
    carouselTrack.appendChild(card);

    // Add click handler to add-to-cart button
    const addToCartBtn = card.querySelector(".carousel-add-to-cart");
    addToCartBtn.addEventListener("click", (e) => {
      e.preventDefault();
      addToCartBtn.textContent = "Added!";
      addToCartBtn.style.background =
        "linear-gradient(135deg, #059669, #047857)";
      setTimeout(() => {
        addToCartBtn.textContent = "Add to Cart";
        addToCartBtn.style.background =
          "linear-gradient(135deg, #e91e63, #ad1457)";
      }, 1500);
    });
  });

  totalSlides = Math.max(0, Math.ceil(products.length / cardsPerView) - 1);
  currentSlide = 0;
  updateCarouselPosition();
  updateCarouselButtons();
  updateIndicators();
}

// Update carousel position
function updateCarouselPosition() {
  const cardWidth = 240 + 20; // card width + gap
  const offset = currentSlide * cardWidth * cardsPerView;
  carouselTrack.style.transform = `translateX(-${offset}px)`;

}

// Update carousel navigation buttons
function updateCarouselButtons() {
  if (carouselPrev) {
    carouselPrev.disabled = currentSlide === 0;
  }
  if (carouselNext) {
    carouselNext.disabled = currentSlide >= totalSlides;
  }
}

// Update carousel indicators
function updateIndicators() {
  if (!carouselIndicators) return;

  carouselIndicators.innerHTML = "";

  for (let i = 0; i <= totalSlides; i++) {
    const dot = document.createElement("div");
    dot.className = `carousel-dot${i === currentSlide ? " active" : ""}`;

    dot.addEventListener("click", () => {
      currentSlide = i;
      updateCarouselPosition();
      updateCarouselButtons();
      updateIndicators();
    });
    carouselIndicators.appendChild(dot);
  }
}

// Category tab event listeners
categoryTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs
    categoryTabs.forEach((t) => t.classList.remove("active"));

    // Add active class to clicked tab
    tab.classList.add("active");

    // Update current category
    currentCategory = tab.dataset.category;

    // Load products for selected category
    loadCategoryProducts(currentCategory);
  });
});

// Carousel navigation event listeners
if (carouselPrev) {
  carouselPrev.addEventListener("click", () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateCarouselPosition();
      updateCarouselButtons();
      updateIndicators();
    }
  });
}

if (carouselNext) {
  carouselNext.addEventListener("click", () => {
    if (currentSlide < totalSlides) {
      currentSlide++;
      updateCarouselPosition();
      updateCarouselButtons();
      updateIndicators();
    }
  });
}

// Handle window resize for carousel
window.addEventListener("resize", () => {
  updateCardsPerView();
  const products = categoryData[currentCategory] || [];
  totalSlides = Math.max(0, Math.ceil(products.length / cardsPerView) - 1);

  // Reset slide if necessary
  if (currentSlide > totalSlides) {
    currentSlide = totalSlides;
  }

  updateCarouselPosition();
  updateCarouselButtons();
  updateIndicators();
});

// Initialize carousel when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeCarousel();
});

// Export for potential external use
window.cosmeticsApp = {
  cleanup,
  clearAllCards,
  activeProduct,
  lipstickProducts,
  sunscreenProducts,
  moisturizerProducts,
  foundationProducts,
  skincareProducts,
  categoryData,
  carousel: {
    loadCategory: (category) => {
      currentCategory = category;
      loadCategoryProducts(category);
    },
    nextSlide: () => carouselNext?.click(),
    prevSlide: () => carouselPrev?.click(),
  },
  navbar: {
    toggle: () => mobileToggle.click(),
    closeMenu: () => {
      mobileToggle.classList.remove("active");
      navMenu.classList.remove("active");
      document.body.style.overflow = "";
    },
  },
};
const copyBtn = document.getElementById("copyBtn");
const shopNowBtn = document.getElementById("shopNowBtn");
const couponCode = document.getElementById("couponCode");
const countdown = document.getElementById("countdown");

// Ripple effect function
function createRipple(event, button) {
  const ripple = document.createElement("span");
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = size + "px";
  ripple.style.left = x + "px";
  ripple.style.top = y + "px";
  ripple.classList.add("ripple");

  button.appendChild(ripple);

  // Remove ripple after animation
  setTimeout(() => {
    ripple.remove();
  }, 600);
}

// Copy coupon code functionality
if (copyBtn && couponCode) {
  copyBtn.addEventListener("click", (e) => {
    createRipple(e, copyBtn);

    // Copy to clipboard
    navigator.clipboard
      .writeText(couponCode.textContent)
      .then(() => {
        // Show success feedback
        const originalContent = copyBtn.innerHTML;
        copyBtn.innerHTML =
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>';
        copyBtn.style.background = "rgba(5, 150, 105, 0.2)";

        setTimeout(() => {
          copyBtn.innerHTML = originalContent;
          copyBtn.style.background = "rgba(255, 255, 255, 0.1)";
        }, 2000);
      })
      .catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = couponCode.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);

        // Show success feedback
        const originalContent = copyBtn.innerHTML;
        copyBtn.innerHTML =
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>';
        copyBtn.style.background = "rgba(5, 150, 105, 0.2)";

        setTimeout(() => {
          copyBtn.innerHTML = originalContent;
          copyBtn.style.background = "rgba(255, 255, 255, 0.1)";
        }, 2000);
      });
  });
}

// Shop now button functionality
if (shopNowBtn) {
  shopNowBtn.addEventListener("click", (e) => {
    createRipple(e, shopNowBtn);

    // Scroll to category section
    setTimeout(() => {
      const categorySection = document.getElementById("categorySection");
      if (categorySection) {
        categorySection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  });
}

// Countdown timer
function updateCountdown() {
  if (!countdown) return;

  // Set countdown to 7 days from now
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 7);

  function updateTimer() {
    const now = new Date().getTime();
    const distance = endDate.getTime() - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    if (distance > 0) {
      countdown.textContent = `${days}d ${hours}h ${minutes}m`;

    } else {
      countdown.textContent = "Expired";
    }
  }

  updateTimer();
  setInterval(updateTimer, 60000); // Update every minute
}

// Parallax scrolling effect
function initParallax() {
  const parallaxElements = document.querySelectorAll(".parallax-element");

  function updateParallax() {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;

    parallaxElements.forEach((element, index) => {
      const speed = parallaxSpeed * (index + 1) * 0.3;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;

    });
  }

  // Throttle scroll events for performance
  let ticking = false;

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
      setTimeout(() => {
        ticking = false;
      }, 16); // ~60fps
    }
  }

  window.addEventListener("scroll", requestTick);
}

// Intersection Observer for animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe coupon elements
  const animatedElements = document.querySelectorAll(
    ".coupon-card, .coupon-header, .coupon-features",
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    observer.observe(el);
  });
}

// Mouse move parallax effect for coupon card
function initMouseParallax() {
  const couponCard = document.querySelector(".coupon-card");

  if (couponCard) {
    couponCard.addEventListener("mousemove", (e) => {
      const rect = couponCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      couponCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    couponCard.addEventListener("mouseleave", () => {
      couponCard.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    });
  }
}

// Add ripple effect to all ripple buttons
function initRippleButtons() {
  const rippleButtons = document.querySelectorAll(".ripple-btn");

  rippleButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      createRipple(e, button);
    });
  });
}

// Initialize all coupon section functionality
function initCouponSection() {
  updateCountdown();
  initParallax();
  initScrollAnimations();
  initMouseParallax();
  initRippleButtons();
}

// Initialize carousel when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeCarousel();
  initCouponSection();
});

// Export for potential external use
window.cosmeticsApp = {
  cleanup,
  clearAllCards,
  activeProduct,
  lipstickProducts,
  sunscreenProducts,
  moisturizerProducts,
  foundationProducts,
  skincareProducts,
  categoryData,
  carousel: {
    loadCategory: (category) => {
      currentCategory = category;
      loadCategoryProducts(category);
    },
    nextSlide: () => carouselNext?.click(),
    prevSlide: () => carouselPrev?.click(),
  },
  navbar: {
    toggle: () => mobileToggle.click(),
    closeMenu: () => {
      mobileToggle.classList.remove("active");
      navMenu.classList.remove("active");
      document.body.style.overflow = "";
    },
  },
};
