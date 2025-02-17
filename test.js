const users = [
    {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        gender: "male"
    },
    {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female"
    },
    {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male"
    },
    {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female"
    },
    {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
        isActive: true,
        balance: 3951,
        gender: "male"
    },
    {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
        isActive: false,
        balance: 1498,
        gender: "male"
    },
    {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        gender: "female"
    }
]

    //Доповни функцію getSortedFriends(users) таким чином, щоб вона повертала масив унікальних імен друзів(властивість friends), відсортований за алфавітом.
// const us = users.map(user => user.friends);
// console.log(us)
//     .filter((friend, index, array) => array.indexOf(friend) === index)
//     .toSorted((a, b) => a.localeCompare(b));


// Доповни функцію getTotalBalanceByGender(users, gender) таким чином, щоб вона повертала загальний баланс користувачів(властивість balance), стать яких(властивість gender) збігається зі значенням параметра gender.
// const getTotalBalanceByGender = (users, gender) => {
    
//     console.log(users.map(user => user.gender === gender))
// };
// users
// .map(user => user.gender)
//     .filter(user => user.gender === gender)
//     .toSorted((a, b) => a.localeCompare(b));



const getTotalBalanceByGender = (users, gender) => {
return users
    .filter(user => user.gender === gender)
    .map(user => user.balance)
    .sort((a, b) => a - b);
};

console.log(getTotalBalanceByGender(users, "male"));

class Admin extends User {
  // Change code below this line
  constructor ({email, accessLevel}) {
     super({email});
    }
   static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  }
  
  } 



class User {
    email;

    constructor(email) {
        this.email = email;
    }

    get email() {
        return this.email;
    }

    set email(newEmail) {
        this.email = newEmail;
    }
}
class Admin extends User {
    // Change code below this line

    static AccessLevel = {
        BASIC: "basic",
        SUPERUSER: "superuser",
    };

    constructor({ email, accessLevel }) {
        super(email);
        this.accessLevel = accessLevel;
    }
    blacklistedEmails = [];
    blacklist(email) {
        blacklistedEmails.push(email);
    }
    isBlacklisted(email) {
        if (blacklistedEmails.includes(email))
       { return true }
        else { return false; }

    }

    // Change code above this line
}

const mango = new Admin({
    email: "mango@mail.com",
    accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true
