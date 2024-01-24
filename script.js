const columnsContainer = document.querySelector("#columnsContainer");

createEtch(20);
function createEtch(columnNumber) {
  for (let index = 0; index < columnNumber; index++) {
    const column = document.createElement("div");
    column.classList.add("column");
    columnsContainer.appendChild(column);

    for (let index = 0; index < columnNumber; index++) {
      const square = document.createElement("div");
      square.classList.add("square");

      column.appendChild(square);
      square.addEventListener("mouseover", function () {
        square.classList.add("hover");
      });
    }
  }
}

const button = document.querySelector("button");
button.addEventListener("click", function () {
  let columnNumber = parseInt(prompt("How many columns do you want?", "123?"));
  while (columnsContainer.hasChildNodes()) {
    columnsContainer.removeChild(columnsContainer.firstChild);
  }
  createEtch(columnNumber);
});
