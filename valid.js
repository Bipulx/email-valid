function validation(){
    var form = document.getElementById('form');
     var email = document.getElementById('email').value;
     var text = document.getElementById('text');
     var invalid = document.querySelector(".invalid")
     var valid = document.querySelector(".valid")
    
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
    if(email.match(pattern)) {
      valid.innerHTML ='<i class="bi bi-check-circle"></i>'
      invalid.style.display = "none"
      text.innerHTML = "Your email Address is vaild";
      text.style.color = "#00ff00";
    } else{
       form.classList.remove('valid');
       invalid.innerHTML ='<i class="bi bi-exclamation-circle"></i>'
       text.innerHTML = "please enter valid email";
      text.style.color = "#ff0000";
    }
    };  