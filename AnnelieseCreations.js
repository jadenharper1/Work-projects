// function bags (price, size, color) {
//     this.price = price;
//     this.size = size;
//     this.color = color;
// }
// var fashionBlueBag =  new bags(25 ,"medium", "blue");
// var fashionRedBag =  new bags(29.99 ,"large", "red");
// var fashionBrownBag =  new bags(19.99 ,"small", "brown");












// function displayBagPrice(){
// let displayPrice = document.getElementById("bagDivId")
// displayPrice.innerHTML = ""
// for( let i=0; i < bags.length; i = i + 1) {
// displayPrice.innerHTML = displayPrice.innerHTML + bags.price[i]}
// }

let bags = {
size: "small",
color: "brown",
price:  25,
getSize: function(){
    return this.size;
},
getColor:  function(){
    return this.color
},
getPrice: function() {
    return this.price
}
}

let stuffedAnimals = {
    pet: "dog",
    color: "purple",
    size: "large",
    getAnimal: function(){
        return this.pet;
    },
    getTint: function(){
        return this.color
    },
    getSize: function(){
        return this.size
    }
}
stuffedAnimals.pet = "cat"

console.log("this is a " + stuffedAnimals.getSize() + ", " + stuffedAnimals.getTint() + " " +  stuffedAnimals.getAnimal())

console.log("hello, I am a " + bags.getColor() + bags.getPrice() + " dollor, " + bags.getSize() + " bag")


let bracelets = {}
bracelets.color = "red"
bracelets.size = "small"

console.log(bracelets.color)


