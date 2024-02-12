const userInputString = prompt(
    "Please enter your flavors and separated by commas.",
    "Vanilla, Strawberry, Coffee "
  );

  const stringArray = userInputString.split(",");

  const flavors = stringArray.map(flavor => flavor.trim())

  function flavorCount(array){
    const flavorCounter = {} 
    for (let i = 0; i <array.length; i++){
      const flavor = array[i]
      if (!flavorCounter[flavor]){
        flavorCounter[flavor]=0
      }
      flavorCounter[flavor] ++
    }
    return flavorCounter
  }
  console.log(stringArray)
  console.log(flavorCount(flavors))

