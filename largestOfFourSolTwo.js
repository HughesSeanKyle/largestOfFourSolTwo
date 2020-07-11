// Basic Algorithm Scripting: Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

// Solution 2 - (Declarative approach)

function largestOfFour(arr) {                         //1
  return arr.map(function(group) {                    //2
    return group.reduce(function(prev, current) {     //3
      return current > prev ? current : prev;         //4
    });
  });
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


/*/

/ Notes

FCC Notes
  we map all items within the main array to a new array using Array.prototype.map() and return this array as the final result
  within each inner array, we reduce its contents down to a single value using Array.prototype.reduce()
  the callback function passed to the reduce method takes the previous value and the current value and compares the two values
  if the current value is higher than the previous value we set it as the new previous value for comparison with the next item within the array or returns it to the map method callback if it’s the last item

    //1 Initializes function that takes in an Array as an argument
    //2 The map() method creates a new array with the results of calling a provided function on every element in the calling array.
        Source - [https://devdocs.io/javascript/global_objects/array/map]

        The benefit of using map in this case is that the original array is not mutated and a copy is made instead. 
        Mutated objects can have unwanted side effects on the code, can make it difficult to trace bugs and make testing code difficult

        The map function takes one argument in this case called `group` and this is the child arrays within the parent.

    //3 The reduce() method executes a reducer function (that you provide) on each member of the array resulting in a single output value.
        The reducer function is fed four parameters:

        Accumulator (acc)
        Current Value (cur)
        Current Index (idx)
        Source Array (src)

        Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array and ultimately becomes the final, single resulting value.

        Source - [https://devdocs.io/javascript/global_objects/array/reduce]

        In this case the reduce method will iterate over each item/index in the child array and store them in the two arguments, `prev` and `current`. 

        The first `prev` value will be the zero index of the child [0][0], [1][0], [2][0], [3][0] and the first `current` value will be the first index of the child [0][1], [1][1], [2][1], [3][1].

    //4 return current > prev ? current : prev; - As mentioned in //3 the reducer function will iterate over all items/indices in the child.
        This line is a ternary operator and is saying if the current value is greater than the previous value then return the current value.
        If the current value is not greater that the previous value then return the previous value      



    What is Declarative Programming?

    Declarative programming is when you write your code in such a way that it describes what you want to do, and not how you want to do it. It is left up to the compiler to figure out the how.

    Source - [https://stackoverflow.com/questions/129628/what-is-declarative-programming]


    What is the difference between map and reduce?

    Both map and reduce have as input the array and a function you define. They are in some way complementary: map cannot return one single element for an array of multiple elements, while reduce will always return the accumulator you eventually changed

    Source - [https://stackoverflow.com/questions/49934992/main-difference-between-map-and-reduce/49935253#:~:text=Both%20map%20and%20reduce%20have,the%20accumulator%20you%20eventually%20changed.]
                                */