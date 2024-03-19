import React from 'react';
import { Card } from 'flowbite-react';
import { FaClock, FaLayerGroup } from 'react-icons/fa';
import { IoIosTime } from 'react-icons/io';


const courses = [
 {
    id: 1,
    title: "Flutter Mobile Development",
    image: "https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png",
    description: "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
    level: "Medium",
 },
 {
    id: 1,
    title: "Flutter Mobile Development",
    image: "https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png",
    description: "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
    level: "Medium",
 },
 {
    id: 1,
    title: "Flutter Mobile Development",
    image: "https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png",
    description: "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
    level: "Medium",
 },
 {
    id: 1,
    title: "Flutter Mobile Development",
    image: "https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png",
    description: "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
    level: "Medium",
 },
 {
    id: 1,
    title: "Flutter Mobile Development",
    image: "https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png",
    description: "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
    level: "Medium",
 },
 {
    id: 1,
    title: "Flutter Mobile Development",
    image: "https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png",
    description: "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
    level: "Medium",
 },
 {
    id: 1,
    title: "Flutter Mobile Development",
    image: "https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png",
    description: "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
    level: "Medium",
 },
 {
    id: 1,
    title: "Flutter Mobile Development",
    image: "https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png",
    description: "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
    level: "Medium",
 },
 {
    id: 1,
    title: "Flutter Mobile Development",
    image: "https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png",
    description: "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
    level: "Medium",
 },
 {
    id: 1,
    title: "Flutter Mobile Development",
    image: "https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png",
    description: "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
    level: "Medium",
 },
 
];

export default function CourseComponent() {
 return (
    <div className="grid grid-cols-2 gap-3">
      {courses.map((course, index) => (
        <Card key={index} className="max-w-sm" imgSrc={course.image} horizontal>
          <div className='flex flex-row gap-2.5'>
            <div className="basis-[70%]">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {course.title}
              </h5>
              <span className="bg-red-700 text-white text-sm rounded-lg px-2 my-2 w-fit">20% Scholarship</span>
              <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
                {course.description}
              </p>
            </div>
            <div className="basis-[30%]">
              <div>
                <IoIosTime className="text-blue-800 inline"/><span className="text-[13px]"> 80 hours</span>
              </div>
              <div>
                <FaLayerGroup className="text-blue-800 inline "/><span className="text-[13px]"> Medium</span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
 );
}
