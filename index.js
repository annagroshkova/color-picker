document.querySelector('.header__form').addEventListener('submit', (evt) => {
  evt.preventDefault();
  const { color, mode } = Object.fromEntries(new FormData(evt.target).entries());

  fetch(`https://www.thecolorapi.com/scheme?hex=${color.slice(1)}&format=json&mode=${mode}&count=5`)
      .then(res => res.json())
      .then(data => {
        data.colors.forEach((color, index) => {
          const { value } = color.hex
          document.querySelector(`.color-${index}`).style.backgroundColor = value;
          document.querySelector(`.hex-value-${index}`).textContent = value;
        })
      })
})