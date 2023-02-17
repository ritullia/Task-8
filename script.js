/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(numOne, numTwo) {
    this.numOne = numOne;
    this.numTwo = numTwo;

    this.sum = function () {
        console.log(`${this.numOne + this.numTwo}`);
    }
    this.subtraction = function () {
        console.log(`${this.numOne - this.numTwo}`);
    }
    this.multiplication = function () {
        console.log(`${this.numOne * this.numTwo}`);
    }
    this.division = function () {
        console.log(`${this.numOne / this.numTwo}`);
    }
}


const myCalculator = new Calculator(125, 60);
console.log(myCalculator);

myCalculator.sum()
myCalculator.subtraction()
myCalculator.multiplication()
myCalculator.division()

// variantas su prompt 

function Calculat() {

    this.read = function () {
        this.numberA = +prompt('number', 0)
        this.numberB = +prompt('number', 0)
    };

    this.sum = function () {
        return this.numberA + this.numberB;
    };
    this.mul = function () {
        return this.numberA * this.numberB;
    };
    this.sub = function () {
        return this.numberA - this.numberB;
    };
    this.div = function () {
        return Math.floor(this.numberA / this.numberB);
    };
};

let calculator = new Calculat();
console.log(calculator)
calculator.read();

console.log("Sum = " + calculator.sum());
console.log("Mul = " + calculator.mul());
console.log("Sub = " + calculator.sub());
console.log("Div = " + calculator.div());
