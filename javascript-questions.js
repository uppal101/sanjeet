/* 1. Does Javascript pass parameters by value or by reference?

*/

// 2. The following code:
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
}, 3000); }

/* will output the following string after 3 seconds due to the setTimeout:
Index: 0, element: 10
Index: 1, element: 12
Index: 2, element: 15
Index: 3, element: 21

The for loop is initialized with the index 0 and loops through the array as long as the index is less than the array length which is 4. On each iteration the index is increased by 1.  i indicates the index of the current iteration of the loop. arr[i] is a way of indexing into the array to grab the value at that index. Note: Data types and structures such as strings and arrays always start at index 0.
*/

/* 3.  How would you compare two objects in JavaScript? Unfortunately objects cannot be compared with either equality operators since it is stored as a reference. This means that even if the contents of two objects are the same they wouldn't be seen the same because they point to two different memory allocations.

Note: When it comes to the equality operators I usually prefer the strict equality operator vs. the abstract equality due to type conversion
*/

function compareObjects (obj1, obj2) {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  let objsEqual;

  // first check the objects have the same amount of keys
  obj1Keys.length === obj2Keys.length ? objsEqual = true : objsEqual = false;

  // check the keys are the same
  if (objsEqual) {
    let keysEqual = [];
    for (var i = 0; i < obj1Keys.length; i++) {
      // returns boolean if key is in the array obj2Keys
      keysEqual.push((obj2Keys.includes(obj1Keys[i])));
    }
    // checks if there is a false value pushed in keysEqual from the iteration
    keysEqual.includes(false) ? objsEqual = false : objsEqual = true;
  }

  // check each key accesses the same value in both objects
  if (objsEqual) {
    let valuesEqual = [];
    for (var i = 0; i < obj1Keys.length; i++) {
      // pushes boolean whether the two values are the same
      valuesEqual.push(obj1[obj1Keys[i]] === obj2[obj2Keys[i]])
    }
    valuesEqual.includes(false) ? objsEqual = false : objsEqual = true;
  }
  return objsEqual;
}

/* I used this algorithm instead of using JSON stringify  to compare to Objects as strings because the contents of an object can be the same, but due to lack of indexes the same object can display the key value pairs in different orders so it isn't always the best measurement of comparing values in two objects */

// 4. Implement a recursive fibonacci function.
function fibonacci(num, cache) {
  cache = cache || {};

  if (cache[num]) return cache[num];
  //base case
  if (num <= 1) return 1;

  return cache[num] = fibonacci(num - 1, cache) + fibonacci(num - 2, cache);
}

/* 5. List the phases of the React component lifecycle.

The three main phases of the React component lifecycle are initialization, update, and destruction. Within these phases are React lifecycle methods that fall under each category. The first phase and last phase usually only happens once. Initialization occurs when the React element mounts to the DOM and destruction occurs when the element is dismounted from the DOM. Update phase occurs each time their is a change in the state causing the element to re-render.

The react lifecyle methods that fall under initialization are: getInitialState(), getDefaultProps(), componentWillMount(), render(), and  componentDidMount().

The react lifecyle methods that fall under update are: componentWillReceiveProps(), shouldComponentUpdate(), componentWillUpdate(), render(), and componentDidUpdate().

The react lifecyle method that falls under destruction is: componentWillUnmount().
*/

/* 6. Explain the role of the Reducer.
Reducers are pure functions that reconcile changes in state due to an action that was dispatched.  It takes the previous state and uses Object.assign with the action. You never want to mutate the object directly because any elements that are subscribed to the store will not update since it wouldn't recognize a change occurred in the object.

There is a special reducer that is often referred to as the root reducer which utilizes combineReducers. combineReducers gets the results of all the child reducers and puts it in one state object.
*/
