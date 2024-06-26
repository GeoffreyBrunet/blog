"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/lib/email/send-email";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const EmailForm: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }
  return (
    <React.Fragment>
      <h2 className={cn("pb-2")}>Me contacter par email</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cn("pb-2")}>
          <label htmlFor="name" className={cn("mb-3 block text-sm")}>
            Nom complet
          </label>
          <Input
            type="text"
            placeholder="Nom prénom"
            id="name"
            className={cn(
              "w-full rounded-md border border-gray-300 bg-white px-6 py-3 text-gray-700 outline-none focus:shadow-md",
            )}
            {...register("name", { required: true })}
            autoComplete="name"
          />
        </div>
        <div className={cn("pb-2")}>
          <label htmlFor="email" className="mb-3 block text-sm">
            Adresse Email
          </label>
          <Input
            type="email"
            placeholder="exemple@domain.com"
            id="email"
            className={cn(
              "w-full rounded-md border border-gray-300 bg-white px-6 py-3 text-gray-700 outline-none focus:shadow-md",
            )}
            {...register("email", { required: true })}
            autoComplete="email"
          />
        </div>
        <div className={cn("pb-2")}>
          <label htmlFor="message" className="mb-3 block text-sm">
            Message
          </label>
          <Textarea
            rows={4}
            placeholder="Tapez votre message ici"
            id="message"
            className={cn(
              "w-full rounded-md border border-gray-300 bg-white px-6 py-3 text-gray-700 outline-none focus:shadow-md",
            )}
            {...register("message", { required: true })}
            autoComplete="message"
          ></Textarea>
        </div>
        <div>
          <Button className={cn("hover:shadow-form rounded-md")}>
            Envoyer
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default EmailForm;
