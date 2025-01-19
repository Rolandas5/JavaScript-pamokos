const searchInput = document.getElementById('searchInput');
const productsContainer = document.getElementById('productsContainer');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
let debounceTimer;

// Funkcija duomenims gauna iš Fake Store API
const fetchProducts = async (query = '') => {
  const api = 'https://fakestoreapi.com/products';
  try {
    const response = await fetch(api);
    const products = await response.json();
    // Filtruojame produktus pagal paieškos užklausą
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    displayProducts(filteredProducts);
  } catch (error) {
    console.error('Klaida gaunant produktus:', error);
  }
};

// Funkcija produktams atvaizduoti
const displayProducts = (products) => {
  productsContainer.innerHTML = '';
  if (products.length === 0) {
    productsContainer.innerHTML = '<p>Nerasta produktų.</p>';
    return;
  }
  products.forEach((product) => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
            <a href="#lightbox" onclick="openLightbox('${product.image}')">
                <img src="${product.image}" alt="${product.title}">
            </a>
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <p class="price">$${product.price}</p>
        `;
    productsContainer.appendChild(productCard);
  });
};

// "Debounce" funkcionalumas paieškai
searchInput.addEventListener('input', (event) => {
  const query = event.target.value.trim();
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    fetchProducts(query);
  }, 500);
});

// Pradiniai produktai
fetchProducts();

// Funkcija atidaryti lightbox
function openLightbox(imageSrc) {
  lightboxImage.src = imageSrc;
}
