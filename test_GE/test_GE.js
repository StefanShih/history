let sendButton = document.querySelector('button');
let getShow = document.querySelector('#getShow');

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

function get(){
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbzCotqwQiQJ5TGv3KNdwPGFRbYjTYmROArUjSgUn7WNDhL8AFAsnvV-bXa_VOedTRiZ/exec",
    type: "POST",
    success: function(response) {
      let show = document.querySelector('#show');
      show.empty();
      show.append(response);
    },
  });
}

sendButton.addEventListener('click', send);
getShow.addEventListener('click', get);