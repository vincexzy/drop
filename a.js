var box1Div,box2Div,msgDiv,img1;

function D() {

  box1Div = document.getElementById("box1");
  box2Div = document.getElementById("box2");
  msgDiv = document.getElementById("msg");
  img1 = document.getElementById("a");

  box1Div.ondragover= function (e) {
    e.preventDefault();
    // showObj(e);
  };
  box2Div.ondragover= function (e) {
    e.preventDefault();
    // showObj(e);
  };
  img1.ondragstart = function (e) {
    e.dataTransfer.setData("imgId",e.target.id);
  }
  box1Div.ondrop = dropImg;
  box2Div.ondrop = dropImg;

  function dropImg (e) {
    console.log(e.dataTransfer);
    var img = e.dataTransfer.getData("imgId");
    console.log(document.getElementById(img));
    e.target.appendChild(document.getElementById(img));
  };

}
D();
// function showObj(obj) {
//   var s ="";
//   for (var k in obj) {
//     s+=k+":"+obj[k]+"<br/>"
//   }
//   msgDiv.innerHTML = s;
// }
