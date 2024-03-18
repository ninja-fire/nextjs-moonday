'use client';

import Button from "./button";
import ButtonSec from "./buttonsec";
import WishlistItems from "./wishlist-items";
import ContactForm from "./contact-form";
import { useState } from "react";
import Image from "next/image";
import gradient from "../../public/gradient.png";
import planet from "../../public/planet.png";
import Link from "next/link";

export default function Wishlist() {

  const [formSuccess, setFormSuccess] = useState(false);

  const [title, setTitle] = useState("Your Wish List");
  const [step, setStep] = useState(0);
  const [inputs, setInputs] = useState({
    surname: "",
    email: "",
    message: "",
    telegram: "",
  });

  function handleNext() {
    setTitle("Contact Details");
    setStep(1);
  }

  function handleBack() {
    setTitle("Your Wish List");
    setStep(0);
  }

  const submitForm = (e: any) => {
    // We don't want the page to refresh
    e.preventDefault()

    const formURL = e.target.action
    const data = new FormData()

    // Turn our formData state into data we can use with a form submission
    Object.entries(inputs).forEach(([key, value]) => {
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
      setInputs({
        surname: "",
        email: "",
        message: "",
        telegram: ""
      })
      setFormSuccess(true);
    })
  }

  return (

    <div className="relative flex flex-col gap-6 py-16 px-2 md:px-20 lg:px-40 justify-center items-center overflow-y-b-clip overflow-hidden rounded-3xl bg-background border border-transparentbg shadow-innerwhole">
      <Image priority={false} src={gradient} alt="" width={1080} height={1080} className="flex absolute max-w-[64px] h-full -left-16 blur-2xl -z-1" />


      <div className="flex flex-col gap-4 justify-center items-center">
        <h2 className="text-center">What are your design needs?</h2>
        <p className="text-sm font-medium text-center text-caption md:max-w-[80%]">Our aim is to understand your unique vision and goals, and tailor our design services to suit your needs in the ever-evolving landscape of Web3 and blockchain technology.</p>
      </div>

      <form method="POST" action="" onSubmit={submitForm} className="flex flex-col justify-between px-4 md:px-8 py-6 max-w-screen-sm min-w-[80%] min-h-[64vh] bg-bodybg/[64%] backdrop-blur-md shadow-xl border border-transparentbg rounded-3xl" >
        {formSuccess ?
          <div className="flex flex-col h-full gap-8 items-center justify-center">
            <h4>Your request has been submitted!</h4>
            <Image priority src={planet} alt="" width={960} height={960} className="flex w-80" />
            <p className="text-sm font-medium text-center text-caption">Your message has been sent successfully. We'll get back to you as soon as possible. In the meantime, feel free to explore more of our work and services.</p>
            <Link href='/projects' className="flex buttonBG transition justify-center items-center p-0.5 rounded-full w-full overflow-hidden shadow-whitepers active:shadow-none">
              <div className="flex transition-all justify-center items-center px-16 py-4 bg-bodybg w-full rounded-full text-label hover:bg-bodybg/[0.96] text-sm font-semibold">
                <span className="inline">Discover our work</span>
              </div>
            </Link>
          </div>
          :
          <>
            <div className="flex pb-4 border-b border-transparentbg">
              <h4>{title}</h4>
            </div>
            <div className="flex flex-start gap-6 w-full">
              {step === 1 ?
                <div className="flex flex-col gap-6 w-full">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-label" htmlFor="surname">Your name</label>
                    <input className="appearance-none forced-colors:appearance-auto flex px-4 py-3 text-xs font-medium text-label rounded-md bg-background hover:bg-transparentbg/[0.01] border border-transparentbg hover:border-placeholder focus-visible:border-label outline-0 ring-0"
                      type="text" name="surname" required id="surname" placeholder="John Doe" value={inputs.surname} onChange={e => { setInputs({ ...inputs, surname: e.target.value }); }} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-label" htmlFor="email">Your email</label>
                    <input className="flex px-4 py-3 text-xs font-medium text-label rounded-md bg-background hover:bg-transparentbg/[0.01] border border-transparentbg hover:border-placeholder focus-visible:border-label outline-0 ring-0"
                     required type="email" name="email" id="email" placeholder="johndoe@mail.com" value={inputs.email} onChange={e => { setInputs({ ...inputs, email: e.target.value }); }} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-label" htmlFor="telegram">Your telegram handle</label>
                    <input className="flex px-4 py-3 text-xs font-medium text-label rounded-md bg-background hover:bg-transparentbg/[0.01] border border-transparentbg hover:border-placeholder focus-visible:border-label outline-0 ring-0"
                      type="text" name="telegram" id="telegram" placeholder="@johndoe" value={inputs.telegram} onChange={e => { setInputs({ ...inputs, telegram: e.target.value }); }} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-label" htmlFor="message">Describe your needs</label>
                    <textarea className="flex px-4 py-3 text-xs font-medium text-label min-h-32 rounded-md bg-background hover:bg-transparentbg/[0.01] border border-transparentbg hover:border-placeholder focus-visible:border-label outline-0 ring-0"
                      name="message" id="message" value={inputs.message} onChange={e => { setInputs({ ...inputs, message: e.target.value }); }}></textarea>
                  </div>
                </div>
                :
                <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-auto flex-start gap-6 h-full py-8"><WishlistItems /></div>
                
              }
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full">
              {(step === 0) ?
                <div className="flex grow">
                  <button type="button" onClick={handleNext} className="flex grow buttonBG transition justify-center items-center p-0.5 rounded-full w-full overflow-hidden shadow-whitepers active:shadow-none">
                    <div className="flex transition-all justify-center items-center px-16 py-4 bg-bodybg w-full rounded-full text-label hover:bg-bodybg/[0.96] text-sm font-semibold">
                      <span className="inline">Validate my wishlist</span>
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

                  <div className="flex grow">
                    <button type="submit" className="flex grow buttonBG transition-all justify-center items-center p-0.5 rounded-full w-full overflow-hidden shadow-whitepers active:shadow-none">
                      <div className="flex transition-all justify-center items-center px-16 py-4 bg-bodybg w-full rounded-full text-label hover:bg-bodybg/[0.96] text-sm font-semibold">
                        <span className="inline">Send my request</span>
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