const add = require('../main');

it ('should add two numbers', () => {
    expect(add(2, 3)).toBe(5);
});

//given
const firstNumber=1;
const secondNumber=2;
//when
const result=multiply (firstNumber,secondNumber);
//then
espect (result.tobe("1*2=2"))



it ('should generated one expression', () => {

//given
const startNumber=2;
const endNumber=2;

//when
const oneExpression=generateoneExpression (firstNumber,secondNumber);

//then
espect (oneExpression.tobe("2*2=4");







const{isValid}=require('../main')
it(should numbers be valid', () => {
//given
var firstNumber=2;
var secondNumber=3;
//when
var result=is vaild (firstNumber,secondNumber);
//then
expect (result.tobe(true))
})

it('should generated array with table item',() => {
   //given
var firstNumber=2;
var secondNumber=3;
//when
var generated array=generatemultiplyarray(firstNumber,secondNumber);
//then
expect(generated array[0][0],'2*2=4');
expect(generated array[1][0],'2*3=6');
expect(generated array[1][1],'3*3=9');
}) 

