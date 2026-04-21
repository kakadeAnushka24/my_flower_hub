import React from "react";

function Contact() {
  return (
    <div>
      <style>{`
        .container {
          max-width: 500px;
          margin: 40px auto;
          padding: 20px;
          background-color: #e9d3b9;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          text-align: center;
        }

        h1 {
          color: #3f2d0b;
          margin-bottom: 10px;
        }

        p {
          margin: 5px 0;
          color: #333;
        }

        .form-section {
          margin-top: 20px;
        }

        h2 {
          margin-bottom: 10px;
          color: #7b4c26;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        input, textarea {
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 14px;
        }

        textarea {
          resize: none;
          height: 100px;
        }

        button {
          padding: 10px;
          border: none;
          background-color: #4b6b46;
          color: white;
          border-radius: 6px;
          cursor: pointer;
          font-size: 15px;
        }

        button:hover {
          background-color: #314b4f;
        }
      `}</style>

      <div className="container">
        <h1>Contact Us</h1>

        <p>Email: myflowershop@gmail.com</p>
        <p>Phone: +91 76894 56789</p>
        <p>Address: Pune, Maharashtra, India</p>

        <div className="form-section">
          <h2>Send Us a Message</h2>

          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;