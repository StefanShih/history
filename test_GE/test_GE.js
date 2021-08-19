let sendButton = document.querySelector('button');

function send() {
  let name = document.querySelector('#name').value;
  let demand = document.querySelector('#demand').value;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbwiKBpstJf-B59lG2xqOVUtFatuV9HaceqcsEtHluZgqteSmMIYxm1gPpM0NTfXmuCB/exec",
    data: {
        "name": name,
        "demand": demand
    },
    type: "POST",
    success: function(response) {
      if(response == "成功"){
        alert("成功");
      }
    },
  });
};

sendButton.addEventListener('click', send);