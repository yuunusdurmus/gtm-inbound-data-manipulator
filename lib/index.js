var specificationMap = require('./specification-map');

var objectMapper = function(obj, base) {
    Object.keys(obj).forEach(function(item){
        base[item] = obj[item];
    })

    return base;
}

module.exports = {
    get: function(data, eventName) {
        
        specificationMap.specific.forEach(function(item){
            if(item.incomingEventName == eventName){
                objectMapper(specificationMap.common, data);
                objectMapper(item, data);
            }
        })
    
        return data;
    }

}
