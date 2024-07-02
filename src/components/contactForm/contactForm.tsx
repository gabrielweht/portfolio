
import './contactForm.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export function ContactForm() {
  const [click, setClick] = useState(false);
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
  });
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const refForm = useRef<HTMLFormElement>(null);

  function validate() {
    const newErrors = { ...errors };

    if (!inputs.firstName) newErrors.firstName = true;
    if (!inputs.lastName) newErrors.lastName = true;
    if (!inputs.email || !emailRegex.test(inputs.email)) newErrors.email = true;

    return newErrors;
  }

  function handleInputChange(e: any) {
    const newInput = {
      ...inputs,
      [e.target.name]: e.target.value,
    };
    setInputs(newInput);
    setErrors({
      ...errors,
      [e.target.name]: false,
    });
  }

  function handleSubmit(event: any) {
    event.preventDefault();

    setErrors({
      firstName: false,
      lastName: false,
      email: false,
    });

    const validation = validate();

    setErrors({ ...validation });

    if (
      !validation.firstName &&
      !validation.lastName &&
      !validation.email
    ) {
      emailjs
        .sendForm(
          'service_wwflbyf',
          'template_4byuwug',
          refForm.current || '',
          {
            publicKey: 'ThLmphPvc0-dp6Vwt',
          }
        )
        .then((result: any) => {
          if (result.status === 200) {
            setClick(true);
            setInputs({
              firstName: '',
              lastName: '',
              email: '',
            });
            setMessage('');
            setTimeout(() => {
              setClick(false);
            }, 4000);
          }
        })
        .catch((error: string) => console.error(error));
    }
  }

  function scrollToElement(element: any) {
    if (window.innerWidth <= 991) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  }

  return (
    <>
      {click ? (
        <div className="messageSent">
          <p className="pSentMessage">Message sent</p>
        </div>
      ) : undefined}
      <form
        ref={refForm}
        action=""
        onSubmit={handleSubmit}
        className="formStyles"
      >
        <div className="divNameForm">
          <fieldset className="fieldsetStyles marginRight">
            <label
              htmlFor=""
              className={`labelStyles ${errors.firstName ? 'labelError' : undefined}`}
            >
              First name*
            </label>
            <input
              name="firstName"
              type="text"
              spellCheck="false"
              value={inputs.firstName}
              onChange={handleInputChange}
              onFocus={event => scrollToElement(event.target)}
              placeholder="John"
              className={`inputStylesName ${errors.firstName ? 'inputStyleError' : undefined}`}
            />
          </fieldset>
          <fieldset className="fieldsetStyles">
            <label
              htmlFor=""
              className={`labelStyles ${errors.lastName ? 'labelError' : undefined}`}
            >
              Last name*
            </label>
            <input
              name="lastName"
              type="text"
              spellCheck="false"
              value={inputs.lastName}
              onChange={handleInputChange}
              onFocus={event => scrollToElement(event.target)}
              placeholder="Smith"
              className={`inputStylesName ${errors.lastName ? 'inputStyleError' : undefined}`}
            />
          </fieldset>
        </div>
        <fieldset className="fieldsetStyles">
          <label
            htmlFor=""
            className={`labelStyles ${errors.email ? 'labelError' : undefined}`}
          >
            Email*
          </label>
          <input
            type="text"
            name="email"
            spellCheck="false"
            value={inputs.email}
            onChange={handleInputChange}
            onFocus={event => scrollToElement(event.target)}
            placeholder="example@example.com"
            className={`inputStyles ${errors.email ? 'inputStyleError' : undefined}`}
          />
        </fieldset>
        <fieldset className="fieldsetStyles">
          <label htmlFor="" className="labelStyles">
            Message
          </label>
          <textarea
            name="message"
            className="textAreaMessage"
            value={message}
            onChange={event => setMessage(event.target.value)}
            onFocus={event => scrollToElement(event.target)}
            placeholder="Write here your message..."
          ></textarea>
        </fieldset>
        <button className={'btnStyles'}>
          Submit
        </button>
        {errors.firstName ||
        errors.lastName ||
        errors.email ? (
            <p className="errorText">* Required fields.</p>
          ) : (
            <div className="errorDiv"></div>
          )}
      </form>
    </>
  );
}
