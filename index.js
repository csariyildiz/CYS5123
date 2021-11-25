const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var geoip = require('geoip-lite');
const requestIp = require('request-ip');



var app = express();
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')



app.get('/', (req, res) => res.render('pages/index', { 
  
  // User IP Address
  requestIP: requestIp.getClientIp(req),
  // Current Location Determined By IP Address
  geoIP: geoip.lookup(requestIp.getClientIp(req)).country + " " + 
  geoip.lookup(requestIp.getClientIp(req)).timezone,// geoip.allData(requestIp.getClientIp(req)),
  

  
}))



app.listen(PORT, () => console.log(`Listening on ${ PORT }`))


