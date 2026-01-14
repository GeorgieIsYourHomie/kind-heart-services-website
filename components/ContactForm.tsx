"use client";

import type React from "react";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { CustomButton } from "@/components/CustomButton";

export function ContactForm() {
  // form state
  // for disabling button + showing spinner
  const [isSubmitting, setIsSubmitting] = useState(false);
  // for showing success message
  const [isSuccess, setIsSuccess] = useState(false);

  // handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // 1. prevent default form submission behavior
    e.preventDefault();
    // 2. show spinner + disable button
    setIsSubmitting(true);

    // 3. extract form data
    const form = e.currentTarget;
    const formData = new FormData(form);

    // 4. build payload
    const data = {
      firstName: String(formData.get("firstName") ?? ""),
      lastName: String(formData.get("lastName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""), // honeypot
    };

    // 5. send JSON to your Next.js route (/api/contact)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // 6. handle response
      const result = await response.json().catch(() => null);
      // if server decided it failed
      if (!response.ok) {
        throw new Error(result?.message ?? "Failed to send message");
      }

      // if all good
      setIsSuccess(true);
      // reset form
      form.reset();
    } catch (err) {
      // 7. handle unexpected errors
      console.error("Contact form error:", err);
      alert(
        err instanceof Error
          ? err.message
          : "Failed to send message. Please try again."
      );
    } finally {
      // 8. re-enable button + hide spinner
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="shadow-xl rounded-none rounded-tl-sm rounded-bl-sm md:rounded-tl-none md:rounded-bl-none rounded-tr-sm rounded-br-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Get in Touch</CardTitle>
        <CardDescription className="text-base">
          Fill out the form below and we'll get back to you within 24 hours.
          We're here to answer your questions about assisted living in
          Minnesota.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          aria-label="Contact form"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                required
                aria-required="true"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                required
                aria-required="true"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              aria-required="true"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              aria-required="true"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us about your needs and questions..."
              required
              aria-required="true"
            />
          </div>

          {/* Honeypot field for bot spam protection */}
          <div className="absolute -left-2499.75" aria-hidden="true">
            <label htmlFor="website">website</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="flex justify-center">
            <CustomButton
              type="submit"
              text={
                isSubmitting
                  ? "Sending... "
                  : isSuccess
                  ? "Message Sent!"
                  : "Send Message"
              }
              className="w-full md:w-auto hover:cursor-pointer"
              disabled={isSubmitting}
              ariaLabel={
                isSubmitting ? "Sending message" : "Submit contact form"
              }
            />
          </div>

          {isSuccess && (
            <p
              className="text-sm text-center text-primary font-medium"
              role="status"
              aria-live="polite"
            >
              Thank you! We'll be in touch soon.
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
