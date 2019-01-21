window.addEventListener('mousemove', function (event) {
  if (patchCordActive) {
    let mouse_x = event.clientX;     // Get the horizontal coordinate
    let mouse_y = event.clientY;
    document.getElementById("patchCords").lastElementChild.setAttribute('x2', mouse_x);
    document.getElementById("patchCords").lastElementChild.setAttribute('y2', mouse_y);
  }
});
