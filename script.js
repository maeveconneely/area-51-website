var index = 0
var images = ["aliens.png", "battle_plan.jpg"]

function weOutside() {
  index = index + 1;
  if (index == images.length) {
    index = 0;
  }
  var image1 = document.getElementById("aliens");
  image1.src = images[index]
}

function submit() {
  document.getElementById("result").innerHTML = document.getElementById("b").value;
}
