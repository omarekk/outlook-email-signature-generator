function createSignature() {
  var name = document.getElementById("name").value;
  var position = document.getElementById("position").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;

  var signature = "<div class='signature'>" + 
                    "<h2>" + name + "</h2>" + 
                    "<p>" + position + "</p>" + 
                    "<p><a href='mailto:" + email + "'>" + email + "</a></p>" +
                    "<img src='clm midwest.png' alt='Employee image'>" +
                    "<p>2655 Erie Street, River Grove, IL 60171</p>" +
                    "<p>Office Line: " + phone + "</p>" +
                    "<p>Main Office: 708-456-7777</p>" +
                    "<p>Toll Free: 877-359-7788</p>" +
                  "</div>";
  
  document.getElementById("signature").innerHTML = signature;
  var signatureFile = new Blob([signature], {type: 'text/html'});
  var downloadLink = document.getElementById("downloadLink");
  downloadLink.href = URL.createObjectURL(signatureFile);
  downloadLink.download = 'signature.html';
  downloadLink.style.display = 'block';
}
