//es6


class User{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUppercase()}`
    }

}


const coffe = new User("damoen","sajdksadkasjd","123")
console.log(coffe.encryptPassword());
console.log(coffe.changeusername());

//in inheritance we use extends keyword
//static stops property access 