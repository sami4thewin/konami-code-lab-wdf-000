const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


var body = document.body;




function init() {
  // your code here
  body.addEventListener('keydown', function(e) {
    var key = parseInt(e.detail || e.which);

    for(var i = 0; i < code.length; i++){
      if (key === code[i]) {
        alert("Congrats.")
      }
    }
  })

}
