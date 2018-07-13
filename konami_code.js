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

  if (key === codes[index]) {
    index ++
    if (key === codes[index]) {
      index ++
      if (key === codes[index]) {
        index ++
        if (key === codes[index]) {
          index ++
          if (key === codes[index]) {
            index ++
            if (key === codes[index]) {
              index ++
              if (key === codes[index]) {
                index ++
                if (key === codes[index]) {
                  index ++
                  if (key === codes[index]) {
                    index ++
                    if (key === codes[index]) {
                      index ++
                      if (index === codes.length) {
                        alert('hurray');
                        index = 0
                      }
                    } else {
                      index = 0
                    }
                  } else {
                    index = 0
                  }
                } else {
                  index = 0
                }
              } else {
                index = 0
              }
            } else {
              index = 0
            }
          } else {
            index = 0
          }
        } else {
          index = 0
        }
      } else {
        index = 0
      }
    } else {
      index = 0;
    }
  } else {
    index = 0;
  }
  })
}