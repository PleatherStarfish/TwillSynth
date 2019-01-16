window.addEventListener('mousemove', function (event) {
  console.log("moved");
  if (patchCordActive) {
    console.log("moved active");
    let mouse_x = event.clientX;     // Get the horizontal coordinate
    let mouse_y = event.clientY;
    document.getElementById("patchCords").lastElementChild.setAttribute('x2', mouse_x);
    document.getElementById("patchCords").lastElementChild.setAttribute('y2', mouse_y);
  }
});
