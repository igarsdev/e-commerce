// Data produk
const products = [
  {
    id: 1,
    name: "Laptop Gaming - ASUS ROG Zephyrus G14",
    price: 32500000,
    image:
      "https://s3.ap-southeast-1.amazonaws.com/stream.orbit.co.id/content/uploads/2024/10/08154110/f44bb37c-f42a-4725-b01c-4b646a3b7424-1-300x300.jpg",
    description:
      "ASUS ROG Zephyrus G14 GA403UU-R745OL6G-OM R7 8845HS 16GB 1 TB RTX4050 6GB W11+OHS",
  },
  {
    id: 2,
    name: "Samsung Z Fold 5 12/512 Gb",
    price: 24000000,
    image:
      "https://images.tokopedia.net/img/cache/500-square/hDjmkQ/2023/10/26/9a791d5f-1fbc-46ba-96bf-5cfa4a18ea7a.jpg",
    description: "Samsung Z Fold 5 12/512 Gb",
  },
  {
    id: 3,
    name: "Headphone",
    price: 1000000000,
    image: "https://picsum.photos/300/202",
    description: "Headphone wireless dengan noise cancelling",
  },
  {
    id: 4,
    name: "Headphone",
    price: 1000000,
    image: "https://picsum.photos/300/203",
    description: "Headphone wireless dengan noise cancelling",
  },
  {
    id: 5,
    name: "Headphone",
    price: 1000000,
    image: "https://picsum.photos/300/204",
    description: "Headphone wireless dengan noise cancelling",
  },
  {
    id: 6,
    name: "Headphone",
    price: 1000000,
    image: "https://picsum.photos/300/205",
    description: "Headphone wireless dengan noise cancelling",
  },
];

// Tampilkan produk
function displayProducts() {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = products
    .map(
      (product) => `
                <div class="product-card" onclick="showDetail(${product.id})">
                    <img src="${product.image}" alt="${
        product.name
      }" class="product-image">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-price">Rp ${product.price.toLocaleString()}</p>
                </div>
            `
    )
    .join("");
}

// Tampilkan detail produk
function showDetail(id) {
  const product = products.find((p) => p.id === id);
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modalContent");

  modalContent.innerHTML = `
                <h2>${product.name}</h2>
                <img src="${product.image}" alt="${
    product.name
  }" style="max-width: 100%; margin: 20px 0;">
                <p>${product.description}</p>
                <p class="product-price">Rp ${product.price.toLocaleString()}</p>
            `;

  modal.style.display = "block";
}

// Tutup modal
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Tutup modal ketika klik di luar modal
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Jalankan fungsi tampilkan produk
displayProducts();
