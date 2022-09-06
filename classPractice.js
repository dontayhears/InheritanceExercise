// Inheritance Exercise
class person {
    constructor(race, age, hair){
        this.race = race
        this.age = age
        this.hair = hair
        this.traits = ["kind", "understanding", "hard-working"] // an array of methods
    }
}
    class PostalWorker extends person {
        constructor(race, age, hair = "orange"){ // calls the constructor function from parent
        super(race, age, hair)
        // this.race = latino
        // this.age = 35
        // this.hair = purple
        // console.log(`$`)
    }}

    class Chef extends person {
        constructor (race, age, hair) {
        super(race, age, hair)
        }
    }

let postMan = new PostalWorker("albino", 99, "grey")
console.log(postMan.race);
let postMan2 = new PostalWorker("indian", 56, "yellow")
console.log(postMan2)
let theWickedChef = new Chef("African", 33, "black")
console.log(theWickedChef)
let theUncagedChef = new Chef("spanish", 22, "dark brown")
console.log(theUncagedChef)



//====================================== Hungry for more ===============================================//

// class BankAccount {
//     constructor(ownerName, balance, acctNum){
//         this.ownerName = ownerName
//         this.balance = balance
//         this.acctNum = acctNum
//     }
// } 
// class CheckingAccount extends BankAccount {
//     constructor(ownerName, balance, acctNum){
//         super(ownerName, balance, acctNum)
//     }
// }






        
