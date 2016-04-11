define(['./app'], function(app) {
    'use strict';
    return app.config(function($stateProvider) {      
       $stateProvider.state('registerUserState',{
            url: '/register',
            templateUrl: 'modules/registerUser/registerUser.html',
            controller:'registerUserCtrl'
        })
       
        
    })
});