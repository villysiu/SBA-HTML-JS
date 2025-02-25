const donutList = document.getElementById("donut_list");

// const label = document.createElement("label")
// label.textContent = "What kind of donut are you?"
// donutList.appendChild(label);


const selEl = document.createElement("select")
// selEl.style.padding="1rem"
selEl.style.padding = "1rem";
selEl.style.fontSize = "1rem";
donutList.appendChild(selEl);

const donuts = ["original", "chocolate", "strawberry", "sprinkle"]

for(let donut of donuts){
  let option  = document.createElement("option");
  option.textContent = donut;
  selEl.appendChild(option);


}

// <label htmlFor="donuts">"What kind of donut are you?"</label>
// <select name="donuts" id="donuts">
//   <option value="original">Orignal</option>
//   <option value="chocolate">Chocolate</option>
//   <option value="strawberry">Strawberry</option>
//   <option value="sprinkle">Sprinkle</option>
// </select>
