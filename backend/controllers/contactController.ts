import {Request, Response} from 'express';
import  htmlspecialchars from 'htmlspecialchars';
import nodemailer from 'nodemailer';
export default class ContactController {

name: srting;
mail: string;
subject: string;
message: string;
date: date;

    static get(request: Request, response: Response) {

        response.status(200).json({
                                    text: "Hi from Contact"
                                   });

           console.log("Hello from contact");
    }

    static post(request: Request, response: Response) {

    let date = new Date();
    let {name, mail, subject, message}  = request.body;

    console.log(name, mail, subject, message, date);
    
        mail = mail.replace(/ /g,"");


        name= htmlspecialchars(name);
        mail = htmlspecialchars(mail);
        subject = htmlspecialchars(subject);
        message = htmlspecialchars(message);
        
         if (!name || !mail || !subject || !message) {
         
                      response.status(400).json({
                                                 text: "Requête invalide"
                                                 });       
                    
                     
                                               
          } 
          

          const regex = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
          const regexMail = regex.test(mail);
         
           if (!regexMail) {
             response.status(400).json({
                                         text: "Format d'adresse e-mail invalide"
                                        });   
            }
          /* var mailOptions = {
           from: mail,
           to: "melinda93@hotmail.fr",
           subject: subject,
           text: message,
           html: '<b>' + message + '</b>'
          };

          const transporter = nodemailer.createTransport({
               service: 'hotmail', // no need to set host or port etc.
                auth: {
                      user: 'melinda93@hotmail.fr',
                      pass: ''
                  },
                   tls: {
                  rejectUnauthorized: false
              }
          });
          transporter.sendMail(mailOptions, function(error, info){
               if(error){
                  return console.log(error);
               }
               console.log('Message sent: ' + info.response);
          });
          


          transporter.close();*/
          response.status(200).json({
                                    text: "contact post ok"
                                   });

           console.log("contact post ok");
    }
}