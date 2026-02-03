const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth:{
        user:'anshulkashyap118@gmail.com',
        pass:'ddyq jczi gujz jbbl'
  }
});
const mailOptions={
  from:'anshulkashyap118@gmail.com',
  to:'anshulkumar.118.ak@gmail.com',
  subject: 'test mail',
  text:'Hello anshul'
};
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});