$(document).ready(() => {
  switch(window.location.href) {
    case 'http://localhost:9000/':
      routeLanding()
    break;

    case 'http://localhost:9000/pages/06_temperatuur/index.html':
      routeTemperature()
    break;

    default:
      console.error('Location not found')
  }
})

const routeLanding = () => {
  setTimeout(function () { window.location.href = "/pages/02_inlog/index.html"; }, 2000);
}

const routeTemperature = () => {
  $('.dial').knob({
    'min': -50,
    'max': 50,
    'value': 75,
  })
}