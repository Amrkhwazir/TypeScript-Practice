// functions Assignment 01

function calculateAverage(values:Array<number>):number{
    let average = values.reduce((accumulator, currentValue) => {
      return  accumulator + currentValue
    });

    return average/ values.length    
    
};

// func call
calculateAverage([1,2,3,4,5]);


// functions Assignment 02

function maxValue(values:Array<number>):number{
    
    return Math.max(...values)
   
};

// func call
const max =  maxValue([1,2,3,4,5]);
console.log(max);




