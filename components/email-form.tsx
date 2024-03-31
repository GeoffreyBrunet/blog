"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/lib/send-email";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const EmailForm: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-3 block text-base font-medium text-black"
        >
          Nom complet
        </label>
        <Input
          type="text"
          placeholder="Nom prénom"
          className="w-full rounded-md border border-gray-300 bg-white px-6 py-3 text-gray-700 outline-none focus:shadow-md"
          {...register("name", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-3 block text-base font-medium text-black"
        >
          Adresse Email
        </label>
        <Input
          type="email"
          placeholder="exemple@domain.com"
          className="w-full rounded-md border border-gray-300 bg-white px-6 py-3 text-gray-700 outline-none focus:shadow-md"
          {...register("email", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="mb-3 block text-base font-medium text-black"
        >
          Message
        </label>
        <Textarea
          rows={4}
          placeholder="Tapez votre message ici"
          className="w-full rounded-md border border-gray-300 bg-white px-6 py-3 text-gray-700 outline-none focus:shadow-md"
          {...register("message", { required: true })}
        ></Textarea>
      </div>
      <div>
        <Button className="hover:shadow-form rounded-md">Envoyer</Button>
      </div>
    </form>
  );
};

export default EmailForm;
