import { useEffect, useState } from 'react';

// Third Party Imports
import emailjs from '@emailjs/browser';

// Components
import TextArea from './TextArea';
import InputField from './InputField';

function ContactForm() {

    const [values, setValues] = useState({
        // Must ALL be the same as corresponding 'name' values in below JSX tags
        fullName: '',
        email: '',
        role: '',
        message: '',
      });
    
      const [status, setStatus] = useState('');
    
      console.log(values);
    
      const handleSubmit = (e) => {
        // Enables browser to NOT reload on submit
        e.preventDefault();
        emailjs
          .send('service_l9rndbt', 'template_2164cqf', values, 'x-fNIW7YWM2GGraUP')
          .then(
            (response) => {
              console.log('SUCCESS!', response);
              setValues({
                fullName: '',
                email: '',
                role: '',
                message: '',
              });
              setStatus('SUCCESS');
            },
            (error) => {
              console.log('FAILED....', error);
            }
          );
      };
    
      useEffect(() => {
        if (status === 'SUCCESS') {
          setTimeout(() => {
            setStatus('');
          }, 3000);
        }
      }, [status]);
    
      const handleChange = (e) => {
        setValues((values) => ({
          // Grabs ALL values
          ...values,
          [e.target.name]: e.target.value,
        }));
      };

  return (
    <div>
        {status && renderAlert()}
        <form onSubmit={handleSubmit}>
            <InputField 
                value={values.fullName}
                handleChange={handleChange}
                label="Name"
                name="fullName"
                type="text"
                placeholder="John Doe"
            />
            <InputField
                value={values.email}
                handleChange={handleChange}
                label="Email"
                name="email"
                type="email"
                placeholder="john@example.com"
            />
            <TextArea
                value={values.message}
                handleChange={handleChange}
                label="Message"
                name="message"
            />
            <button 
                type="submit"
                class="text-white bg-red border-0 py-2 px-6 focus:outline-none hover:shadow-lg rounded text-lg">
                    Send {' '}
            </button>
        </form>
    </div>
  )
}

const renderAlert = () => (
    <div className="px-4 py-1 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
      <p>Message successfully sent!</p>
    </div>
  );

export default ContactForm;