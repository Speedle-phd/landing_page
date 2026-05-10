
console.log("I love Nadine so much!")

let cursorDot = document.querySelector(".cursor-dot") as HTMLElement | null;

document.addEventListener("mouseover", (e) => {
   if (cursorDot) return
   cursorDot = document.createElement("div");
   cursorDot.classList.add("cursor-dot");
   document.body.appendChild(cursorDot);
});

document.addEventListener("mousemove", (e) => {
   if (!cursorDot) return
   cursorDot.style.left = `${e.clientX}px`;
   cursorDot.style.top = `${e.clientY}px`;
})

document.addEventListener("mouseout", (e) => {
   if (!cursorDot) return
   cursorDot.remove();
   cursorDot = null;
})