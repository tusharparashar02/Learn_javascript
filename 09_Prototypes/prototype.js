let myHeros = ["ironman", "thor"]

let heroPower = {
    thor: "hammer",
    ironman: "robot",

    getthorPower: function(){
        console.log(`thor power is ${this.thor}`);
    }
}
Object.prototype.tushar = function(){
        console.log(`tushar is present in all objects`);
}
Array.prototype.tusharParashar = function(){
    console.log(`power in the array`);
}
myHeros.tushar();
myHeros.tusharParashar()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)