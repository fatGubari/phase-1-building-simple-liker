// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const heartColot = {
  "♡": FULL_HEART,
  "♥": EMPTY_HEART,
};
// Your JavaScript code goes here!
const likeIcone = document.querySelectorAll('.like-glyph')

function likeFunction(e){
  const like = e.target
  mimicServerCall()
  .then( (response) => {
    alert(response)
    like.innerText = heartColot[like.innerText]
    let active = document.querySelector('span')
    active.classList.add('.activated-heart')
  })
  // like.addEventListener('click', () =>{
  //   like.innerText = EMPTY_HEART
  //   active.classList.remove('.activated-heart')
  // })
  .catch( (error) => {
    const div =  document.querySelector('div');
    div.classList.remove('hidden');
    alert(error)
    setTimeout( div.className = "hidden" ,3000)
  })

}

for (let icon of likeIcone) {
  icon.addEventListener("click", likeFunction);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
