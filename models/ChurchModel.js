"use strict";
var db = require("../orientDBConfig.js");

function Church() {
	
	  
	  this.add = function(res,req){
		  var ii=0;
		  ii=1;
		 // db.insert().into('Company').set({companyReg: company.companyReg,organizationName:'organizationName', country: 'country', email: 'email', phoneNo: 'phoneNo', physicalAddress: 'physicalAddress', postalAddress: 'postalAddress', postalCode: '175', vatNo: 'vatNo', website: 'website'}).one()
			
		 /* db.insert().into('Company').set(req.body.company).one()
			.then(function (company) {
				console.log('created', company);
				res.send(company);
			
				//return company
			  
			})*/
		  var obj=req.body;
		 //obj.province={'@rid':obj.province};
		  
			db.query('insert into church (churchname,province,address,churchcontactno) values (\''+obj.churchname+'\','+obj.province['@rid']+',\''+obj.address+'\',\''+obj.churchcontactno+'\')'
					 ).then(function (church){
					  console.log(church); //an Array of records inserted
					  if (obj.youthleaderName != null)
						  {
							  db.query('insert into person (firstname,lastname,contactno,email,password,name,status) values (\''+obj.youthleaderName+'\',\''+obj.youthleaderSurname+'\',\''+obj.youthleadercell+'\',\''+obj.youthleaderemail+'\',\'password\',\''+obj.youthleaderemail+'\',\'false\')'
								 ).then(function (people){
								 
									 db.query('create edge youthpaster from '+people[0]['@rid']  +' to '+ church[0]['@rid']
									 ).then(function (response){
									  console.log(response); //an Array of records inserted
									  	res.send(church);
									}); 
								});
						  }else
							  {
							  //get full church info from db
							  res.send(church);
							  }
				 			
					});
		  
		  
		  
		  
		    /* db.insert().into('church').set(obj).one()
			.then(function (church) {
				console.log('created', church);
				return church;
				//return company
			  
			}).then(function(church)
			{
				res.send(church);
			});
	       */
		  
		  
	  };
	  
	  
	  
	  this.update = function(res,req){
		  var ii=0;
		  ii=1;
		 // db.insert().into('Company').set({companyReg: company.companyReg,organizationName:'organizationName', country: 'country', email: 'email', phoneNo: 'phoneNo', physicalAddress: 'physicalAddress', postalAddress: 'postalAddress', postalCode: '175', vatNo: 'vatNo', website: 'website'}).one()
			
		  console.log("reg.body:"+req.body);
			var idd = req.body['@rid'];
			console.log("idd:"+idd);
			//delete req.body['@rid'];
			//db.query('insert into church (churchname, address, youthleaderName,province,youthleaderemail,youthleadercell,churchcontactno,youthleaderSurname) values (:name, :password, :status
			var obj=req.body;
			var updateString ='churchname = \''+obj.churchname+'\', address = \''+obj.address+'\', churchcontactno = \''+obj.churchcontactno+'\' ,province = '+obj.province['@rid'];
			console.log("updateString:"+updateString);
			db.update('Church').set(updateString).where('@rid = "'+idd+'"').scalar()
				.then(function (total) {
				  console.log('updated', total, 'users');
				  res.send('updated', total, 'users');
				});
			
			
		
		  
		  /*
		     db.insert().into('Company').set(req.body).one()
			.then(function (company) {
				console.log('created', company);
				return company;
				//return company
			  
			}).then(function(company){
				
				agent.addCompanyAgent(company,req.body.person);
				
			}).then(function()
			{
				res.send("Done");
			});
	
		   */
		  
	  };
	  
	  
	  this.deleteRecord = function(res,req){
		  var ii=0;
		  ii=1;
		 // db.insert().into('Company').set({companyReg: company.companyReg,organizationName:'organizationName', country: 'country', email: 'email', phoneNo: 'phoneNo', physicalAddress: 'physicalAddress', postalAddress: 'postalAddress', postalCode: '175', vatNo: 'vatNo', website: 'website'}).one()
			
			console.log("reg.body:"+req.params.id);
			
			db.delete('VERTEX').from('church')
			.where('@rid = #'+req.params.id)
			.one()
			.then(function (total) {
			  console.log('deleted', total, 'church');
			  res.send('Deleted '+total + ' records');
			});
		  
		  
		  
	  };
	  
	  
	  this.find = function(res,req)
	  {		
		// db.query('select from church where @rid='+req.params['id'] + ' fetchplan province:1').all()
		 db.select().from('church').where('province='+req.params['id']).fetch('province:1').all()
			.then(function (church) {
			  console.log('active users', church);
			  res.send(church);
		  });
	  };
	  
	  
	  
	  this.findall = function(res,req)
	  {		
		  //db.query('select from church fetchplan *:1' ).all()
		db.select().from('church').fetch('province:1').all()
			.then(function (church) {
			  console.log('active users', church);
			  res.send(church);
		  });
	  };
	  
	
	  
	  
	  
	  
  
}

var church = new Church();

module.exports = church;














