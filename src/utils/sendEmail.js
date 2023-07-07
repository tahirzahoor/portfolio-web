import emailjs from 'emailjs-com';

const sendEmail = (data) => {
    const templateParams = {
      message: data.thoughts,
      name:data.name,
      email_address:data.email
    };
  
    emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_USER_ID
    )
      .then(() => {
        console.log("Email sent successfully");
      })
      .catch((error) => {
       console.log(error.message);
      });
  };
export default sendEmail  