let sendButton = document.querySelector('button');

function send() {
  let name = document.querySelector('#name').value;
  let demand = document.querySelector('#demand').value;
  $.ajax({
    url: "填入google sheet api url",
    data: {
        "name": name,
        "demand": demand
    },
    success: function(response) {
      if(response == "成功"){
        alert("成功");
      }
    },
  });
};

sendButton.addEventListener('click', send);