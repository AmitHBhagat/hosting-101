mainApp.provider('customProvider', [function(){
    var baseURL = '';

    this.initialize = function(url){
        baseURL = url;
    };

    this.$get = ['$http', '$q', function(ht, q){
        var providerObj = {};
        providerObj.call_server = function(name){
            return ht({
                        url: baseURL + "GetResponse/"+name,
                        method: "GET"
                    }).then(function(res){
                        return q.resolve(res);
                    }, function(err){
                        return q.reject(err);
                    });
        };
        return providerObj;
    }];
}]);
