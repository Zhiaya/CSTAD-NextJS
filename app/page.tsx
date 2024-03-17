import MyCard from "@/components/MyCard";
import MySlides from "@/components/MySlides";
import React from "react";

export default function page() {
  return (
    <div className="min-h-dvh">
      <MySlides />
      <section>
        <h1 className="text-4xl ml-44">COURSES</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-3">
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
          </div>
        </div>
      </section>
    </div>
  );
}
