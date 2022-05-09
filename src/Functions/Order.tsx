import { useState, useEffect, Fragment, ChangeEvent } from "react";
// import RandomOrder from "./RandomOrder";

function Order() {
  // const [protein, setProtein] = useState({});
  // const [bean, setBean] = useState({});
  // const [rice, setRice] = useState({});
  // const [sauce, setSauce] = useState({});
  // const [toppings, setToppings] = useState({});
  // const [vegetables, setVegetables] = useState({});
  const [order, setOrder] = useState("");
  // const [reqProtein, setReqProtein] = useState(false);
  // const [reqBeans, setReqBeans] = useState(false);
  // const [reqRice, setReqRice] = useState(false);
  // const [isDisabled, setIsDisabled] = useState(true);
  const [orderList, setOrderList] = useState([""]);

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

  const menuOptions = [
    proteinOptions,
    beanOptions,
    riceOptions,
    sauceOptions,
    toppingsOptions,
    vegetablesOptions
  ];

  function handleCheckbox() {
    var checkBox = document.getElementById("checkbox") as HTMLInputElement;

    if (checkBox) {
      checkBox.checked = !checkBox.checked;
    }
  }

  // function checkForRequiredItems(sectionName: string) {
  //   let section = document.getElementById(sectionName) as HTMLElement;
  //   let mapChildren = section.querySelectorAll("input");
  //   let somethingChecked = false;
  //   for (let i = 0; i < mapChildren.length; i++) {
  //     if (mapChildren[i].checked) {
  //       somethingChecked = true;
  //     }
  //   }
  //   switch (sectionName) {
  //     case "protein":
  //       setReqProtein(somethingChecked);
  //       console.log(reqProtein);
  //       break;
  //     case "bean":
  //       setReqBeans(somethingChecked);
  //       console.log(reqBeans);
  //       break;
  //     case "rice":
  //       setReqRice(somethingChecked);
  //       console.log(reqRice);
  //       break;
  //   }

  //   // setIsDisabled(reqProtein && reqBeans && reqRice ? false : true);

  //   return reqProtein && reqBeans && reqRice;
  // }

  // function handleOnChange(sectionName: string) {
  //   handleCheckbox();
  //   setIsDisabled(!checkForRequiredItems(sectionName));
  // }

  function sendChoices(e) {
    e.preventDefault();
    let choices = [];
    for (let i = 0; i < menuOptions.length; i++) {
      let x = 0;
      for (x = 0; x < menuOptions[i].length; x++) {
        let checkBox = document.getElementById(
          menuOptions[i][x]
        ) as HTMLInputElement;
        if (checkBox.checked) {
          choices.push(menuOptions[i][x]);
        }
      }
    }

    setOrder(choices.join(", "));
    return choices;
  }

  return (
    <Fragment>
      {/* <RandomOrder /> */}
      <form>
        <div className="row">
          <h2 className="text-left">Protein Options🥩</h2>
          <div id="protein" className="flex justify-start ">
            {proteinOptions.map((item, i) => (
              <div key={i}>
                <label className="inline-flex items-center mt-3">
                  <input
                    id={item}
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600"
                    onChange={() => {
                      handleCheckbox();
                    }}
                  />
                  <span className="ml-2 text-gray-700">{item}</span>
                </label>
              </div>
            ))}
          </div>
          <h2 className="text-left">Bean Options 🌯</h2>
          <div id="bean" className="flex justify-start ">
            {beanOptions.map((item, i) => (
              <div key={i}>
                <label className="inline-flex items-center mt-3">
                  <input
                    id={item}
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600"
                    onChange={() => {
                      handleCheckbox();
                    }}
                  />
                  <span className="ml-2 text-gray-700">{item}</span>
                </label>
              </div>
            ))}
          </div>

          <h2 className="text-left">Rice Options 🍚</h2>
          <div id="rice" className="flex justify-start ">
            {riceOptions.map((item, i) => (
              <div key={i}>
                <label className="inline-flex items-center mt-3">
                  <input
                    id={item}
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600"
                    // onChange={() => {
                    //   handleCheckbox();
                    // }}
                    onChange={handleCheckbox}
                  />
                  <span className="ml-2 text-gray-700">{item}</span>
                </label>
              </div>
            ))}
          </div>

          <h2 className="text-left">Sauce Options 🍯</h2>
          <div id="sauce" className="flex justify-start ">
            {sauceOptions.map((item, i) => (
              <div key={i}>
                <label className="inline-flex items-center mt-3">
                  <input
                    id={item}
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600"
                    // onChange={() => {
                    //   handleCheckbox();
                    // }}
                    onChange={handleCheckbox}
                  />
                  <span className="ml-2 text-gray-700">{item}</span>
                </label>
              </div>
            ))}
          </div>

          <h2 className="text-left">Topping Options 🧀</h2>
          <div id="toppings" className="flex justify-start ">
            {toppingsOptions.map((item, i) => (
              <div key={i}>
                <label className="inline-flex items-center mt-3">
                  <input
                    id={item}
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600"
                    // onChange={() => {
                    //   handleCheckbox();
                    // }}
                    onChange={handleCheckbox}
                  />
                  <span className="ml-2 text-gray-700">{item}</span>
                </label>
              </div>
            ))}
          </div>

          <h2 className="text-left">Vegetable Options 🥬</h2>
          <div id="vegetables" className="flex justify-start ">
            {vegetablesOptions.map((item, i) => (
              <div key={i}>
                <label className="inline-flex items-center mt-3">
                  <input
                    id={item}
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600"
                    // onChange={() => {
                    //   handleCheckbox();
                    // }}
                    onChange={handleCheckbox}
                  />
                  <span className="ml-2 text-gray-700">{item}</span>
                </label>
              </div>
            ))}
          </div>
          <br />
          <div className="flex justify-start ">
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded-md text-1xl font-medium hover:bg-blue-700 transition duration-300"
              onClick={(e) => {
                sendChoices(e);
              }}
            >
              Button 1
            </button>
          </div>
          {order ? <div>{order}</div> : null}
        </div>
      </form>
      <div className="flex justify-start "></div>
    </Fragment>
  );
}

export default Order;
