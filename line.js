function drawLine(x1, y1, x2, y2) {
    var newLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    newLine.setAttribute('x1', x1);
    newLine.setAttribute('y1', y1);
    newLine.setAttribute('x2', x2);
    newLine.setAttribute('y2', y2);
    newLine.setAttribute('stroke', randomColor({luminosity: 'light'}));
    newLine.setAttribute('stroke-width', '5');
    document.getElementById("patchCords")
            .appendChild(newLine)
            .setAttribute("id", "patchCord" + patchCordCounter);
    patchCordCounter += 1;
}
