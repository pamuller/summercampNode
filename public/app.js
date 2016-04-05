define([
    'angular',
    'jquery',
    'uiRouter',
    'modules/church/churchcreate',
    'modules/registerUser/registerUser',
    'province',
    'ngMessages',
    'angular-datatables'


], function (ng,$) {
    'use strict';

    return ng.module('myApp', [
      'ui.router','myApp.churchcreate','myApp.registerUser','myApp.province','ngMessages','datatables'
    ]);
});