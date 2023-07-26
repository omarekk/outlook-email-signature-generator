function createSignature() {
  var name = document.getElementById("name").value;
  var position = document.getElementById("position").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;

  var signature = "<div class='signature'>" + 
                    "<h2>" + name + "</h2>" + 
                    "<p>" + position + "</p>" + 
                    "<p><a href='mailto:" + email + "'>" + email + "</a></p>" +
                    "<img src='<image>' alt='Employee image'>" +
                    "<p>company address</p>" +
                    "<p>Office Line: " + phone + "</p>" +
                    "<p>Main Office: </p>" +
                    "<p>Toll Free:</p>" +
                  "</div>";
  
  document.getElementById("signature").innerHTML = signature;
  var signatureFile = new Blob([signature], {type: 'text/html'});
  var downloadLink = document.getElementById("downloadLink");
  downloadLink.href = URL.createObjectURL(signatureFile);
  downloadLink.download = 'signature.html';
  downloadLink.style.display = 'block';
}
