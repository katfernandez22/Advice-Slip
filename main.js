import axios from "axios"
const button = document.getElementById("getadvice");

function advice(random) {
  const url = `https://api.adviceslip.com/advice`
  axios.get(url)
    .then(function (response) {
      let ran = response.data.slip.advice

      document.getElementById("random").innerText = `Get Advice: ${ran}`



      console.log(response);
    })
    .catch(function (error) {
      const messageElement = document.getElementById("error");
      messageElement.innerText = error;
    })

}
window.onload = function () {
  document.getElementById("getadvice").onclick = function () {

    advice(random);
  }
}

















