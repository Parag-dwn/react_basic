import React from 'react'

const Contact = () => {
  return (
    <div className="contact">

    <main>
        <h1>
        Contact Us</h1>

        <form>
        <div>
        <label>Name</label>
        <input type="text" required placeholder='Abc'/>
        </div>
        <div>
        <label>Message</label>
        <input type="text" required placeholder='Tell us about your query...'/>
        </div>
        <div>
        <label>Email</label>
        <input type="email" required placeholder='Email_id...'/>
        </div>
<button type='submit'>Send</button>
        
        </form>
    </main>
      Contact
    </div>
  )
}

export default Contact