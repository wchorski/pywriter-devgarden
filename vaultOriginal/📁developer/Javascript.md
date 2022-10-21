Here are my little tidbits and rants about my love hate relationship with **JS** 

## Es6

## Switch Statment
[switch - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
```js
const expr = 'Papayas';

switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
    
  case 'Mangoes':
  
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
    
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
```
### get all header tags on a page and display - [](https://softauthor.com/get-element-by-tag-name-in-javascript/#:~:text=Get%20Element%20(s)%20By%20Tag%20Name%20In%20JavaScript,Get%20Element%20(s)%20By%20Tag%20Name%20From%20Parent)
```html
<div>div <br>box 1</div>
<div>div <br>box 2</div>
<div>div <br>box 3</div>
<span>span <br>box 4</span>
<span>span <br>box 5</span>
```

Let’s get only the **span** elements.
```javascript
const spanBoxes = document.getElementsByTagName("span");
console.log(spanBoxes); // HTMLCollection[2]
```

## Working with Regex
[An Introduction to Regular Expressions (Regex) In JavaScript | by Brandon Morelli | codeburst](https://codeburst.io/an-introduction-to-regular-expressions-regex-in-javascript-1d3559e7ac9a#:~:text=One%20basic%20method%20is%20.test%28%29%2C%20which%20returns%20a,a%20certain%20character%20pattern%20exists%20within%20our%20strings%3A)
```
const str1 = "the cat says meow";  
const str2 = "the dog says bark";

const hasCat = /cat/;hasCat.test(str1);  

truehasCat.test(str2);  
// false
```

## Trials & Tribulations
### For loop finishing at first Array Item
- I was writing a `for` loop and it was not going through all the entries in the **array**
```js
import { cloneAFile } from "./clonefile";

let entries = [1, 2, 3, 4]

for (const entry of entries) {

	console.log(entry)

	cloneAFile('file.txt', `newPath/file.txt`)

}
```
- This was returning only the first `entry` and then ending. BUT there was no error. Turns out I **commented out** all contents inside my external `clonefile` script. 