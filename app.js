var mainApp = angular.module("main_app", []);

mainApp.config(['customProviderProvider', function(custProvdr){
    custProvdr.initialize('http://localhost:3000/');
}]);

mainApp.run(["$rootScope", function(rscp){
    rscp.taxPercent = 12;
}]);

mainApp.controller("controller_1", ["$scope", "$log", "customFactories", "customServices", "customProvider",
                                    function(scp, lg, cFact, cServ, cProvd){
    scp.name = "Clark Kent";
    scp.htmlResponse = 'Empty section';
    scp.inputA_Function = () => { console.log('Input A exists in DOM'); };
    scp.inputB_Function = () => { console.log('Input B exists in DOM'); };
    scp.asyncCall = function(){
        cProvd.call_server(scp.name)
        .then(function(res){
            scp.htmlResponse = res.data;
        }, function(rej){
            lg.error('Error at service call: ',rej);
        });

        // scp.htmlResponse = cServ.delayedResponse(scp.name);

        /*cServ.delayedResponse(scp.name)
        .then(function(res){
            scp.htmlResponse = res;
        }, function(rej){
            scp.htmlResponse = 'Empty section';
        });*/
    }
}]);

mainApp.controller("controller_2", ["$scope", function(scp){
    scp.sal = 30000;
    scp.post = "Photographer";
}]);

mainApp.controller("controller_3", ["$scope", "$rootScope", "$log", "$filter", function(scp, rscp, lg, filter){
    scp.taxPercent = 15;
    scp.phone = 8834343218;
    scp.phone_modified = null;
    scp.getNetSal = function(){
        return filter('number')((scp.sal - (scp.sal * scp.taxPercent / 100)), 2);
    };
    scp.modifyPhone = () => {
        debugger;
        scp.phone = Number(scp.phone_modified);
        scp.phone += parseInt(scp.phone_modified);
        lg.warn('Modified phone is ', scp.phone);
    }
}]);
