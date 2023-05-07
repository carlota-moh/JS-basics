// Create an object with street, city and zipCode

// create a function called showAddress that displays these
// properties, along with their value

// a. Using factory function

function createLocation(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

// b. Using constructor function

function Location(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
    
    this.showAddress = function() {console.log(Object.entries(this));}

}

const newLocation = new Location('C/ Armonia', 'Madrid', 28042);

//newLocation.showAddress()

const newLocation1 = createLocation('C/ Armonia', 'Madrid', 28042);
console.log(newLocation1);

// Object equality

// Use the previous constructor function to create two location
// objects

const location1 = createLocation('C/ Armonia', 'Madrid', 28042);
const location2 = createLocation('C/ Armonia', 'Madrid', 28042);

// create a new function that checks whether they are equal (i.e.: they have the same entries)

function equalAdress(loc1, loc2) {
    return loc1.street === loc2.street &&
    loc1.city === loc2.city &&
    loc1.zipCode === loc2.zipCode

}

// create another function that checks whether they are the same (i.e.: they point to the same memory location)

function sameAddress(loc1, loc2) {
    return loc1 === loc2;
}

console.log(sameAdress(location1, location2))


// Create a blog post entry. Note that the entry is not live yet!
// the fields required include: title, body, author, views, comments, isLive

function BlogPost(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

// create onstructor for price range objects

function PriceRange(label, tooltip, minPrice, maxPrice) {
    this.label = label;
    this.tooltip = tooltip;
    this.minPrice = minPrice;
    this.maxPrice = maxPrice;
    this.restaurants = [];
    this.isClicked = false;
}