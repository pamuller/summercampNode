define([
    'angular',
    'jquery',
    'uiRouter',
    'modules/church/churchcreate',
    'modules/registerUserView/registerUserView',
    'province',
    'ngMessages',
    'angular-datatables'


], function (ng,$) {
    'use strict';

    return ng.module('myApp', [
      'ui.router','myApp.churchcreate','myApp.registerUserView','myApp.province','ngMessages','datatables'
    ]);
});