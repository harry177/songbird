import "./index.html";
import "./index.css";



let signalWrapper = document.createElement('a');
signalWrapper.className = "wrapper";
signalWrapper.href = "./game.html";
document.body.append(signalWrapper);

let signal = document.createElement("div");
signal.className = "bird";
signalWrapper.append(signal);

