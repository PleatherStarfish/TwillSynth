window.addEventListener('click', function (event) {

  // if no line active and click inside
  if (document.getElementById("main").contains(event.target) && (patchCordActive == false)) {
      // if the user clicks inside the object, set to true
      currentSelectionX = event.target.getBoundingClientRect().x;
      currentSelectionY = event.target.getBoundingClientRect().y;
      let mouse_x = event.clientX;     // Get the horizontal coordinate
      let mouse_y = event.clientY;
      drawLine(currentSelectionX, currentSelectionY, mouse_x, mouse_y);
      patchCordActive = true;
    }
  // if line active with second click inside
  else if (document.getElementById("main").contains(event.target) && (patchCordActive == true)) {
      // delete line
      patchCordActive = false;
      const select = document.getElementById("patchCords");
      select.removeChild(select.lastChild);
  }
  // if line active with second click outside
  else if (patchCordActive == true) {
    // delete line
    patchCordActive = false;
    const select = document.getElementById("patchCords");
    select.removeChild(select.lastChild);
  }
  // else no line active with click outside
  else if (patchCordActive == false) {
    // nothing
  }
  // else nfall through to error
  else {
      throw "Patch-cord logic fell through to the error condition!";
  }
});
