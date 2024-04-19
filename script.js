// Add your JavaScript code here
document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');

    const products = [
        {
            name: 'Rose Petal Facial Cream',
            price: '$50.00',
            image: 'https://via.placeholder.com/300x200?text=Rose+Petal+Facial+Cream',
            description: 'A luxurious facial cream infused with rose petals and natural oils to hydrate and nourish your skin.'
        },
        {
            name: 'Golden Glow Body Scrub',
            price: '$35.00',
            image: 'https://via.placeholder.com/300x200?text=Golden+Glow+Body+Scrub',
            description: 'A rejuvenating body scrub with gold shimmer and natural exfoliants to leave your skin glowing and smooth.'
        },
        {
            name: 'Velvet Lipstick',
            price: '$25.00',
            image: 'https://via.placeholder.com/300x200?text=Velvet+Lipstick',
            description: 'A rich and velvety lipstick with long-lasting color and a comfortable, hydrating formula.'
        }
    ];

    products.forEach(product => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <p>${product.description}</p>
        `;
        productList.appendChild(li);
    });
});
