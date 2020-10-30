class Task {
	constructor(num, string) {
    this.num = num;
    this.string = string;
	 }

     get() {
        console.log(this.num);
        return this;
          }
	}

	class IntBuilder extends Task {
	constructor(num) {
    super(num);
  
     }  
     plus() {
        for (let i = 0; i < arguments.length; i++) {
        this.num += arguments[i];
        }
        console.log(this.num);
        return this;
       }
       
     minus() {
         for (let i = 0; i < arguments.length; i++) {
             this.num -= arguments[i];
         }
         console.log(this.num);
         return this;
     }
     
     multiply(n) {
        console.log(this.num *= n);
        return this;
    
    }
        divide(n) {
        console.log(this.num /= n)
        return this;
    }

        mod(n) {
        console.log(this.num %= n)
        return this;
    }

    static random(x, y) {
        console.log(Math.floor(Math.random() * (y - x) + x));
		return this;	
	}

}

    const intBuilder = new IntBuilder(10);

    intBuilder.plus(2, 3, 2).minus(1, 2).multiply(2).divide(4).mod(3).get();
    IntBuilder.random(10, 100);




//ESS


    function StringBuilder(string) {
        this.string = string;
    }
    
    StringBuilder.prototipe = Object.create(Task.prototype);
    StringBuilder.prototipe.constructor = StringBuilder;
    StringBuilder.prototype._super = Task;
    
    
    
    StringBuilder.prototype.plus = function() {
         for (let i = 0; i < arguments.length; i++) {
         this.string += arguments[i];
    }
         console.log(this.string );
         return this;
    }
    
    StringBuilder.prototype.minus = function(n) {
        console.log(this.string.substring(0, this.string.length - n) + " ");
        return this;
    }
    
    StringBuilder.prototype.multiply = function(n) {
        console.log(this.string.repeat(n));
        return this;
    }
    
    StringBuilder.prototype.divide = function(n) {
        console.log(this.string.slice(0, n));
        return this;
    }
    
    StringBuilder.prototype.remove = function(n) {
        console.log(this.string.split(n).shift());
        return this;
    }
    
    
    StringBuilder.prototype.sub = function(x, y) {
        console.log(this.string.substring(x, y + 1));
        return this;
    }
    
    
    StringBuilder.prototype.get = function() {
        console.log(this.string);
        return this;
    }
    
    var stringBuilder = new StringBuilder("Hello");
    stringBuilder.plus(' all', '!').minus(4).multiply(3).divide(4).remove("l").sub(1, 1).get()

    