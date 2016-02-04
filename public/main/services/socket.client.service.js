angular.module('main').service('Socket', ['$timeout', 'Authentication', function($timeout, Authentication){
    this.socket = io();
    
    this.on = function(eventName, callback) {
        if(this.socket){
            this.socket.on(eventName, function(data){
                $timeout(function() {
                    callback(data);
                }); 
            });
        }
    };
    
    this.emit = function(eventName, data){
        if(this.socket){
            this.socket.emit(eventName, data);
        }  
    };
    
    this.removeListener = function(eventName){
        if(this.socket){
            this.socket.removeListener(eventName);
        }  
    };
}]);