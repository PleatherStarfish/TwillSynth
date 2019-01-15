function drawObject(div, type, oscCounter, lfoCounter, bpfCounter) {
  if (type == 'osc') {
    div.innerHTML = 'OSC';
    div.style.backgroundColor = randomColor({luminosity: 'dark', hue: 'blue'});
    div.setAttribute("id", "osc" + oscCounter);
    oscCounter += 1;
  }
  if (type == 'lfo') {
    div.innerHTML = 'LFO';
    div.style.backgroundColor = randomColor({luminosity: 'dark', hue: 'green'});
    div.setAttribute("id", "lfo" + lfoCounter);
    lfoCounter += 1;
  }
  if (type == 'bpf') {
    div.innerHTML = 'BPF';
    div.style.backgroundColor = randomColor({luminosity: 'dark', hue: 'red'});
    div.setAttribute("id", "bpf" + bpfCounter);
    bpfCounter += 1;
  }
}
