const objectsList = {
  osc: {in: ["thing 1", "thing 2", "thing 3"],
        out: ["thing 1", "thing 2"],
        color: "blue"},

  lfo: {in: [0, 1, 2],
        out: [0, 1],
        color: "green"},
        
  bpf: {in: [0, 1, 2],
        out: [0, 1],
        color: "red"}
}


function drawObject(div, type, oscCounter, lfoCounter, bpfCounter) {
  if (type in objectsList) {
    div.style.backgroundColor = randomColor({luminosity: 'dark', hue: objectsList[type].color});
    div.setAttribute("id", "osc" + oscCounter);

    let title = document.createElement("div");
    div.appendChild(title);
    title.innerHTML = type;
    title.setAttribute("class", "objectTitle");

    let inFlexbox = document.createElement("div");
    div.appendChild(inFlexbox);
    inFlexbox.setAttribute("class", "in");

    let inNum = 0;
    for (let port in objectsList.osc.in) {
      let element = document.createElement("div");
      inFlexbox.appendChild(element);
      element.setAttribute("class", "port"); // add class tooltip to turn on
      // element.innerHTML = '<span class="tooltiptext">INPUT</span>'
      element.setAttribute("id", "osc" + oscCounter + "_" + "input" + inNum);
      inNum += 1;
    }

    let outFlexbox = document.createElement("div");
    div.appendChild(outFlexbox);
    outFlexbox.setAttribute("class", "out");

    let outNum = 0;
    for (let port in objectsList.osc.out) {
      let element = document.createElement("div");
      outFlexbox.appendChild(element);
      element.setAttribute("class", "port"); // add class tooltip to turn on
      // element.innerHTML = '<span class="tooltiptext">INPUT</span>'
      element.setAttribute("id", "osc" + oscCounter + "_" + "output" + outNum);
      outNum += 1;
    }

    oscCounter += 1;
  }
  else {
    throw "Object logic fell through to the error condition!";
  }
}
