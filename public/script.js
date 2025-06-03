let cart = [];
let currentCategory = 'all';
let currentUser = null;

const productsGrid = document.getElementById('productsGrid');
const categoryTitle = document.getElementById('categoryTitle');
const cartCount = document.getElementById('cartCount');
const cartSidebar = document.getElementById('cartSidebar');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const loadingSpinner = document.getElementById('loadingSpinner');

const productsSection = document.getElementById('productsSection');
const checkoutSection = document.getElementById('checkoutSection');
const orderConfirmation = document.getElementById('orderConfirmation');

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
});

async function initializeApp() {
    try {
        console.log('Initializing app...');
        showLoading();
        await loadProducts('all');

        setTimeout(() => {
            setupEventListeners();
            console.log('Event listeners setup complete');
        }, 100);

        hideLoading();
    } catch (error) {
        console.error('Error initializing app:', error);
        hideLoading();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    initializeApp();

    setTimeout(() => {
        setupEventListeners();
        console.log('Secondary event listener setup complete');
    }, 500);
});

function setupEventListeners() {
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.target.dataset.category;
            switchCategory(category);
        });
    });

    const loginForm = document.getElementById('loginForm');
    const addressForm = document.getElementById('addressForm');

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    if (addressForm) {
        addressForm.addEventListener('submit', (e) => e.preventDefault());
    }

    const placeOrderBtn = document.querySelector('.place-order-btn');
    if (placeOrderBtn) {
        placeOrderBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            placeOrder(e);
        });
    }

    const checkoutButton = document.getElementById('checkoutBtn');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', (e) => {
            e.preventDefault();
            showCheckout();
        });
    }

    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', (e) => {
            e.preventDefault();
            hideCheckout();
        });
    }

    const continueBtn = document.querySelector('.continue-shopping-btn');
    if (continueBtn) {
        continueBtn.addEventListener('click', (e) => {
            e.preventDefault();
            continueShopping();
        });
    }
}

async function switchCategory(category) {
    if (category === currentCategory) return;

    currentCategory = category;

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });

    const titles = {
        'all': 'All Products',
        'women': "Women's Fashion",
        'men': "Men's Fashion",
        'children': "Children's Fashion"
    };
    categoryTitle.textContent = titles[category];

    showLoading();
    await loadProducts(category);
    hideLoading();
}

async function loadProducts(category) {
    try {
        const products = await mockAPI.getProducts(category);
        displayProducts(products);
    } catch (error) {
        console.error('Error loading products:', error);
        productsGrid.innerHTML = '<p>Error loading products. Please try again.</p>';
    }
}

function displayProducts(products) {
    if (products.length === 0) {
        productsGrid.innerHTML = '<p>No products found in this category.</p>';
        return;
    }

    productsGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-material">${product.material}</p>
                <p class="product-size">Size: ${product.size}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCartUI();
    showCartAnimation();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
            </div>
        `;
        checkoutBtn.disabled = true;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)} x ${item.quantity}</div>
                </div>
                <button class="remove-item-btn" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
        checkoutBtn.disabled = false;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);

    const orderTotal = document.getElementById('orderTotal');
    if (orderTotal) {
        orderTotal.textContent = total.toFixed(2);
    }
}

function showCartAnimation() {
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
    }, 200);
}

function toggleCart() {
    cartSidebar.classList.toggle('active');
}

function showCheckout() {
    if (cart.length === 0) return;

    productsSection.style.display = 'none';
    checkoutSection.classList.remove('hidden');
    toggleCart();

    updateOrderSummary();
}

function hideCheckout() {
    checkoutSection.classList.add('hidden');
    productsSection.style.display = 'block';
}

function updateOrderSummary() {
    const orderSummary = document.getElementById('orderSummary');
    const orderTotal = document.getElementById('orderTotal');

    if (orderSummary) {
        orderSummary.innerHTML = cart.map(item => `
            <div class="order-item">
                <span>${item.name} x ${item.quantity}</span>
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        `).join('');
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (orderTotal) {
        orderTotal.textContent = total.toFixed(2);
    }
}

async function handleLogin(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Please fill in all login fields');
        return;
    }

    try {
        showLoading();
        const result = await mockAPI.authenticateUser(email, password);
        currentUser = result.user;
        hideLoading();

        const loginSection = document.querySelector('.form-section');
        loginSection.innerHTML = `
            <h3>✓ Logged in as ${currentUser.name}</h3>
            <p style="color: green;">Login successful!</p>
        `;
    } catch (error) {
        hideLoading();
        alert(error.message || 'Login failed. Please check your credentials.');
    }
}

async function placeOrder(event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    console.log('Place order function called');

    const email = document.getElementById('email')?.value || '';
    const password = document.getElementById('password')?.value || '';
    const fullName = document.getElementById('fullName')?.value || '';
    const address = document.getElementById('address')?.value || '';
    const city = document.getElementById('city')?.value || '';
    const zipCode = document.getElementById('zipCode')?.value || '';
    const country = document.getElementById('country')?.value || '';

    console.log('Form values:', { email, fullName, address, city, zipCode, country });

    if (!currentUser && (!email || !password)) {
        alert('Please log in first');
        return;
    }

    if (!fullName || !address || !city || !zipCode || !country) {
        alert('Please fill in all delivery address fields');
        return;
    }

    if (cart.length === 0) {
        alert('Your cart is empty');
        return;
    }

    try {
        console.log('Starting order placement...');
        showLoading();

        const orderData = {
            user: currentUser || { email, name: fullName },
            items: cart,
            total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            deliveryAddress: {
                fullName,
                address,
                city,
                zipCode,
                country
            }
        };

        console.log('Order data:', orderData);

        const result = await mockAPI.placeOrder(orderData);

        console.log('Order result:', result);

        hideLoading();

        if (result.success) {
            document.getElementById('orderId').textContent = result.orderId;
            checkoutSection.classList.add('hidden');
            orderConfirmation.classList.remove('hidden');

            cart = [];
            updateCartUI();
        }
    } catch (error) {
        console.error('Order placement error:', error);
        hideLoading();
        alert('Error placing order: ' + (error.message || 'Please try again'));
    }
}

function continueShopping() {
    orderConfirmation.classList.add('hidden');
    productsSection.style.display = 'block';

    document.getElementById('loginForm').reset();
    document.getElementById('addressForm').reset();
    currentUser = null;

    const loginSection = document.querySelector('.form-section');
    loginSection.innerHTML = `
        <h3>Login</h3>
        <form id="loginForm">
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
            </div>
        </form>
    `;

    const newLoginForm = document.getElementById('loginForm');
    if (newLoginForm) {
        newLoginForm.addEventListener('submit', handleLogin);
    }
}

function showLoading() {
    loadingSpinner.classList.remove('hidden');
}

function hideLoading() {
    loadingSpinner.classList.add('hidden');
}

document.addEventListener('click', function(e) {
    if (!e.target.closest('.cart-sidebar') && !e.target.closest('.cart-icon')) {
        cartSidebar.classList.remove('active');
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        cartSidebar.classList.remove('active');
    }
});

function handleResize() {
    if (window.innerWidth <= 768 && cartSidebar.classList.contains('active')) {
        cartSidebar.style.width = '100%';
    } else {
        cartSidebar.style.width = '400px';
    }
}

window.addEventListener('resize', handleResize);

document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'https://via.placeholder.com/400x600/cccccc/666666?text=Image+Not+Found';
    }
}, true);

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}