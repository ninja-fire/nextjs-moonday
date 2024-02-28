'use client';

import React, { useState } from "react";
import FormInputs from "./wishlist-items";


export default function ContactForm() {

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

    return (
        <>
            {formSuccess ?
                <div>Form submitted</div>
                :
                <div className="flex flex-col gap-6">
                    <form method="POST" action="" onSubmit={submitForm}>
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

                        <button type="submit" className="flex buttonBG transition-all justify-center items-center p-0.5 rounded-full w-full overflow-hidden shadow-whitepers active:shadow-none">
                            <div className="flex transition-all justify-center items-center px-16 py-4 bg-bodybg w-full rounded-full text-label hover:bg-bodybg/[0.96] text-sm font-semibold">
                                <span className="inline">Validatet my wishlist</span>
                            </div>
                        </button>
                    </form>
                </div>
            }
        </>
    );
}