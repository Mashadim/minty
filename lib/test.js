"use strict";



// var ted = function (str, apple) {
//   var a = 'b';
//   if (a === 'b') {
//     let b = 'c';
//     for(let c = 0; c < 1; c ++) {
//       console.log(c);
//     }
//   }
// };

// ted('string',
// 'apple');


function fn(a,b,c) {
  if(true) {
    console.log('true')
  }
  a = a + b + c;
  function fn2(d,e,f) {
    console.log('added ' + (d+e+f));
    var bus = 'slow';
  }
  fn2(4,5,6);
  var car = 'toyota';
}

var test = {a: {a : [1,2,{final: 'done!'}]}}


fn(1,2,3);
