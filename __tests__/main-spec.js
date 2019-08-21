const {isValid,
    multiplyTable,
    generateMultiplyArray,
    printMultiplyTable} = require('../main');

it ('should check if parmarters is legal', () => {
    //given
    const firstNumber = 2;
    const secondNumber = 3;
    //when
    const result = isValid(firstNumber,secondNumber);
    //then
    expect(result).toBe(true);
});

   //given
   const firstNumber = 2;
   const secondNumber = 3;
   //when
   const generatedTablearray = generateMultiply(firstNumber,secondNumber);
   //then
   expect(generatedTablearray).toBe(2*2=4,2*3=6)