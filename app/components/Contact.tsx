"use client";
import React, { useRef, useState } from "react";
import Earth from "./Earth";
import { Element } from "react-scroll";

export default function Contact() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const data = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      if (nameRef.current) nameRef.current.value = "";
      if (emailRef.current) emailRef.current.value = "";
      if (messageRef.current) messageRef.current.value = "";
    }
  };

  return (
    <div className="relative w-full flex flex-col h-auto mb-8 bg-Bgblack overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none"></div>

      <p className="text-2xl p-6">Me Mande um Email!</p>
      <h2 className=" p-10 font-anton  text-white text-3xl md:text-7xl">
        {" "}
        Contato.{" "}
      </h2>
      <Earth />

      <div className="w-full justify-center flex items-center">
        <div className=" w-96 mx-20 bg- rounded-xl">
          <Element name="Contatos"> 
          <form onSubmit={handleSubmitForm} className="w-full p-2.5 rounded-xl">
            <label htmlFor="" className="flex flex-col">
              <span className="text-white text-xl font-semibold">Nome :</span>

              <input
                type="text"
                name="inputName"
                ref={nameRef}
                id="inputName"
                placeholder="Qual o seu nome ?"
                className="bg-zinc-800 rounded-xl p-2.5"
              />
            </label>

            <label htmlFor="" className="flex flex-col">
              <span className="text-white text-xl font-semibold">
                Seu Email:
              </span>

              <input
                type="email"
                name="inputEmail"
                ref={emailRef}
                id="inputEmail"
                placeholder="Digite seu Email"
                className="  bg-zinc-800 rounded-xl mt-1.5 p-2.5 placeholder:text-gray-300  "
              />
            </label>

            <label htmlFor="" className="flex flex-col">
              <span className="text-white text-xl font-semibold">
                Sua Mensagem :
              </span>
              <textarea
                name="inputText"
                ref={messageRef}
                id="inputText"
                rows={4}
                className="max-w-full min-h-24 bg-zinc-800 rounded-xl p-2.5 resize-none  whitespace-pre-wrap"
                placeholder="Digite sua mensagem..."
              />
            </label>
            <button
              type="submit"
              className="w-30 h-10 bg-red-400 my-2.5 cursor-pointer rounded-2xl"
            >
              {loading ? "Enviando" : "Enviar"}
            </button>
          <p className="w-full text-2xl text-green-400 rounded-2xl p-2.5">{success && "Email enviado com Sucesso!!"}</p>

          </form>
           </Element>
        </div>
      </div>
     
    </div>
  );
}
