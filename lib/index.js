var specificationMap = require('./specification-map');

var objectMapper = function(obj, base) {
    Object.keys(obj).forEach(function(item) {
        base[item] = obj[item];
    })

    return base;
}

module.exports = {
    transform: function(data, eventName) {
        if(eventName == 'Registration Completed') {
            return data;
        }

        specificationMap.specific.forEach(function(item) {
            if(item.incomingEventName == eventName) {
                objectMapper(specificationMap.common, data);
                objectMapper(item.params, data);
                if(eventName == 'Product List Viewed') {
                    data.ecommerce.impressions.forEach(function(pro) {
                        pro.list = window.location.pathname.split('/')[1];
                    })
                }
            }
        })

        if(data.ecommerce.hasOwnProperty('checkout')) {
            specificationMap.checkoutStep.forEach(function(item) {
                if(data.ecommerce.checkout.actionField.step == item.stepNumber) {
                    data.label = item.stepName;
                }
            });
        }

        if(eventName == 'Product Viewed') {
            var referrer = document.referrer;
            if(referrer.search('/') >= 0) {
                var url = new URL(document.referrer);
                data.ecommerce.detail.actionField = {
                    list: url.pathname.split('/')[1]
                }
            }
        }

        return data;
    }
}
