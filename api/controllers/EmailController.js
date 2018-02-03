/**
 * EmailController
 *
 * @description :: Server-side logic for managing emails
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    enviarContactForm: function (req, res) {
        Mailer.sendContactForm(req.allParams());
        console.log(req.allParams()); 
        console.log(req.param('obj')); 
        
        res.ok({
            mailSent: true,
          });
        
        
    }
};

