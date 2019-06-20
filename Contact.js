function Contact (first_name, second_name, phone_number, email)
{
	this.first_name = first_name;
	this.second_name = second_name;
	this.phone_number = phone_number;
	this.email = email;
	this.address={street:'street', city:'city', country:'country'};

	
};

var denis = new Contact('Denis', 'Kisina', '0777005155', 'kisinad@gmail.com')
Contact.prototype.fullName = function ()
{
	console.log (this.first_name +', ' +this.second_name+' '+this.phone_number);
};
denis.fullName();