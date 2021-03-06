module.exports = {
    common: {
        Category :'Enhanced Ecommerce', 
        Value: 0 
    },

    checkoutStep: [
        {
            stepNumber: 1,
            stepName: 'Sepet'
        },
        {
            stepNumber: 2,
            stepName: 'Login'
        },
        {
            stepNumber: 3,
            stepName: 'Adres'
        },
        {
            stepNumber: 4,
            stepName: 'Ödeme'
        }
    ],

    specific: [
        {
            incomingEventName: 'Product Viewed',
            params: {
                Label: 'Product Detail View',
                noninteraction: true,
                event: 'eeEvent',
                Action: 'Browse'
            }
        },
        {
            incomingEventName: 'Product Added',
            params: {
                Label: 'Product Add to Cart',
                noninteraction: false,
                event: 'eeCart',
                Action: 'Browse'
            }
        },
        {
            incomingEventName: 'Product Removed',
            params: {
                Label: 'Product Remove from Cart',
                noninteraction: false,
                event: 'eeCart',
                Action: 'Browse'
            }
        },
        {
            incomingEventName: 'Checkout Step Viewed',
            params: {
                noninteraction: true,
                event: 'eeCheckout',
                Action: 'Checkout'
            }
        },
        {
            incomingEventName: 'Cart Viewed',
            params: {
                noninteraction: true,
                event: 'eeCheckout',
                Action: 'Checkout'
            }
        },
        {
            incomingEventName: 'Order Completed',
            params: {
                Label: 'Purchase',
                noninteraction: true,
                event: 'eepurchase',
                Action: 'Checkout'
            }
        },
        {
            incomingEventName: 'Product List Viewed',
            params: {
                Label: 'Product Impressions',
                noninteraction: true,
                event: 'eeEvent',
                Action: 'Browse'
            }
        },
        {
            incomingEventName: 'Product List Filtered',
            params: {
                Label: 'Product Impressions',
                noninteraction: true,
                event: 'eeEvent',
                Action: 'Browse'
            }
        },
        {
            incomingEventName: 'Product Clicked',
            params: {
                Label: 'Product Click',
                noninteraction: false,
                event: 'eeEvent',
                Action: 'Browse'
            }
        },
        {
            incomingEventName: 'Promotion Viewed',
            params: {
                Label: 'Promotion Impressions',
                noninteraction: true,
                event: 'eeEvent',
                Action: 'Browse'
            }
        },
        {
            incomingEventName: 'Promotion Clicked',
            params: {
                Label: 'Promotion Click',
                noninteraction: true,
                event: 'eeEvent',
                Action: 'Browse'
            }
        }
    ]
};
