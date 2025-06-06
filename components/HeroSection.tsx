import React from "react";
import GenerateFormInput from "./GenerateFormInput";

function HeroSection() {
  return (
    <section>
      <div className="relative">
        <div className="absolute bg-gradient-to-r from-blue-600 to-purple-700 blur-2xl opacity-50 -z-10 inset-0"></div>
        <div className="text-center relative container mx-auto px-4 py-20">
          <h1 className="text-4xl font-semibold">
            Streamline Form Creation with AI
          </h1>
          <p className="mt-4 text-lg ">
            Effortlessly design smart, responsive forms powered by artificial intelligence — no coding required.
          </p>
        </div>
      </div>
      <div>
        <GenerateFormInput/>
      </div>
    </section>
  );
}

export default HeroSection;
