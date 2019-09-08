mainApp.service('customServices', ['$q', '$timeout', function(tmt, q){
    this.delayedResponse = function(nm){
        return new Promise(function(resolve, reject){
            tmt(function(){
                switch (nm){
                    case 'Clark Kent':
                        return resolve('Welcome to Cansas, Superman');
                        break;
                    case 'Steve Rogers':
                        return ('Welcome to Brooklyne, Cap');
                        break;
                    default:
                        return ('Welcome to Knowhere, Thor');
                }
            }, 1000);
        });
    };
}]);
