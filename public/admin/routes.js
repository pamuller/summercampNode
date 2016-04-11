define(['./app'], function(app) {
    'use strict';
    return app.config(function($stateProvider) {
        $stateProvider.state('churchState',{
            url: '/church',
            templateUrl: 'modules/church/churchcreate.html',
            controller:'ChurchCtrl'
        }),
       $stateProvider.state('registerUserViewState',{
            url: '/registerView',
            templateUrl: 'modules/registerUserView/registerUserView.html',
            controller:'registerUserViewCtrl'
        })
    })
});