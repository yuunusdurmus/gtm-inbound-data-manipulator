var specificationMap = require('./specification-map');

var objectMapper = function(obj, base) {
    Object.keys(obj).forEach(function(item){
        base[item] = obj[item];
    })

    return base;
}

module.exports = {
    userTransform: function(data) {
        var obj = {};

        specificationMap.userMap.forEach(function(item) {
            Object.keys(data).forEach(function(key){
                if(key == item.inCommingName) {
                    obj[item.pushingName] = data[key];
                }
            })
        })
        return obj;
    },

    transform: function(data, eventName) {
        specificationMap.specific.forEach(function(item){
            if(item.incomingEventName == eventName) {
                objectMapper(specificationMap.common, data);
                objectMapper(item.params, data);
            }
        })

        if(data.ecommerce.hasOwnProperty('checkout')) {
            specificationMap.checkoutStep.forEach(function(item){
                if(data.ecommerce.checkout.actionField.step == item.stepNumber) {
                    data.label = item.stepName;
                }
            });
        }

        return data;
    }
}
