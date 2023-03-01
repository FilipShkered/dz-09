function Calculator(base) {
  this.base = base;
  this.initialBase = base;


  this.add = function (value) {
    if (typeof value === 'number' && value >= 0) {
      this.base += value;
    }
  }

  this.sub = function (value) {
    if (typeof value === 'number' && value >= 0) {
      this.base -= value;
    }
  }

  this.set = function (value) {
    if (typeof value === 'number') {
      this.base = value;
    }
  }

  this.get = function() {
    return this.base;
  }

  this.reset = function() {
    this.base = this.initialBase;
  }
}

const calculator = new Calculator(100);

calculator.add(10); // 110 - это текущее значение base
calculator.add(10);
calculator.sub(20);

calculator.set(20);
calculator.add(10);
calculator.add(10);
calculator.add('qwe'); // NaN и значение 40 не менять

console.log(calculator.get()) // 40

calculator.reset();
console.log(calculator.get()) // 100