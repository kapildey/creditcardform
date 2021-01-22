function handlecardnumber() {
  let newVal = document
    .getElementById("inputCardNum4")
    .value.replace(/^(\d\d\d\d)(\d)$/g, "$1 $2")
    .replace(/^(\d\d\d\d\ \d\d\d\d)(\d)$/g, "$1 $2")
    .replace(/^(\d\d\d\d\ \d\d\d\d\ \d\d\d\d)(\d)$/g, "$1 $2")
    .replace(/[^\d\/ /]/g, "");
  document.getElementById("cardnum").innerHTML = newVal;
  document.getElementById("inputCardNum4").value = newVal;
  if (document.getElementById("inputCardNum4").value == "")
    document.getElementById("cardnum").innerHTML =
      ". . . . &nbsp;. . . .&nbsp; . . . . &nbsp;. . . .";
}
function handleCardname() {
  let newVal = document
    .getElementById("inputValidThru4")
    .value.replace(/^(\d\d)(\d)$/g, "$1/$2")
    .replace(/[^\d\/]/g, "");
  document.getElementById("cardvalid").innerHTML = newVal;
  document.getElementById("inputValidThru4").value = newVal;
  if (document.getElementById("inputValidThru4").value == "")
    document.getElementById("cardvalid").innerHTML = ".. / ..";
}
function handlesubmit() {
  document.getElementById("inputCardNumGroup").classList.remove("is-invalid");
  document.getElementById("inputValidThru4").classList.remove("is-invalid");
  document.getElementById("inputCvc4").classList.remove("is-invalid");
  let cardNum = document.getElementById("inputCardNum4").value;
  let cardValidity = document.getElementById("inputValidThru4").value;
  let cardCVC = document.getElementById("inputCvc4").value;
  if (cardNum.split(" ").join("").length !== 16) {
    document.getElementById("inputCardNumGroup").classList.add("is-invalid");
    return false;
  } else if (cardValidity.split("/").join("").length !== 4) {
    document.getElementById("inputValidThru4").classList.add("is-invalid");
    return false;
  } else if (cardCVC.length !== 3) {
    document.getElementById("inputCvc4").classList.add("is-invalid");
    return false;
  } else {
    alert("Thank You");
    document.forms["cardform"].submit();
  }
}
