/* Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

Examples (input --> output):
"hello case" --> "HelloCase"
"camel case word" --> "CamelCaseWord" */

String.prototype.camelCase = function() {
    let arr = this.split('');
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == '-' || arr[i] == '_' || arr[i] == ' ') {
        arr[i+1] = arr[i+1].toUpperCase();
        arr[i] = '';
      }
        arr[0] = arr[0].toUpperCase();
    } 
    return arr.join('');
  };