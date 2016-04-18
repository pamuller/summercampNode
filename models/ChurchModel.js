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
		  var obj=req.body.church;
		 //obj.province={'@rid':obj.province};
            console.log("church:"+req.body.church);
            console.log("youthleader:"+req.body.youthleader);
           // db.insert().into('person').set(req.body.church).one()
            
			db.insert().into('church').set(req.body.church).one().then(function (church){
					  console.log(church); //an Array of records inserted
					  if (req.body.youthleader.lastname != null)
						  {
						  db.insert().into('person').set(req.body.youthleader).one().then(function (person){
							  console.log("people:"+JSON.stringify(person));
							  
									 db.query('create edge youthpaster from '+person['@rid']  +' to '+ church['@rid']
									 ).then(function (response){
									  console.log(response); //an Array of records inserted
									 
									  	//create logon user
									    var personSingle = {};
									    personSingle.name = req.body.youthleader.email;
									    personSingle.password ="password";
									   // personSingle.roles = "{'@rid':#5:2}";
									    personSingle.status = "ACTIVE";
									  
									    db.insert().into('OUser').set(personSingle).one()
										.then(function (personSingle) {
										 	res.send(church);
											//res.send(person);
										});
									  	
									  	
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
    
    
    
    

	    this.findSingle = function(res,req)
	  	  {
	    	db.let('$a',function(s){
	    		  s.select('select expand(in(\'youthpaster\')) from church where @rid=#12:36');
	    	}).let('$b',function(s){
	    		  s.select('select from church where @rid=#12:36');
	    	}).let('$c',function(c){
	    		  c.unionall('$a','$b');
	    	}).commit().return('$c')
	    	.all()
	  			.then(function (church) {
	  			  console.log('active users', church);
	  			  res.send(church);
	  		  });

 
	    	
	    	
	  		// db.query('select from church where @rid='+req.params['id'] + ' fetchplan province:1').all()
	  		/* db.select().from('church').where('@rid=#'+req.params['id']).fetch('province:1').all()
	  			.then(function (church) {
	  			  console.log('active users', church);
	  			  res.send(church);
	  		  });*/
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














