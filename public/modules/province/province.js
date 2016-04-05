'use strict';
define(['angular'],
       function (angular) {
   angular.module('myApp.province', [])
    .controller('provinceCtrl', provinceCtrl)
    .factory('provinceList', provinceList);
    
    
    function provinceList($http)
    {
        
      var provincelist = {};
        
      provincelist.getPovinceList = function () {
        return $http.get('http://localhost:3000/province/findall');
      }; 
      return provincelist;   

        
    }


    function provinceCtrl($scope,$http) {
        let vm=this;
        console.log("provinceCtrl");
        
       
        
       // vm.churches=[];
        this.findall = function()
        {
            console.log("add");
            console.log(this.church);
             $http.get('http://localhost:3000/province/findall').success( function(provinceList) {
        	   vm.provinces = provinceList;

           });
        }

    }
    
    
     


});