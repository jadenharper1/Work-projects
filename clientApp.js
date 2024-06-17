// constuctor that initiates new client objects
function createNewProspect() {
    let prospectFirstName = document.getElementById("firstNameId").value
    let prospectLastName = document.getElementById("lastNameId").value
    let prospectAge = document.getElementById("ageId").value
    let prospectPhone = document.getElementById("phoneId").value
    let prospectAddress = document.getElementById("addressId").value

    Jaden = new client (prospectFirstName, prospectLastName, prospectAge, prospectPhone, prospectAddress)
console.log(Jaden.getFName()+ " " + Jaden.getAddress())}



function client (firstName, lastName, age, phone, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.phone = phone;
    this.address = address
}

client.prototype.getFName = function(){
    return this.firstName;
}
client.prototype.getLName = function(){
    return this.lastName;
}
    client.prototype.getPhone = function(){
        return this.phone;
    }
    client.prototype.getAddress = function () {
        return this.address
    }
Josh = new client ("Josh", "Kling", 36, 2089876789, "12345 n star rd, star, id 87654")


console.log(Josh.getFName() + " " + Josh.getLName() + " has a phone number of " + Josh.getPhone() + " and an address of " + Josh.getAddress() )

// this will be for the helpful hints section:

function showHelp(hint){
document.getElementById("hintsId").innerHTML = hint.hintMessage;
}

function setUpHelp() {
var helpfulHints = [
    {id: "firstNameId", hintMessage: "Please type in your legal first name"},
    {id: "lastNameId", hintMessage: "Please type in your legal last name"},
    {id: "phoneId", hintMessage: "Please type in your primary phone number"},
    {id: "emailId", hintMessage: "Please type in your primary email"},
    {id: "cityId", hintMessage: "Please type in the city where your project is located"},
    {id: "stateId", hintMessage: "Please type in the state where your project is located"},
    {id: "zipcodeId", hintMessage: "Please type in the zipcode where your project is located"},
    {id: "streetAddressId", hintMessage: "Please type in the street address where your project is located"}
]
    
for (var i=0; i<helpfulHints.length; i++)
{
    var hint = helpfulHints[i];
    document.getElementById(helpfulHints[i].id).onfocus = helpCallback(hint);
}

}

function helpCallback(hint)
{
return function(){
showHelp(hint);
}
}