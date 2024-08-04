
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzCYu4VYd4xIMryKvLCXoFgcDbsbiS-8VsZ7YiGB2cuZjfeNft7LvhSCFkcNWlODBG5dw/exec'
  const form = document.forms['submit-to-google-sheet'] ; 
  const msg = document.getElementById('msg');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
              msg.innerHTML="message sent sucessfully !"
              setTimeout(function(){
                msg.innerHTML=""
              },5000)
              form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })

  var typingeffect = new Typed(".typedText",{
    strings:  ["Designer", "devloper","coder"],

    loop: true,
    typeSpeed:80,
    backSpeed:60,
    backDelay:400,
  })