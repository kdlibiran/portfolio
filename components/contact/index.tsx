"use client";
import { useState } from "react";
import { SubmitButton } from "../submit-type";
import { sendEmail } from "./functions";
export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const sendEmailBtn = async (formData: FormData) => {
    const response = await sendEmail(formData);
    console.log(response);
    if (response == 1) {
      setSent(true);
    }
  };
  return (
    <div
      id="contact"
      className="center top-0 flex flex-1 snap-center justify-center overflow-hidden bg-stone-200 pt-[72px] align-middle sm:h-[100vh]"
    >
      <div className="flex flex-col justify-center">
        <div className="flex h-[calc(100vh-222px)] w-[calc(100vw-500px)] flex-col justify-center bg-white shadow-lg">
          {!sent && (
            <div>
              <h1 className="mt-10 w-full text-center text-6xl font-bold">
                Contact Me
              </h1>
              <form className="relative flex flex-col justify-center gap-y-2 p-10">
                <label htmlFor="name" className="text-md">
                  Name
                </label>
                <input
                  type="text"
                  name="Name"
                  className="rounded-md border bg-inherit px-4 py-2"
                />
                <label htmlFor="email" className="text-md">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="rounded-md border bg-inherit px-4 py-2"
                />
                <label htmlFor="subject" className="text-md">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="rounded-md border bg-inherit px-4 py-2"
                />
                <label htmlFor="text" className="text-md">
                  Content
                </label>
                <textarea
                  name="text"
                  className="rounded-md border bg-inherit px-4 py-2"
                />
                <SubmitButton
                  formAction={sendEmailBtn}
                  className="mb-2 mt-2 rounded-md border bg-black px-4 py-2 text-white"
                  pendingText="Sending..."
                >
                  Send
                </SubmitButton>
              </form>
            </div>
          )}
          {sent && (
            <div className="w-full text-center text-2xl font-bold">
              <h1>Thank you for reaching out!</h1>
              <h1>Will reply as soon as possible.</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
