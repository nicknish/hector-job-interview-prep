main()

function main() {
  //n can be anything
  var n = 5
  var m = 7
  var timesRan = 0

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      console.log(`Times ran ${++timesRan}`)
    }
  }
}
