document.getElementById("out_box").style.visibility = "hidden";

document.getElementById("weight").addEventListener("input", function (e) {
  let x = e.target.value;
  document.getElementById("output").innerText = x / 1000;
  document.getElementById("out_box").style.visibility = "visible";
});
