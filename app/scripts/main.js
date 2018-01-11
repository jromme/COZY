jQuery(document).ready(() => {
  switch(window.location.pathname) {

    //localhost
    case '/':
      routeLanding()
    break;

    case '/06_temperatuur/index.html':
      routeTemperature()
      kalender()
    break;

    default:
      console.error('Location not found')
  }
})

const routeLanding = () => {
  setTimeout(function () { window.location.pathname = '/02_inlog/index.html'; }, 2000);
}

const routeTemperature = () => {
  $('.dial').knob({
    'min': 7,
    'max': 31,
    'change' : function(v){
      $('.temperatuur-value').text(Math.round(v));
    }
  })
}

const kalender = () => {
  $('#calendar').datepicker({
        inline: true,
        firstDay: 1,
        prevText: '◄',
        nextText: '►',
        showOtherMonths: true,
        dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  })
}

 