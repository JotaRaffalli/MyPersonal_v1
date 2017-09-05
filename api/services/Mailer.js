module.exports.sendContactForm = function(obj) {
    sails.hooks.email.send(
    "contactTemplate", 
    {
    nombre: obj.nombre,
    apellido: obj.apellido,
    email: obj.email,
    subject: obj.subject,
    mensaje: obj.mensaje
    },
    {
    to: "raffallijoseluis@gmail.com",
    subject: "CONTACTO: Email de Pagina Personal"
    },
    function(err) {console.log(err || "Mail Sent!");}
    )
   }