document.addEventListener("DOMContentLoaded", function() {
    var messageElement = document.getElementById("message");
    var text = "Hello World";
    var index = 0;
  
    function typeHello() {
      if (index < text.length) {
        messageElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeHello, 80);
      }
    }
  
    typeHello();
  });
  