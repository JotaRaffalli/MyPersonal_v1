module.exports.sendContactForm = async function(obj) {
    sails.hooks.email.send(
    "contactTemplate", 
    {
    nombre: obj.nombre,
    apellido: obj.apellido,
    email: obj.email,
    subject: obj.subject,
    mensaje: obj.message
    },
    {
    to: "raffallijoseluis@gmail.com",
    subject: "Contacto Página Personal "+obj.apellido
    },
    function(err) {console.log(err || "Mail Sent!");}
    )
   }