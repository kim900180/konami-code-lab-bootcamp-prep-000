const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  document.body.addEventListener('keydown', function(e) {
    const key = e.key;
    var index = 0
    
    if (index === 0) {
      for (var i = 0; i < codes.length ; i++) {
        if (key === codes[i]) {
          index ++
          if (index === codes.length) {
            alert('Yay')
          }
        } else {
          index = 0
        }
      }
    }
  })
}