AFRAME.registerComponent("target-point", {

init: function () {

for (var i = 1; i <= 20; i++) {

var id = `point${i}`;

var posX = Math.random() * 300 + -500;
var posY = Math.random() * 2 + 3;
var posZ = Math.random() * 3000 + -1000;

var position = {x:posX , y:posY , z:posZ};

this.createpoints(id, position);

}
},
  
createpoints: function (id, position) {

var cityEl = document.querySelector("#city1");
var pointEl = document.createElement("a-entity");
  
pointEl.setAttribute("id", id);
pointEl.setAttribute("material", "color", "black");
pointEl.setAttribute("position", position);
pointEl.setAttribute("geometry", { primitive: "sphere", radius: 8 });
  
pointEl.setAttribute("static-body", {
shape: "sphere",
sphereRadius: 20,
});

  
cityEl.appendChild(pointEl);
    
},
});
  