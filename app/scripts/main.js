jQuery(document).ready(() => {
  switch(window.location.href) {

    //localhost
    case 'http://localhost:9000/':
      routeLanding()
    break;

    case 'http://localhost:9000/pages/06_temperatuur/index.html':
      routeTemperature()
      kalender()
    break;

    //adding netlify
    case 'http://wonderful-davinci-ae1597.netlify.com/':
      routeLanding()
    break;

    case 'http://wonderful-davinci-ae1597.netlify.com/pages/06_temperatuur/index.html':
      routeTemperature()
      kalender()
    break;

    default:
      console.error('Location not found')
  }
})

const routeLanding = () => {
  setTimeout(function () { window.location.href = '/pages/02_inlog/index.html'; }, 2000);
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

 