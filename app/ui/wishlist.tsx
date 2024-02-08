'use client';

import Button from "./button";
import ButtonSec from "./buttonsec";
import WishlistItems from "./wishlist-items";
import ContactForm from "./contact-form";
import { useState } from "react";

export default function Wishlist() {

  const [formSuccess, setFormSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInput = (e: any) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }))
  }

  const submitForm = (e: any) => {
    // We don't want the page to refresh
    e.preventDefault()

    const formURL = e.target.action
    const data = new FormData()

    // Turn our formData state into data we can use with a form submission
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    })

    // POST the data to the URL of the form
    fetch(formURL, {
      method: "POST",
      body: data,
      headers: {
        'accept': 'application/json',
      },
    }).then(() => {
      setFormData({
        name: "",
        email: "",
        message: ""
      })
      setFormSuccess(true);
    })
  }

  const wishlistItems = <WishlistItems />;

  const contactForm =
    <div className="flex flex-col gap-6">
      <div>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">name</label>
          <input type="text" name="name" id="name" placeholder="your name" onChange={handleInput} value={formData.name} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">email</label>
          <input type="email" name="email" id="email" placeholder="Enter your email" onChange={handleInput} value={formData.email} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message">more details</label>
          <textarea name="message" id="message" onChange={handleInput} value={formData.message}></textarea>
        </div>
      </div>
    </div>

  const [title, setTitle] = useState("Your Wish List");
  const [content, setContent] = useState(wishlistItems);
  const [step, setStep] = useState(0);

  function handleNext() {
    setTitle("Contact Details");
    setContent(contactForm);

    setStep(1);
  }

  function handleBack() {
    setTitle("Your Wish List");
    setContent(wishlistItems);

    setStep(0);
  }


  return (

    <div className="light flex flex-col gap-6 py-16 px-2 md:px-20 lg:px-40 justify-center items-center overflow-y-b-clip rounded-3xl bg-background border border-transparentbg shadow-innerwhole">

      <div className="flex flex-col gap-4 justify-center items-center">
        <h2 className="text-center">What are your design needs?</h2>
        <p className="text-sm font-medium text-center text-caption">Our aim is to understand your unique vision and goals, and tailor our design services to suit your needs in the ever-evolving landscape of Web3 and blockchain technology.</p>
      </div>

      <form method="POST" action="" onSubmit={submitForm} className="flex flex-col gap-6 px-4 md:px-8 py-6 max-w-screen-sm min-h-content bg-bodybg/[64%] backdrop-blur-md shadow-xl border border-transparentbg rounded-3xl" >
        {formSuccess ?
          <div>Form submitted</div>
          :
          <>
            <div className="flex pb-4 border-b border-transparentbg">
              <h4>{title}</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-auto flex-start gap-6">
              {content}
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full">
              {(step === 0) ?
                <div className="flex grow">
                  <button type="button" onClick={handleNext} className="flex grow buttonBG transition-all justify-center items-center p-0.5 rounded-full w-full overflow-hidden shadow-whitepers active:shadow-none">
                    <div className="flex transition-all justify-center items-center px-16 py-4 bg-bodybg w-full rounded-full text-label hover:bg-bodybg/[0.96] text-sm font-semibold">
                      <span className="inline">Button next</span>
                    </div>
                  </button>
                </div>

                :
                <>
                  <div className="flex">
                    <button type="button" onClick={handleBack} className="flex transition-all justify-center items-center px-16 py-4 text-label bg-bodybg hover:bg-transparentbg text-sm font-semibold rounded-full w-full overflow-hidden border border-transparentbg">
                      <span className="inline">Back</span>
                    </button>
                  </div>

                  <div>
                    <button type="submit" className="flex buttonBG transition-all justify-center items-center p-0.5 rounded-full w-full overflow-hidden shadow-whitepers active:shadow-none">
                      <div className="flex transition-all justify-center items-center px-16 py-4 bg-bodybg w-full rounded-full text-label hover:bg-bodybg/[0.96] text-sm font-semibold">
                        <span className="inline">Validate my wishlist</span>
                      </div>
                    </button>
                  </div>
                </>
              }

            </div>
          </>
        }

      </form>
    </div>
  );
}