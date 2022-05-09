import { useState, Fragment, useEffect } from "react";

function RandomOrder() {
  const [protein, setProtein] = useState([""]);
  const [bean, setBean] = useState([""]);
  const [rice, setRice] = useState([""]);
  const [sauce, setSauce] = useState([""]);
  const [toppings, setToppings] = useState([""]);
  const [vegetables, setVegetables] = useState([""]);
  // const [randomOrder, setRandomOrder] = useState({});
  // const [randomOrder, setRandomOrder] = useState("");
  const [randomOrder, setRandomOrder] = useState({});

  const proteinOptions = [
    "chicken",
    "pollo asado",
    "steak",
    "barbacoa",
    "carnitas",
    "sofritas"
  ];
  const beanOptions = ["pinto beans", "black beans"];
  const riceOptions = ["white rice", "brown rice"];
  const sauceOptions = [
    "pico de gallo",
    "queso blanco",
    "tomatillo-green chili salsa",
    "tomatillo-red chili salsa"
  ];
  const toppingsOptions = ["cheese", "sour cream", "guacamole"];
  const vegetablesOptions = ["fajita veggies", "corn salsa", "lettuce"];

  function listIndex(array: string[]) {
    const max = array.length;
    const randomInt = Math.floor(Math.random() * max);
    return randomInt;
  }

  // listIndex(proteinOptions);
  // console.log(listIndex(proteinOptions));
  // const menuOptions = [
  //   proteinOptions,
  //   beanOptions,
  //   riceOptions,
  //   sauceOptions,
  //   toppingsOptions,
  //   vegetablesOptions
  // ];

  // for (let i = 0; i < menuOptions.length; i++) {

  // }
  function bowlRandomizer() {
    // setProtein([proteinOptions[listIndex(proteinOptions)]]);
    // setBean([beanOptions[listIndex(beanOptions)]]);
    // setRice([riceOptions[listIndex(riceOptions)]]);
    // setSauce([sauceOptions[listIndex(sauceOptions)]]);
    // setToppings([toppingsOptions[listIndex(toppingsOptions)]]);
    // setVegetables([vegetablesOptions[listIndex(vegetablesOptions)]]);
    // setRandomOrder({ protein, bean, rice, sauce, toppings, vegetables });
    // return randomOrder;
    let newOrder = [];
    newOrder.push(proteinOptions[listIndex(proteinOptions)]);
    newOrder.push(beanOptions[listIndex(beanOptions)]);
    newOrder.push(riceOptions[listIndex(riceOptions)]);
    newOrder.push(sauceOptions[listIndex(sauceOptions)]);
    newOrder.push(toppingsOptions[listIndex(toppingsOptions)]);
    newOrder.push(vegetablesOptions[listIndex(vegetablesOptions)]);

    // return console.log(newOrder);
    return newOrder;
  }
  // console.log(JSON.stringify(order));

  // useEffect(() => {
  //   setRandomOrder(newOrder);
  // }, []);

  function randomBowlHandler() {
    let tempOrder = bowlRandomizer();
    setRandomOrder([tempOrder]);
    return console.log(randomOrder);
  }

  return (
    <Fragment>
      <div>
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded-md text-1xl font-medium hover:bg-blue-700 transition duration-300"
          // onClick={bowlRandomizer}
          onClick={randomBowlHandler}
        >
          Make a randomized burrito bowl!
        </button>
        {/* {randomOrder ? <div>{randomOrder}</div> : null} */}
      </div>
    </Fragment>
  );
}

export default RandomOrder;
