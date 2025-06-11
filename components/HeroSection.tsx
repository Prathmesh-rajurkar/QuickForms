import React from "react";
import GenerateFormInput from "./GenerateFormInput";
import { Button } from "./ui/button";
import PricingPage from "./PricingPage";

type SuggestionText = {
  label: string;
  text: string;
};
const suggestionBtnText = [
  {
    label: "Job Application",
    text: "Develop a basic job application form that serves as a one-page solution form collecting essential information from applicants.",
  },
  {
    label: "Registration Form",
    text: "Create a course registration form suitable form any scheool or instituition.",
  },
  {
    label: "Feedback Form",
    text: "Create a client feedback form to gather valuable insights from any clients.",
  },
];

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
            Effortlessly design smart, responsive forms powered by artificial
            intelligence — no coding required.
          </p>
        </div>
      </div>
      <div>
        <GenerateFormInput />
        <div className="grid grid-cols-4 gap-3">
          {suggestionBtnText.map((items: SuggestionText, index: number) => (
            <Button key={index} className="rounded-full h-10" variant={"outline"}>{items.label}</Button>
          ))}
        </div>
      </div>
      
    </section>
  );
}

export default HeroSection;
