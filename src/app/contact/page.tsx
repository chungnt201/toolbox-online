"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:contact@toolbox123.online?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.open(mailtoLink);
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6">
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-gray-500 transition-colors hover:text-indigo-600">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Home
        </Link>
      </div>

      <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
        Contact Us
      </h1>
      <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
        Have a question, suggestion, or found a bug? We&apos;d love to hear from you.
      </p>

      {submitted ? (
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-800 dark:bg-green-900/20">
          <div className="mb-3 text-4xl">✅</div>
          <h2 className="mb-2 text-xl font-semibold text-green-800 dark:text-green-300">
            Thank you!
          </h2>
          <p className="text-green-700 dark:text-green-400">
            Your email client should have opened with the message. If not, you can email us
            directly at <strong>contact@toolbox123.online</strong>.
          </p>
          <button
            className="btn-primary mt-6"
            onClick={() => { setSubmitted(false); setName(""); setEmail(""); setMessage(""); }}
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-8">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              required
              className="tool-input"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              required
              className="tool-input"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              required
              className="tool-input tool-textarea"
              placeholder="How can we help you?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button type="submit" className="btn-primary w-full">
            Send Message
          </button>
        </form>
      )}

      <div className="mt-8 rounded-xl bg-gray-50 p-6 dark:bg-gray-900">
        <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">Other ways to reach us</h3>
        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <p>📧 Email: <strong>contact@toolbox123.online</strong></p>
          <p>🌐 Website: <strong>www.toolbox123.online</strong></p>
        </div>
      </div>
    </div>
  );
}
