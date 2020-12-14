var button = document.getElementById("getadvice");

function advice(random) {

  $(document).ready(function () {
    $.ajax({
      method: "GET",
      url: "https://api.adviceslip.com/advice",
      dataType: "JSON",
      success: function (response) {
        console.log(response)
        var ran = response.slip.advice
        document.getElementById("random").innerText = "Get Advice:" + ran
      }

    })
  });

}
document.getElementById("random").innerText = " "

document.getElementById("getadvice").onclick = function () {
  advice(random);

}

















