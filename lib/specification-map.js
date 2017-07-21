module.exports = {
    common: {
        Category :'Enhanced Ecommerce', 
        Value: 0 
    },

    specific: [

        {
            incomingEventName: 'Product Viewed',
            Label: 'Product Detail View',
            noninteraction: true,
            event: 'eeEvent',  
            Action: 'Browse' 
        },
        {
            incomingEventName: 'Product Added',
            Label: 'Product Add to Cart',
            noninteraction: false,
            event: 'eeCart',  
            Action: 'Browse' 
        },
        {
            incomingEventName: 'Product Removed',
            Label: 'Product Add to Cart',
            noninteraction: false,
            event: 'eeCart',  
            Action: 'Browse' 
        },
        {
            incomingEventName: 'Checkout Step',
            Label: '<step>',
            noninteraction: true,
            event: 'eeCheckout',  
            Action: 'Checkout' 
        },
        {
            incomingEventName: 'Order Completed',
            Label: 'Purchase',
            noninteraction: true,
            event: 'eepurchase',  
            Action: 'Checkout' 
        }
             
    ]

};
