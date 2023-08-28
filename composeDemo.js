import { compose } from "redux";

function removeSpaces(string)
{
    // console.log(string.split(" ")); // array
    return string.split(" ").join("");
}

// console.log(removeSpaces('abc grh dfhjg'));

function repeatString(string)
{
//    return string+string;
    return string.repeat(3); 
}

// console.log(repeatString('hello'));

function convertToUppercase(string)
{
    return string.toUpperCase();
}
// console.log(convertToUppercase('hello'));

//  if we call function one by one

    const input = 'abc ghi jkl';

    // const output = convertToUppercase(repeatString(removeSpaces(input)));
    // console.log(output); //ABCGHIJKLABCGHIJKLABCGHIJKL


    // But redux makes more easy to call one by one(which function execute firstly)

    // left to right
    const composedFunction = compose(removeSpaces, repeatString, convertToUppercase);

    console.log(composedFunction(input));//ABCGHIJKLABCGHIJKLABCGHIJKL