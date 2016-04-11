'use strict';
define(['angular','province'],
       function (angular) {
    angular.module('myApp.registerUserView', ['myApp.province'])
    .controller('registerUserViewCtrl', registerUserViewCtrl)
   
    


    function registerUserViewCtrl($scope,$http,provinceList) {
        
      let vm=this;
      vm.provinces=[];
      vm.parent={};
      vm.parent.contactdetails=[];
      vm.perantGardians=[];
      vm.fileList=[];
      vm.medicalinfo={};
      vm.medicalinfo.allergies=[];  
      vm.medicalinfo.histories=[];
      vm.medicalinfo.medications=[];
     
  
      //vm.provinces = provinceList.provincelist() ;
      // getProvince($http,vm);
       vm.showInstructions=true;
       getProv(vm,provinceList) ;
        
        
        
        console.log("registerUserViewCtrl");
       // vm.churches=[];
    
        

        
        
         this.getChurchListByProvince = function(province)
        {
               console.log("get Churches"); 
             var provinceSelected = province;
             var provinceid = provinceSelected['@rid'].substring(1,provinceSelected['@rid'].length)
              $http.get('/church/findByProvince/'+provinceid).success( function(churchlist) {
                vm.churchlist= churchlist;  
              });             
        }
         
         
         
        this.getUserListByChurch = function(church)
        {
               console.log("get registered users by Churches"); 
             var churchSelected = church;
             var churchid = churchSelected['@rid'].substring(1,churchSelected['@rid'].length)
              $http.get('/registeruser/findByChurch/'+churchid).success( function(registerUserlist) {
                vm.registerlist= registerUserlist;  
              });             
        } 
         
    
    
         
         
    }
    
    function getProvince($http,vm) {
        
            console.log("get Province"); 
             $http.get('/province/findAll').success( function(provinceList) {
        	   vm.provinces= provinceList;  
       });
         
      }
    
    
    
    
    function getProv(vm,provinceList) {
        
            console.log("get Province"); 
         provinceList.getPovinceList().then(function(response){
             vm.provinces = response.data;
             
         }) ;
         
      }
    
   
    
    
  


  
});



