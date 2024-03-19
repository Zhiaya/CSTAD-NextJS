import MyCard from "@/components/MyCard";
import MySlides from "@/components/MySlides";
import ProductPage from "@/components/ProductPage";
import { NavbarLink } from "flowbite-react";
import React from "react";

export default function page() {
 
  return (
    <div className="min-h-dvh">
      <MySlides />
      <section>
        <h1 className="text-4xl ml-44">COURSES</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-3">
           <ProductPage />
          </div>
        </div>
      </section>
    </div>
  );
  
}
