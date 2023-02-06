const axios=require('axios')
const fs=require('fs')
var nodemailer = require('nodemailer');

const endpoint='https://api.nasa.gov/planetary/apod'

 axios.get(endpoint, {
    params:{
        api_key: 'DEMO_KEY'
    }
})
.then(response=>{
    console.log(response.data)

    let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'YOUR_EMAIL',
    pass: 'YOUR_PASSWORD'
  }
});

let mailOptions = {
  from: 'YOUR_EMAIL',
  to: 'DESTINATION_EMAIL',
  subject: 'Astronomy Photo of the Day',
  text: `${response.data.explanation}`,
  html: `<img src=${response.data.url} width="100%"/><p>${response.data.explanation}</p><a href="https://apod.nasa.gov/apod/astropix.html"> More Information </a>`
};

  transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

})
.catch(error=>{
    console.log(error)
})

