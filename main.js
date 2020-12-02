const app = new Vue({
    el: '#root',
    data: {
        navVoices: [
            {
                name: 'Home',
                link: '#',
                hasDropdown: true
            },
            {
                name: 'Shop',
                link: '#',
                hasDropdown: true
            },
            {
                name: 'About',
                link: '#',
                hasDropdown: false
            },
            {
                name: 'Blog',
                link: '#',
                hasDropdown: false
            },
            {
                name: 'Contact',
                link: '#',
                hasDropdown: false
            },
            {
                name: 'Shop by brand',
                link: '#',
                hasDropdown: true
            },
        ],
        activeNavVoice: 0,
        hasDiscount: true,
        // Dovrebbe essere un dato preso da un database con tutti i prodotti dell'e-commerce
        products: [
            {
                name: 'colored pet bed',
                category: 'Bed',
                image: 'product-8',
                price: {
                    minPrice: 18.00,
                    maxPrice: 26.00,
                    newPrice: null
                },
                newProduct: true,
                bestProduct: false,
                sale: false
            },
            {
                name: 'Colorful ball set',
                category: 'Toys',
                image: 'product-2',
                price: {
                    minPrice: 29.00,
                    maxPrice: 29.00,
                    newPrice: null
                },
                newProduct: true,
                bestProduct: false,
                sale: false
            },
            {
                name: 'Dog bone',
                category: 'Food',
                image: 'product-3',
                price: {
                    minPrice: 29.00,
                    maxPrice: 29.00,
                    newPrice: 18.00
                },
                newProduct: true,
                bestProduct: false,
                sale: true
            },
            {
                name: 'Animal transport bag',
                category: 'Transport',
                image: 'product-4',
                price: {
                    minPrice: 29.00,
                    maxPrice: 29.00,
                    newPrice: null
                },
                newProduct: true,
                bestProduct: false,
                sale: false
            },
            {
                name: 'Animal transport cage',
                category: 'Transport',
                image: 'product-5',
                price: {
                    minPrice: 35.00,
                    maxPrice: 35.00,
                    newPrice: null
                },
                newProduct: true,
                bestProduct: false,
                sale: false
            },
            {
                name: 'Closable cat litter',
                category: 'Transport',
                image: 'product-10',
                price: {
                    minPrice: 16.00,
                    maxPrice: 16.00,
                    newPrice: null
                },
                newProduct: true,
                bestProduct: false,
                sale: false
            },
            {
                name: 'Transport cage',
                category: 'Transport',
                image: 'product-21',
                price: {
                    minPrice: 25.00,
                    maxPrice: 25.00,
                    newPrice: null
                },
                newProduct: false,
                bestProduct: true,
                sale: false
            },
            {
                name: 'Dog leash',
                category: 'Transport',
                image: 'product-20',
                price: {
                    minPrice: 25.00,
                    maxPrice: 25.00,
                    newPrice: null
                },
                newProduct: false,
                bestProduct: true,
                sale: false
            },
            {
                name: 'Animal transport cage',
                category: 'Transport',
                image: 'product-16',
                price: {
                    minPrice: 35.00,
                    maxPrice: 35.00,
                    newPrice: 25.00
                },
                newProduct: false,
                bestProduct: true,
                sale: true
            },
            {
                name: 'Colorful cat leash',
                category: 'Transport',
                image: 'product-11',
                price: {
                    minPrice: 12.00,
                    maxPrice: 12.00,
                    newPrice: null
                },
                newProduct: false,
                bestProduct: true,
                sale: false
            },
        ],
        last4BlogPosts: [
            {
                image: 'blog-1',
                head: "How to 'loose leash walk' your dog",
                body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                date: 'april 21st, 2020'
            },
            {
                image: 'blog-2',
                head: 'Stops cats from scratching furniture',
                body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                date: 'april 19th, 2020'
            },
            {
                image: 'blog-3',
                head: 'Where to buy the best pet food',
                body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                date: 'april 18th, 2020'
            },
            {
                image: 'blog-4',
                head: 'Proper care for your pet toys',
                body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                date: 'April 17th, 2020'
            },
        ]
    },
    methods: {
        getNavVoiceClasses(index) {
            let classes = ''

            if(index == this.activeNavVoice) {
                classes = 'active';
            }

            if(this.navVoices[index].hasDropdown) {
                classes += ' dropdown';
            }

            return classes;
        },
        getCategories() {
            let listCategories = [];
            this.products.forEach(product => {
                if (!listCategories.includes(product.category)) {
                    listCategories.push(product.category);
                }
            });
            listCategories.forEach((category, index) => {
                let filteredProducts = this.products.filter(product => product.category == category);
                Vue.set(listCategories, index, {
                    name: category,
                    productsQuantity: filteredProducts.length,
                    image: filteredProducts[0].image
                });
            });
            return listCategories;
        },
        getBestProducts() {
            return this.products.filter(product => product.bestProduct);
        },
        getNewProducts() {
            return this.products.filter(product => product.newProduct);
        }
    }
});
