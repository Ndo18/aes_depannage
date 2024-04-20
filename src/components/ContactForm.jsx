
function ContactForm(){
    return(
        <div id='Contact' className='formulaire'>
        <h3>Contactez-nous :</h3>
        <form className='contactform'>
          <label>Nom</label>
          <input type="text" name="user_name" placeholder='Votre nom'/>
          <label>Email</label>
          <input type="email" name="user_email" placeholder='Votre email'/>
          <label>Message</label>
          <textarea name="message" placeholder='Écrivez votre message'/>
          <input type="submit" value="Envoyer" className='submitbutton'/>
        </form>
          <div className="msgonsubmit">
        {/* {error && <p className="error">{error}</p>}
        {success && <p className="success">Votre message a bien été envoyé !</p>} */}
          </div>
      </div>
    )
}
export default ContactForm