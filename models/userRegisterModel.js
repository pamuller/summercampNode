
var db = require("../orientDBConfig.js");
//var companyuser= require("../models/CompanyUserModel");

function UserRegister() {
	  
	  this.add = function(req,res){
		  var vm = this;
		  var ii=0;
		  ii=1;
		 // db.insert().into('Company').set({companyReg: company.companyReg,organizationName:'organizationName', country: 'country', email: 'email', phoneNo: 'phoneNo', physicalAddress: 'physicalAddress', postalAddress: 'postalAddress', postalCode: '175', vatNo: 'vatNo', website: 'website'}).one()
			
		  //add person
		  var person = req.req.body.user ;
		  var church=req.req.body.church;
		  person.contactno = {'cell':person.contactno};
		  
		  db.insert().into('Person').set(person).one()
			.then(function (person) {
				console.log('created', person);
				var userid = person['@rid'];
				db.create('EDGE','churchMember').to(church['@rid'].toString()).from(userid).one()
				 .then(function(edge){
					// res.send(req.body.person);
					 console.log('created addressEdge');
					 //create edge to summercamp2016
					 db.create('EDGE','camp2016').to('#33:1').from(userid).one()
					 .then(function(edge){
						// res.send(req.body.person);
						 console.log('created addressEdge');
						 vm.addressinfo(person,req,res,vm);
					});
					 
					 
				});
				
				
				//res.send(person);
				//return company
			  
			});
		  
		  
		  //add addressinfo
		  
		  
		  //link endge church
		  
		  
		  //add parent1
		  
		  
		  //add edge parent1
		  
		  //add parent2
		//add edge parent2
		  
		//add emergancy person 1
		//add edge emergancy
		
		//add emergancy person 2
		//add edge emergancy
		  
		  
		  //add tshirt
		  
		  
		  //add transport
		  
		  
		  
		  //add medicalinfo
		  
		  
		  
		  //add medicalaidinfo
		  
		  
		  //add other
		  
		  
		 
		  
	  };
	  
	  
	  this.addressinfo = function(person,req,res,vm)
	  {
		  var addressinfo = req.req.body.addressinfo;
		 var userid = person['@rid'];
		  db.insert().into('addressinfo').set(addressinfo).one()
			.then(function (addressinfo) {
				console.log('created', addressinfo);
				 //add edge
				db.create('EDGE','addressEdge').to(addressinfo['@rid'].toString()).from(userid).one()
				 .then(function(edge){
					// res.send(req.body.person);
					 console.log('created addressEdge');
					 vm.parent1(person,req,res,vm);
				});
				
			  
			});
	  }
	  
	  
	  this.parent1 = function(person,req,res,vm)
	  {
		  var parent1 = req.req.body.parent1;
		  var userid = person['@rid'];
		  db.insert().into('person').set(parent1).one()
			.then(function (parent1) {
				console.log('created', parent1);
				//res.send(person);
				
				db.create('EDGE','parent').set({relation:parent1.relation}).to(parent1['@rid'].toString()).from(userid).one()
				 .then(function(edge){
					// res.send(req.body.person);
					 console.log('created addressEdge');
					 vm.parent2(person,req,res,vm);
				});
				
				
			  
			});
	  }
	  
	  this.parent2 = function(person,req,res,vm)
	  {
		  var parent2 = req.req.body.parent2;
		  var userid = person['@rid'];
		  db.insert().into('person').set(parent2).one()
			.then(function (parent2) {
				console.log('created', parent2);
				//res.send(person);
				//return company
				db.create('EDGE','parent').set({relation:parent2.relation}).to(parent2['@rid'].toString()).from(userid).one()
				 .then(function(edge){
					// res.send(req.body.person);
					 console.log('created addressEdge');
					// vm.tshirt(person,req,res,vm);
					 vm.emergancy1(person,req,res,vm);
					 
				});		
			});
	  }
	  
	  this.emergancy1 = function(person,req,res,vm)
	  {
		  var emergancy1 = req.req.body.emergency1;
		  var userid = person['@rid'];
		  db.insert().into('person').set(emergancy1).one()
			.then(function (emergancy1) {
				console.log('created', emergancy1);
				//res.send(person);
				//return company
				db.create('EDGE','EmergencyContact').to(emergancy1['@rid'].toString()).from(userid).one()
				 .then(function(edge){
					// res.send(req.body.person);
					 console.log('created addressEdge');
					 vm.emergancy2(person,req,res,vm);
				});	
				
			});
	  }
	  
	  this.emergancy2 = function(person,req,res,vm)
	  {
		  var emergancy2 = req.req.body.emergency2;
		  var userid = person['@rid'];
		  db.insert().into('person').set(emergancy2).one()
			.then(function (emergancy2) {
				console.log('created', emergancy2);
				//res.send(person);
				//return company
				
				db.create('EDGE','EmergencyContact').to(emergancy2['@rid'].toString()).from(userid).one()
				 .then(function(edge){
					// res.send(req.body.person);
					 console.log('created addressEdge');
					 vm.tshirt(person,req,res,vm);
				});	
			  
			});
	  }
	  
	  
	  
	  //add tshirt
	  this.tshirt = function(person,req,res,vm)
	  {
		  var tshirt = req.req.body.tshirt;
		  var userid = person['@rid'];
		  db.insert().into('tshirt').set(tshirt).one()
			.then(function (tshirt) {
				console.log('created', tshirt);
				//res.send(person);
				//return company
				db.create('EDGE','tshirtEdge').to(tshirt['@rid'].toString()).from(userid).one()
				 .then(function(edge){
					// res.send(req.body.person);
					 console.log('created tshirtEdge');
					 vm.transport(person,req,res,vm);
				});	
			});
	  }
	  
	  //add transport
	  
	  this.transport = function(person,req,res,vm)
	  {
		  var transport = req.req.body.transport;
		  var userid  = person['@rid'];
		  db.insert().into('TransportUser').set(transport).one()
			.then(function (transport) {
				console.log('created', transport);
				//res.send(person);
				//return company
				db.create('EDGE','transportEdge').to(transport['@rid'].toString()).from(userid).one()
				 .then(function(edge){
					// res.send(req.body.person);
					 console.log('created transportEdge');
					 vm.medicalinfo(person,req,res,vm);
				});	
				
				
			});
	  }
	  
	  //add medicalinfo
	  this.medicalinfo = function(person,req,res,vm)
	  {
		  var medicalinfo = req.req.body.medicalinfo;
		  var userid  = person['@rid'];
		  db.insert().into('medicalinfo').set(medicalinfo).one()
			.then(function (medicalinfo) {
				console.log('created', medicalinfo);
				//res.send(person);
				//return company
				db.create('EDGE','medicalInfoEdge').to(medicalinfo['@rid'].toString()).from(userid).one()
				 .then(function(edge){
					// res.send(req.body.person);
					 console.log('created medicalInfoEdge');
					 vm.medicalaidinfo(person,req,res,vm);
				});	
				
			});
	  }
	  
	  
	  //add medicalaidinfo
	  this.medicalaidinfo = function(person,req,res,vm)
	  {
		  var medicalaidinfo = req.req.body.medicalaidinfo;
		  var userid  = person['@rid'];
		  db.insert().into('MedicalAidInformation').set(medicalaidinfo).one()
			.then(function (medicalaidinfo) {
				console.log('created', medicalaidinfo);
				//res.send(person);
				//return company
				db.create('EDGE','medicalaidinfoEdge').to(medicalaidinfo['@rid'].toString()).from(userid).one()
				 .then(function(edge){
					// res.send(req.body.person);
					 console.log('created medicalaidinfoEdge');
					 vm.otherinfo(person,req,res,vm);
				});	
				
			});
	  }
	  
	  //add other
	  
	  this.otherinfo = function(person,req,res,vm)
	  {
		  var otherinfo = req.req.body.otherinfo;
		  var userid = person['@rid'];
		  db.insert().into('otherinfo').set(otherinfo).one()
			.then(function (otherinfo) {
				console.log('created', otherinfo);
				//res.send(person);
				//return company
				db.create('EDGE','otherEdge').to(otherinfo['@rid'].toString()).from(userid).one()
				 .then(function(edge){
					// res.send(req.body.person);
					 //console.log('created otherEdge');
					 res.res.send(person);

				});	
				
			});
	  }
	  

	  this.addPerson = function(res,req,personSingle,obj){
		  var ii=0;
		  ii=1;
		  //var personSingle = {};
		 // db.insert().into('Company').set({companyReg: company.companyReg,organizationName:'organizationName', country: 'country', email: 'email', phoneNo: 'phoneNo', physicalAddress: 'physicalAddress', postalAddress: 'postalAddress', postalCode: '175', vatNo: 'vatNo', website: 'website'}).one()
			
		  db.insert().into('OUser').set(personSingle).one()
			.then(function (personSingle) {
				
				console.log('created addPerson', personSingle);
				obj.addCompanyUser(req.body.company,personSingle);
				res.send(personSingle);
				//res.send(person);
			},function(reason){
				console.log("Error Reason:"+reason);
				
			});
		  
		  //return personSingle;
	  };
	  
	  
	  
	  this.findall = function(res)
	  {
		  db.select().from('OUser').all()
			.then(function (persons) {
			  console.log('active users', persons);
			  res.send(persons);
		  });
	  };

}




var userRegister = new UserRegister();

module.exports = userRegister;



