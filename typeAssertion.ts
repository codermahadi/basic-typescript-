// let massege = 'abc';
// let a = massege.endsWith('c');

let massege;
massege = 'abc';
let endsWithC:boolean = (<string>massege).endsWith('c');
let alternativeWay:boolean = (massege as string).endsWith('c')

console.log(endsWithC);