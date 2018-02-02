/**
 * EmailController
 *
 * @description :: Server-side logic for managing emails
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    enviarContactForm: function (req, res) {
        Mailer.sendContactForm(req.body);
        console.log(req.body); 
        res.ok({
            mailSent: true,
          });
        
        
    }
};

