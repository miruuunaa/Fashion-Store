const products = [
    {
        id: 1,
        name: "Elegant Evening Dress",
        category: "women",
        price: 89.99,
        image: "https://gomagcdn.ro/domains2/sequin.ro/files/files/2-6244.png",
        material: "95% Polyester, 5% Elastane",
        size: "Universal "
    },
    {
        id: 2,
        name: "Casual Summer Blouse",
        category: "women",
        price: 34.99,
        image: "https://img.ltwebstatic.com/images3_pi/2023/09/04/6c/1693795431be0e0b47794c6859eb56459db86a2987_thumbnail_560x.webp",
        material: "100% Cotton",
        size: "Universal "
    },
    {
        id: 3,
        name: "Professional Blazer",
        category: "women",
        price: 79.50,
        image: "https://cdn7.avanticart.ro/dasha.ro/pictures/pulover-maro-deschis-accesorizat-704732-620867-2.webp",
        material: "70% Wool, 30% Polyester",
        size: "Universal "
    },
    {
        id: 4,
        name: "Comfortable Jeans",
        category: "women",
        price: 59.99,
        image: "https://img.ltwebstatic.com/images3_pi/2024/01/23/69/17059929296cf01b02c97727663dbd1e7e8d00ffc1_thumbnail_560x.webp",
        material: "98% Cotton, 2% Elastane",
        size: "Universal "
    },
    {
        id: 5,
        name: "Floral Print Skirt",
        category: "women",
        price: 42.00,
        image: "https://img.ltwebstatic.com/images3_pi/2023/08/07/96/1691385836d055b2cd35f7829c0ddcb8a9eedd98f7_thumbnail_560x.webp",
        material: "100% Chiffon",
        size: "Universal "
    },
    {
        id: 6,
        name: "Knit Sweater",
        category: "women",
        price: 67.99,
        image: "https://img01.ztat.net/article/spp-media-p1/38a6fc10c99b4510ab0627c5be6f689f/991381efffca40e19c1eb9d836b1d162.jpg?imwidth=1800",
        material: "80% Wool, 20% Cashmere",
        size: "Universal "
    },

    {
        id: 7,
        name: "Classic Suit Jacket",
        category: "men",
        price: 129.99,
        image: "https://img.ltwebstatic.com/images3_pi/2024/07/08/49/17204075112e0023155e1024e9745b4d7aceaa754d_thumbnail_560x.webp",
        material: "65% Wool, 35% Polyester",
        size: "Universal "
    },
    {
        id: 8,
        name: "Casual Polo Shirt",
        category: "men",
        price: 29.99,
        image: "https://img.ltwebstatic.com/images3_pi/2021/12/30/16408315924e76e7722fcfd87f299d4ec371ee2d77_thumbnail_560x.webp",
        material: "100% Cotton Pique",
        size: "Universal "
    },
    {
        id: 9,
        name: "Denim Jacket",
        category: "men",
        price: 74.50,
        image: "https://img.ltwebstatic.com/images3_pi/2024/08/20/7c/17241594090dbd28b4aa016c4d189b2aa6895d3c34_thumbnail_560x.webp",
        material: "100% Cotton Denim",
        size: "Universal "
    },
    {
        id: 10,
        name: "Business Shirt",
        category: "men",
        price: 49.99,
        image: "https://www.stoneycreek.co.nz/image/catalog/product_images/corporate/mens/shirts/Mens_Corporate_Shirt_Long_Sleeve_Float_Navy.jpg",
        material: "60% Cotton, 40% Polyester",
        size: "Universal "
    },
    {
        id: 11,
        name: "Casual Chinos",
        category: "men",
        price: 55.00,
        image: "https://cortefiel.com/dw/image/v2/AAYL_PRD/on/demandware.static/-/Sites-gc-ctf-master-catalog/default/dw85d2b3d7/images/hi-res/P_629210534D8.jpg?sw=600&sh=900&sm=fit",
        material: "97% Cotton, 3% Elastane",
        size: "Universal "
    },
    {
        id: 12,
        name: "Winter Coat",
        category: "men",
        price: 149.99,
        image: "https://img01.ztat.net/article/spp-media-p1/d368bbfc5c4144d98ff380141cde87a4/60ceba2242f542ccb88add40e0f1a765.jpg?imwidth=762",
        material: "80% Wool, 20% Polyamide",
        size: "Universal "
    },

    {
        id: 13,
        name: "Colorful T-Shirt",
        category: "children",
        price: 19.99,
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRfp9wUKH8qTe2D7B2TyWWRuYRXkaqDDcpqonV_DVfvby7JA0ujvuHwL9DnOdL1UBIdvEl889bXLXlUU7IUAt-FUQUKlYgSV_zzi7qJ3c1PyTwMEYuENBsAochAK2In8at-YF2p27LyZQ&usqp=CAc",
        material: "100% Organic Cotton",
        size: "Universal "
    },
    {
        id: 14,
        name: "Comfortable Hoodie",
        category: "children",
        price: 34.50,
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRCXmml6vJWsk6CYp0sdGmyBGAixzK-_EAaaUqGIMJHVcebBjXogsQejW5JzsEW2wvzIMA3dpWiy2h2_IyPh-ybpv-3WidC3kqkG_m01L9Gvskkqv4SfnHgLA&usqp=CAc",
        material: "80% Cotton, 20% Polyester",
        size: "Universal "
    },
    {
        id: 15,
        name: "Playful Dress",
        category: "children",
        price: 29.99,
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQujaxgNCBVoi1lTy3XmW87MvPKFZ9U2AiRxOPc3EKnx90Yap31kf3k93XN2AQC53EiSdoI1NEsaXWt3qt24buU7H-U7VEzQsF-dcIJqnaKXyHnQTQ28j-_yXDzSYPI8ZzLv9fkTws0WDw&usqp=CAc",
        material: "95% Cotton, 5% Elastane",
        size: "Universal "
    },
    {
        id: 16,
        name: "Denim Overalls",
        category: "children",
        price: 39.99,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcROdbuSmKT5hXa7Jo5V0KxpVvHXiPzIo87y5KCBNvt3D807vxbGt4vnNH2f1YIBlDCTfbpa-n7n1bfH5jGvmdKbt58bcEvSdPDKOnNvb6Npp-4E92lforO8Q523YC_-Isspj154bA&usqp=CAc",
        material: "100% Cotton Denim",
        size: "Universal "
    },
    {
        id: 17,
        name: "Warm Jacket",
        category: "children",
        price: 54.99,
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQMVap9FCpXdbtGVpjgW_3uwCnwQDVhlWC_8SHWBor32aNuHitVEFkFs73xhGFk4GHV6BHRfUf_gFpXbcpmE_5Vv0z3gRljxOHfR35-t0h9JNZ5lr-tJQoZxAXgAwyCz4Ai_exLZvU&usqp=CAc",
        material: "Polyester Fill, Cotton Lining",
        size: "Universal "
    },
    {
        id: 18,
        name: "Sports Shorts",
        category: "children",
        price: 22.50,
        image: "https://m.media-amazon.com/images/I/611ZJexFavL._AC_UY1000_.jpg",
        material: "90% Polyester, 10% Elastane",
        size: "Universal "
    }
];

const mockAPI = {
    getProducts: async (category = 'all') => {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (category === 'all') {
                    resolve(products);
                } else {
                    resolve(products.filter(product => product.category === category));
                }
            }, 500);
        });
    },

    authenticateUser: async (email, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email && password && email.includes('@') && password.length >= 6) {
                    resolve({
                        success: true,
                        user: {
                            id: 1,
                            email: email,
                            name: email.split('@')[0]
                        }
                    });
                } else {
                    reject({
                        success: false,
                        message: 'Invalid email or password (password must be at least 6 characters)'
                    });
                }
            }, 1000);
        });
    },

    placeOrder: async (orderData) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const orderId = 'ORD-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9).toUpperCase();
                resolve({
                    success: true,
                    orderId: orderId,
                    message: 'Order placed successfully!'
                });
            }, 1500);
        });
    }
};