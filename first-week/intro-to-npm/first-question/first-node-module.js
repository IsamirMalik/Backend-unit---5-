const boxen = require('boxen')

let first = boxen('I am using my first external module !', {title:'Hurray!', borderStyle: 'singleDouble' , titleAlignment: 'center' , backgroundColor : 'blue', borderColor: 'red'});

let second = boxen('I am using my first external module !', {title:'Hurray!', borderStyle: 'classic' , titleAlignment: 'center' , backgroundColor : 'yellow', borderColor: 'yellow'});

let third = boxen('I am using my first external module !', {title:'Hurray!', borderStyle: 'round' , titleAlignment: 'center' , backgroundColor : 'red', borderColor: 'green'});

let fourth = boxen('I am using my first external module !', {title:'Hurray!', borderStyle: 'bold' , titleAlignment: 'center' , backgroundColor : 'green', borderColor: 'blue'});

console.log(first)
console.log(second)
console.log(third)
console.log(fourth)