define(['./app'], function(app) {
    'use strict';
    return app.config(function($stateProvider) {
        $stateProvider.state('churchState',{
            url: '/church',
            templateUrl: 'modules/church/churchcreate.html',
            controller:'ChurchCtrl'
        }),
       $stateProvider.state('registerUserState',{
            url: '/register',
            templateUrl: 'modules/registerUser/registerUser.html',
            controller:'registerUserCtrl'
        }),
       $stateProvider.state('registerUserState2',{
            url: '/register2',
            templateUrl: 'modules/registerUser/registerUser2.html',
            controller:'registerUserCtrl'
        })
        
    })
});