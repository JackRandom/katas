function findMissing (numberArray) {

    for(let index = 0; index < numberArray.length; index += 1) {
      const firstElement = numberArray[0];

        if(firstElement !== 1) {
          return 1;
        }
        const currentElement = numberArray[index];
        const nextElement = numberArray[index +1];
        const correctElement = currentElement +1;

        if(nextElement !== correctElement) {

          return correctElement;
      };
    };
  };

module.exports = findMissing;