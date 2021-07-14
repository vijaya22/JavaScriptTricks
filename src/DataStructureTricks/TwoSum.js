/** Two Sum III - Data structure design -  */
/**
 * Implement the TwoSum class:
 * TwoSum() Initializes the TwoSum object, with an empty array initially.
 * void add(int number) Adds number to the data structure.
 * boolean find(int value) Returns true if there exists any pair of numbers whose sum is equal 
 * to value, otherwise, it returns false.
*/

class TwoSum {
    constructor() {
        this.dataMap = new Map();
    }
    add(num) {
        if(this.dataMap.has(num)){
            this.dataMap.set(num,this.dataMap.get(num)+1);
        }
        else this.dataMap.set(num,1);
    }
    // need to change some things
    // not getting correct answer
    find(value) {
        let keysArr = Array.from(this.dataMap.keys());
        for(let i=0;i<keysArr.length;i++){
            let complement = value - keysArr[i];
            if(this.dataMap.has(complement)) return true;
        }
        return false;
    }

}

let obj = new TwoSum();
obj.add(1);
obj.add(3);
obj.add(5);
console.log('4::::',obj.find(4));
console.log('7::::',obj.find(7));

// not getting correct answer