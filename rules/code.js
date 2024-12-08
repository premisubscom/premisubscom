alert("Dynamic code executed successfully!");
console.log("Dynamic script executed: Hello, World!");

const newDiv = document.createElement("div");
newDiv.textContent = "Hello from the dynamically loaded script!";
newDiv.style.fontSize = "20px";
newDiv.style.color = "blue";
document.body.appendChild(newDiv);
