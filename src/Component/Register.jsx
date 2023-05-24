import React from 'react';
import './css/Register.css';

function App() {
  const openModal = (modalId) => {
    document.getElementById(modalId).style.display = 'block';
  };

  const closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'none';
    }
  };

  const handleOutsideClick = (event) => {
    if (event.target.className === 'modal') {
      event.target.style.display = 'none';
    }
  };

  return (
    <div>
      <h2>Multiple Popup Forms</h2>
      <p>
        <button className="button" onClick={() => openModal('modalOne')}>
          Contact Us
        </button>
      </p>
      <p>
        <button className="button" onClick={() => openModal('modalTwo')}>
          Send a Complaint Form
        </button>
      </p>
      <div id="modalOne" className="modal" onClick={handleOutsideClick}>
        <div className="modal-content">
          <div className="contact-form">
            <span className="close" onClick={() => closeModal('modalOne')}>
              &times;
            </span>
            <form action="/">
              <h2>Contact Us</h2>
              <div>
                <input className="fname" type="text" name="name" placeholder="Full name" />
                <input type="text" name="name" placeholder="Email" />
                <input type="text" name="name" placeholder="Phone number" />
                <input type="text" name="name" placeholder="Website" />
              </div>
              <span>Message</span>
              <div>
                <textarea rows="4"></textarea>
              </div>
              <button type="submit" href="/">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div id="modalTwo" className="modal" onClick={handleOutsideClick}>
        <div className="modal-content">
          <div className="contact-form">
            <span className="close" onClick={() => closeModal('modalTwo')}>
              &times;
            </span>
            <form action="/">
              <h2>Complaint form</h2>
              <div>
                <input className="fname" type="text" name="name" placeholder="Full name" />
                <input type="text" name="name" placeholder="Email" />
                <input type="text" name="name" placeholder="Phone number" />
                <input type="text" name="name" placeholder="Website" />
              </div>
              <span>Message</span>
              <div>
                <textarea rows="4"></textarea>
              </div>
              <button type="submit" href="/">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
