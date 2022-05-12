import { useState, Fragment, useEffect } from 'react';

function RandomOrder() {
  const [randomOrder, setRandomOrder] = useState<any | null>(null);

  const proteinOptions = [
    'chicken',
    'pollo asado',
    'steak',
    'barbacoa',
    'carnitas',
    'sofritas',
  ];
  const beanOptions = ['pinto beans', 'black beans'];
  const riceOptions = ['white rice', 'brown rice'];
  const sauceOptions = [
    'pico de gallo',
    'queso blanco',
    'tomatillo-green chili salsa',
    'tomatillo-red chili salsa',
  ];
  const toppingsOptions = ['cheese', 'sour cream', 'guacamole'];
  const vegetablesOptions = ['fajita veggies', 'corn salsa', 'lettuce'];

  function listIndex(array: string[]) {
    const max = array.length;
    const randomInt = Math.floor(Math.random() * max);
    return randomInt;
  }

  function bowlRandomizer() {
    let newOrder = [];
    newOrder.push(proteinOptions[listIndex(proteinOptions)]);
    newOrder.push(beanOptions[listIndex(beanOptions)]);
    newOrder.push(riceOptions[listIndex(riceOptions)]);
    newOrder.push(sauceOptions[listIndex(sauceOptions)]);
    newOrder.push(toppingsOptions[listIndex(toppingsOptions)]);
    newOrder.push(vegetablesOptions[listIndex(vegetablesOptions)]);
    setRandomOrder(newOrder);
  }

  useEffect(() => {
    bowlRandomizer();
  }, []);

  return (
    <Fragment>
      <div>
        <button
          className='bg-orange-500 text-white px-4 py-2 rounded-md text-1xl font-medium hover:bg-blue-700 transition duration-300'
          onClick={bowlRandomizer}
          // onClick={randomBowlHandler}
        >
          Make a randomized burrito bowl!
        </button>
        {randomOrder === null
          ? null
          : randomOrder.map((randomOrder: any, index: string | number) => {
              return (
                <div className='flex justify-start '>
                  <li key={index}>{randomOrder}</li>
                </div>
              );
            })}
      </div>
    </Fragment>
  );
}

export default RandomOrder;
