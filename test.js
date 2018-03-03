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


compareObjects({1: 'hello', 2: 'hi'}, {1: 'hello', 2: 'hi'})
compareObjects({1: 'hello', 2: 'hi'}, {1: 'hello', 3: 'hi'})
compareObjects({1: 'hello', 2: 'hi'}, {1: 'hello', 2: 'test'})
compareObjects({1: 'hello', 2: 'hi'}, {1: 'hello'})
