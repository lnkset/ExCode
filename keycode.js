document.body.onkeydown = function (x) {
 x = x || window.event;
 var key = x.key
 var loc = x.location
 var which = x.which
 var code = x.code
 var posskeyloc = ["General", "Left Modifiers", "Right Modifiers", "NumPad", "Physical / Digital Mobile Keyboard)", "Game Controller / Joystick"]
 var keyloc = posskeyloc[loc]
 const points = ["event.key", "event.location", "event.which", "event.code"]
 var data = [key, keyloc, which, code]
 var full = merge(points, data)
 document.body.innerHTML = full;
}


function merge(arr1, arr2) {
 var arr3;
 for (i = 0; i < 4; i++) {
   arr3 += arr1[i].toString() + ": " + arr2[i].toString() + "<br><br>"
 }
 return arr3.substring(9)
}
