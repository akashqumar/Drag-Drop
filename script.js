let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
let resetButton = document.getElementById('myButton');

for (list of lists) {
  list.addEventListener("dragstart", function (e) {
    let selected = e.target;

    rightBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    rightBox.addEventListener("drop", function (e) {
      e.preventDefault();
      rightBox.appendChild(selected);
      selected = null;
    });

    leftBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    leftBox.addEventListener("drop", function (e) {
      e.preventDefault();
      leftBox.appendChild(selected);
      selected = null;
    });
  });
}

resetButton.addEventListener('click', () => {
  // Reset the elements to their original state
  for (list of lists) {
    leftBox.appendChild(list);
  }
});
