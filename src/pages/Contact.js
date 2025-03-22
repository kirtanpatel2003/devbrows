// // import React, { useState } from "react";
// // import emailjs from "emailjs-com";
// // import PhoneInput from "react-phone-input-2";
// // import "react-phone-input-2/lib/style.css";
// // import "./Contact.css"; // Updated styles

// // const ContactForm = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     contactMethod: "email", // Default to email
// //     message: "",
// //   });

// //   const [errors, setErrors] = useState({});

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handlePhoneChange = (value) => {
// //     setFormData({ ...formData, phone: value });
// //   };

// //   const handleMethodChange = (method) => {
// //     setFormData({ ...formData, contactMethod: method });
// //   };

// //   const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
// //   const validatePhone = (phone) => phone.replace(/\D/g, "").length >= 7;

// //   const validateForm = () => {
// //     let validationErrors = {};

// //     if (!formData.name) validationErrors.name = "Name is required";
// //     if (!validateEmail(formData.email) && !validatePhone(formData.phone)) {
// //       validationErrors.contact = "Provide at least a valid email or phone number";
// //     }
// //     if (!formData.message) validationErrors.message = "Message is required";

// //     if (Object.keys(validationErrors).length > 0) {
// //       setErrors(validationErrors);
// //       return false;
// //     }
// //     setErrors({});
// //     return true;
// //   };

// //   const sendEmail = (e) => {
// //     e.preventDefault();
// //     if (!validateForm()) return;

// //     const timestamp = new Date().toLocaleString();

// //     emailjs
// //       .send(
// //         process.env.REACT_APP_EMAILJS_SERVICE_ID,
// //         process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
// //         {
// //           name: formData.name,
// //           email: formData.email,
// //           phone: formData.phone,
// //           contactMethod: formData.contactMethod,
// //           message: formData.message,
// //           time: timestamp,
// //         },
// //         process.env.REACT_APP_EMAILJS_PUBLIC_KEY
// //       )
// //       .then(
// //         (result) => {
// //           console.log("Email sent!", result.text);
// //           alert("Your message has been sent!");
// //           setFormData({ name: "", email: "", phone: "", contactMethod: "email", message: "" });
// //         },
// //         (error) => {
// //           console.log("Failed to send email:", error.text);
// //           alert("Error sending message. Please try again.");
// //         }
// //       );
// //   };

// //   return (
// //     <div className="contact-container">
// //       <h2>Contact Us</h2>
// //       <form onSubmit={sendEmail}>
// //         <label>Name:</label>
// //         <input
// //           type="text"
// //           name="name"
// //           placeholder="John Doe"
// //           value={formData.name}
// //           onChange={handleChange}
// //         />
// //         {errors.name && <p className="error">{errors.name}</p>}

// //         <label>Email:</label>
// //         <input
// //           type="email"
// //           name="email"
// //           placeholder="example@email.com"
// //           value={formData.email}
// //           onChange={handleChange}
// //         />

// //         <label>Phone Number:</label>
// //         <PhoneInput
// //           country={"us"}
// //           value={formData.phone}
// //           onChange={handlePhoneChange}
// //           inputStyle={{ width: "100%" }}
// //         />
// //         {errors.contact && <p className="error">{errors.contact}</p>}

// //         <label>Preferred Contact Method:</label>
// //         <div className="contact-method-capsules">
// //           {["email", "phone"].map((method) => (
// //             <button
// //               type="button"
// //               key={method}
// //               className={formData.contactMethod === method ? "capsule selected" : "capsule"}
// //               onClick={() => handleMethodChange(method)}
// //             >
// //               {method === "email" ? "Email" : "Phone"}
// //             </button>
// //           ))}
// //         </div>

// //         <label>Message:</label>
// //         <textarea
// //           name="message"
// //           placeholder="Tell us what you need..."
// //           value={formData.message}
// //           onChange={handleChange}
// //         />
// //         {errors.message && <p className="error">{errors.message}</p>}

// //         <button type="submit">Send Message</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default ContactForm;


// import React, { useState } from "react";
// import emailjs from "emailjs-com";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import "./Contact.css"; // Updated styles

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     contactMethod: "email", // Default to email
//     message: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handlePhoneChange = (value) => {
//     setFormData({ ...formData, phone: value });
//   };

//   const handleMethodChange = (method) => {
//     setFormData({ ...formData, contactMethod: method });
//   };

//   const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
//   const validatePhone = (phone) => phone.replace(/\D/g, "").length >= 7;

//   const validateForm = () => {
//     let validationErrors = {};

//     if (!formData.name) validationErrors.name = "Name is required";
//     if (!validateEmail(formData.email) && !validatePhone(formData.phone)) {
//       validationErrors.contact = "Provide at least a valid email or phone number";
//     }
//     if (!formData.message) validationErrors.message = "Message is required";

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return false;
//     }
//     setErrors({});
//     return true;
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     const timestamp = new Date().toLocaleString();

//     emailjs
//       .send(
//         process.env.REACT_APP_EMAILJS_SERVICE_ID,
//         process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
//         {
//           name: formData.name,
//           email: formData.email,
//           phone: formData.phone,
//           contactMethod: formData.contactMethod,
//           message: formData.message,
//           time: timestamp,
//         },
//         process.env.REACT_APP_EMAILJS_PUBLIC_KEY
//       )
//       .then(
//         (result) => {
//           console.log("Email sent!", result.text);
//           alert("Your message has been sent!");
//           setFormData({ name: "", email: "", phone: "", contactMethod: "email", message: "" });
//         },
//         (error) => {
//           console.log("Failed to send email:", error.text);
//           alert("Error sending message. Please try again.");
//         }
//       );
//   };

//   return (
//     <div className="contact-container">
//       <h2>Contact Us</h2>
//       <form onSubmit={sendEmail}>
//         <label>Name:</label>
//         <input
//           type="text"
//           name="name"
//           placeholder="John Doe"
//           value={formData.name}
//           onChange={handleChange}
//         />
//         {errors.name && <p className="error">{errors.name}</p>}

//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           placeholder="example@email.com"
//           value={formData.email}
//           onChange={handleChange}
//         />

//         <label>Phone Number:</label>
//         <PhoneInput
//           country={"us"}
//           value={formData.phone}
//           onChange={handlePhoneChange}
//           inputStyle={{
//             background: "black", // Match dark theme
//             color: "white", // Ensure input text is white
//             border: "1px solid #444",
//             width: "100%",
//           }}
//           buttonStyle={{
//             background: "black", // Dropdown background
//             color: "white", // Ensure dropdown text is white
//           }}
//           dropdownStyle={{
//             background: "#222", // Dark dropdown background
//             color: "white", // White text
//           }}
//           containerStyle={{ width: "100%" }}
//           disableDropdown={false} // Keep dropdown functional
//           enableAreaCodes={true} // Allow area codes
//           enableSearch={true} // Allow searching countries
//         />
//         {errors.contact && <p className="error">{errors.contact}</p>}

//         <label>Preferred Contact Method:</label>
//         <div className="contact-method-capsules">
//           {["email", "phone"].map((method) => (
//             <button
//               type="button"
//               key={method}
//               className={formData.contactMethod === method ? "capsule selected" : "capsule"}
//               onClick={() => handleMethodChange(method)}
//             >
//               {method === "email" ? "Email" : "Phone"}
//             </button>
//           ))}
//         </div>

//         <label>Message:</label>
//         <textarea
//           name="message"
//           placeholder="Tell us what you need..."
//           value={formData.message}
//           onChange={handleChange}
//         />
//         {errors.message && <p className="error">{errors.message}</p>}

//         <button type="submit">Send Message</button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;


import React, { useState } from "react";
import emailjs from "emailjs-com";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Contact.css"; // Updated styles

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    contactMethod: "email", // Default to email
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleMethodChange = (method) => {
    setFormData({ ...formData, contactMethod: method });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePhone = (phone) => phone.replace(/\D/g, "").length >= 7;

  const validateForm = () => {
    let validationErrors = {};

    if (!formData.name) validationErrors.name = "Name is required";
    if (!validateEmail(formData.email) && !validatePhone(formData.phone)) {
      validationErrors.contact = "Provide at least a valid email or phone number";
    }
    if (!formData.message) validationErrors.message = "Message is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const timestamp = new Date().toLocaleString();

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          contactMethod: formData.contactMethod,
          message: formData.message,
          time: timestamp,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent!", result.text);
          alert("Your message has been sent!");
          setFormData({ name: "", email: "", phone: "", contactMethod: "email", message: "" });
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          alert("Error sending message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={sendEmail}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="example@email.com"
          value={formData.email}
          onChange={handleChange}
        />

        <label>Phone Number:</label>
        <PhoneInput
          country={"us"}
          value={formData.phone}
          onChange={handlePhoneChange}
          inputStyle={{
            background: "black",
            color: "white",
            border: "1px solid #444",
            width: "100%",
          }}
          buttonStyle={{
            background: "black",
            color: "white",
          }}
          dropdownStyle={{
            background: "#222",
            color: "white",
          }}
          containerStyle={{ width: "100%" }}
          disableDropdown={false}
          enableSearch={true}
          onlyCountries={[
            "us", "gb", "in", "ca", "au", "de", "fr", "it", "es", "jp", "cn", "br", "mx", "za",
            "ae", "ru", "kr", "nl", "se", "ch", "sg"
          ]} // **Restricts the dropdown to unique country codes**
        />
        {errors.contact && <p className="error">{errors.contact}</p>}

        <label>Preferred Contact Method:</label>
        <div className="contact-method-capsules">
          {["email", "phone"].map((method) => (
            <button
              type="button"
              key={method}
              className={formData.contactMethod === method ? "capsule selected" : "capsule"}
              onClick={() => handleMethodChange(method)}
            >
              {method === "email" ? "Email" : "Phone"}
            </button>
          ))}
        </div>

        <label>Message:</label>
        <textarea
          name="message"
          placeholder="Tell us what you need..."
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p className="error">{errors.message}</p>}

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
