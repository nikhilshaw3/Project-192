AFRAME.registerComponent('drive', {
    
init: function () {
var gameStateValue = this.el.getAttribute("game")
       
if (gameStateValue == "play") {
this.drive()
}

},

isVelocityActive: function () {
return Math.random() < 0.25;
},

drive: function () {

var multiply = 10;
var wheelRotation = 0;

window.addEventListener('keydown', function (e) {

var wheel = document.querySelector("#wheel")

if (e.code == "ArrowRight" && wheelRotation > -40) {                

wheel.setAttribute("rotation", { x: 0, y: 0, z: wheelRotation })
}
            
if (e.code == "ArrowLeft" && wheelRotation < 40) {                

wheel.setAttribute("rotation", { x: 0, y: 0, z: wheelRotation })
}
            
var cameraRig = document.querySelector("#camera-rig")
var cameraRotation = cameraRig.getAttribute("rotation")
var cameraPosition = cameraRig.getAttribute("position")
var cameraMoveControl = cameraRig.getAttribute("movement-controls")

console.log(cameraMoveControl.speed)
cameraRig.setAttribute("movement-controls", {"speed": cameraMoveControl.speed + 10.005})
console.log(cameraMoveControl.speed)

var cameraDirection = new THREE.Vector3();
cameraRig.object3D.getWorldDirection(cameraDirection);

if (e.code == "ArrowRight") {
cameraRotation.y -= 5
cameraRig.setAttribute("rotation", { x: 0, y: cameraRotation.y, z: 0 })                
cameraRig.setAttribute("movement-controls", {"speed": cameraMoveControl.speed + 10.005})
}

if (e.code == "ArrowLeft") {
cameraRotation.y += 5
cameraRig.setAttribute("rotation", { x: 0, y: cameraRotation.y, z: 0 })             
cameraRig.setAttribute("movement-controls", {"speed": cameraMoveControl.speed + 10.005})
}

if (e.code == "ArrowUp") {
multiply += 0.5

if (multiply <= 100 && cameraPosition.z > -500) {                  
cameraRig.setAttribute("movement-controls", {"speed": cameraMoveControl.speed + 10.005})

var accelerateCar = document.querySelector("#control-acce")
accelerateCar.setAttribute("material", "color", "green")

var carSpeed = document.querySelector("#speed")
carSpeed.setAttribute("text", { value: multiply });

}
}

if (e.code == "Space") {            

cameraRig.setAttribute("movement-controls", {"speed": 0})

var stopCar = document.querySelector("#control-break")
stopCar.setAttribute("material", "color", "red")

}
})

window.addEventListener('keyup', function (e) {
    
var cameraRig = document.querySelector("#camera-rig")
var cameraDirection = new THREE.Vector3();
cameraRig.object3D.getWorldDirection(cameraDirection);

var cameraMoveControl = cameraRig.getAttribute("movement-controls")

if (e.code == "Space") {             
var startCar = document.querySelector("#control-break")
startCar.setAttribute("material", "color", "gray")
}

if (e.code == "ArrowUp") {

if (multiply > 10) {
multiply -= 0.5
cameraRig.setAttribute("movement-controls", {"speed": cameraMoveControl.speed + 10.005})
}

var accelerateCar = document.querySelector("#control-acce")
accelerateCar.setAttribute("material", "color", "gray")

            
}
})
}
});