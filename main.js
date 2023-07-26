function createSignature() {
  var name = document.getElementById("name").value;
  var position = document.getElementById("position").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;

//sample format change as you see fit
  var signature = "<div class='signature'>" + 
                    "<h2>" + name + "</h2>" + 
                    "<p>" + position + "</p>" + 
                    "<p><a href='mailto:" + email + "'>" + email + "</a></p>" +
                    "<img src='image.png' alt='Company image'>" +
                    "<p>1234 Hollywood, US</p>" +
                    "<p>Direct Line: " + phone + "</p>" +
                    "<p>Main Office: 123456789</p>" +
                    "<p>Toll Free: 123456789</p>" +
                  "</div>";
  
  document.getElementById("signature").innerHTML = signature;
  var signatureFile = new Blob([signature], {type: 'text/html'});
  var downloadLink = document.getElementById("downloadLink");
  downloadLink.href = URL.createObjectURL(signatureFile);
  downloadLink.download = 'signature.html';
  downloadLink.style.display = 'block';
}
