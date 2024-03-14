"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import { Toaster } from "@/components/ui/sonner";
import React, { useState } from "react";

<script src="https://smtpjs.com/v3/smtp.js"></script>;
function page() {
  const [name, setName] = useState("null");
  const [email, setEmail] = useState("null");
  const [number, setNumber] = useState(0);
  const [msg, setMsg] = useState("null");

  const addNewEnquiry = () => {
    GlobalApi.addNewEnquiry(name, email, number, msg).then(
      (resp) => {
        console.log(resp);
        if (resp) {
          Toaster("Add Successfull!");
        }
      },
      (error) => {
        Toaster("Some Error Happend");
      }
    );
  };
  return (
    <div>
      {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

      <section className="bg-purple-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-sm">
                <span className="text-[17px] font-serif text-yellow-600">
                  {" "}
                  Dear Students,
                </span>
                <br></br> Please feel free to contact us if you have any issues,
                questions regarding payment, or want to give us feedback. Our
                team is always striving to reach out and assist you. <br></br>{" "}
                Sincerely,<br></br> Skill Sparkle <br></br> Happy Learning!
              </p>

              <div className="mt-8">
                <a href="#" className="text-2xl font-bold text-pink-600">
                  {" "}
                  skillsparkle.edu@gmail.com{" "}
                </a>

                <address className="mt-2 not-italic">
                  Bajrang Vihar, Patia, Bhubaneswar
                </address>
              </div>
            </div>

            <div className="rounded-lg bg-slate-200 p-8 border-blue-400 shadow-lg lg:col-span-3 lg:p-12 hover:shadow-purple-600">
              <form action="" onSubmit={addNewEnquiry} className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm "
                    placeholder="Name"
                    type="text"
                    id="name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      onChange={(e) => {
                        setNumber(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                    onChange={(e) => {
                      setMsg(e.target.value);
                    }}
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                   
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
