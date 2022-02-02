let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop(); //deleting the last elementfrom the array.

// console.log(secretMessage.length);

secretMessage.push("to", "Program"); //adding 'to' and 'Program' to the end of the array.

// console.log(secretMessage.indexOf("easily"));

secretMessage[7] = "right"; //finding the index of "right" in the array.

secretMessage.shift(); //removing the first eleement from the array

secretMessage.unshift("Programming"); //pushing "Programming" to the beginning of the array.

secretMessage.splice(6, 5, 'know'); //splicing the array to remove some elements.

console.log(secretMessage.join(" "))