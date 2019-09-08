mainApp.factory('customFactories', ['$http', '$q', function(ht, q){
    var factoryObj = {};
    factoryObj.call_server = function(name){
        console.warn('making an Async request...');
        return ht({
                    url: "http://localhost:3000/GetResponse/"+name,
                    method: "GET"
                }).then(function(res){
                    return q.resolve(res);
                }, function(err){
                    return q.reject(err);
                });
    }
    return factoryObj;
}]);
