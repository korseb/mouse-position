const containerEl = document.querySelector('.container');

window.addEventListener("mousemove", (event) =>{
    containerEl.innerHTML = `
    <div class="mouse-event">
        ${event.clientX}
        <h4>Pozycja myszki na osi X (px)</h4>
      </div>
      <div class="mouse-event">
        ${event.clientY}
        <h4>Pozycja myszki na osi Y (px)</h4>
      </div>
      `
})