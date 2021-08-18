let sendButton = document.querySelector('button');

function send() {
  let name = document.querySelector('#name').value;
  let demand = document.querySelector('#demand').value;
  $.ajax({
    url: "https://script.googleusercontent.com/macros/echo?user_content_key=ilauIQqVj6ExI86E9U-B47LM8xXmLfEPYlB58CP7h4xSD5-0rlah_TD1cdxu7mH7ezzXR8KyS_vGNTvfsLY6B2mJ3v0jlJ2-m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnK5Z2WrHHsfTLjRh70XKKX4CZzoQuJn_3Jme0oSf9_GY8EzHOaqsAUII2cwXCBGnZ804uRnduQECAvIE3eRg9ndY9Pr5Xu08sw&lib=M3b_FQecDuTqgY2JTdYirkBiEZjxQYt-z",
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