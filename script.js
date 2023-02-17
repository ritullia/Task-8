/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */




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

myCalculator.sum();
myCalculator.subtraction();
myCalculator.multiplication();
myCalculator.division();

