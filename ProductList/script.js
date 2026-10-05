const products = [
    {
        id: 1,
        name: "Aero Wireless Headphones",
        category: "Electronics",
        price: 129.99,
        description: "Immersive wireless audio with comfortable all-day listening.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 2,
        name: "Nova Smart Watch",
        category: "Wearables",
        price: 179.99,
        description: "A modern smartwatch designed to keep your day connected.",
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 3,
        name: "Orbit Mechanical Keyboard",
        category: "Computing",
        price: 99.99,
        description: "A precision mechanical keyboard built for work and creativity.",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 4,
        name: "Vertex Backpack",
        category: "Lifestyle",
        price: 74.99,
        description: "A clean everyday backpack with practical modern storage.",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 5,
        name: "Pixel Desk Lamp",
        category: "Workspace",
        price: 54.99,
        description: "Minimal desk lighting designed for focused work sessions.",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 6,
        name: "Nova Camera Pro",
        category: "Photography",
        price: 699.99,
        description: "Capture detailed photographs and cinematic moments with ease.",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80"
    }
];

const productsGrid = document.getElementById("productsGrid");
const productCount = document.getElementById("productCount");

function displayProducts() {

    productsGrid.innerHTML = "";

    productCount.textContent =
        `${products.length} Products Available`;

    if (products.length === 0) {

        const emptyMessage = document.createElement("div");

        emptyMessage.classList.add("empty-state");

        emptyMessage.textContent =
            "No products available.";

        productsGrid.appendChild(emptyMessage);

        return;
    }

    products.forEach(function(product) {

        const productCard = document.createElement("article");

        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <div class="product-image">
                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <span class="category">
                    ${product.category}
                </span>
            </div>

            <div class="product-content">

                <h3>${product.name}</h3>

                <p class="product-description">
                    ${product.description}
                </p>

                <div class="product-bottom">

                    <span class="price">
                        $${product.price.toFixed(2)}
                    </span>

                    <button class="view-button">
                        View Product
                    </button>

                </div>

            </div>
        `;

        productsGrid.appendChild(productCard);
    });
}

displayProducts();