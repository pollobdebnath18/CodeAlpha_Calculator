function add(num) {
  document.getElementById("display").value += num;
}
function deleteLast() {
  document.getElementById("display").value = display.value.slice(0, -1);
}
function deleteAll() {
  document.getElementById("display").value = display.value = "";
}
function calculate(){
    document.getElementById('display').value = eval(display.value);
}
