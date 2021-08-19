let sendButton = document.querySelector('button');

function send() {
  let name = document.querySelector('#name').value;
  let demand = document.querySelector('#demand').value;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbwe9hS86buvGU7L5y1-03dpPn3ZvXNMaOU0ABF6hxfdtqR_lfJTc1ry1HOruHzR40lI/exec",
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