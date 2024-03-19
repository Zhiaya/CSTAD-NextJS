import React from 'react';
import CardCarousel from "@/components/cardCarousel";


const data = [
    {
        img: 'https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png',
        title: 'Center of Science and Technology Advanced Development',
    },
    {
        img: 'https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png',
        title: 'Center of Science and Technology Advanced Development',
    },
    {
        img: 'https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png',
        title: 'Center of Science and Technology Advanced Development',
    },
    {
        img: 'https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png',
        title: 'Center of Science and Technology Advanced Development',
    },
    {
        img: 'https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png',
        title: 'Center of Science and Technology Advanced Development',
    },
    {
        img: 'https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png',
        title: 'Center of Science and Technology Advanced Development',
    },
    {
        img: 'https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png',
        title: 'Center of Science and Technology Advanced Development',
    },
    {
        img: 'https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png',
        title: 'Center of Science and Technology Advanced Development',
    },
    {
        img: 'https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png',
        title: 'Center of Science and Technology Advanced Development',
    },
    {
        img: 'https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png',
        title: 'Center of Science and Technology Advanced Development',
    },
    {
        img: 'https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png',
        title: 'Center of Science and Technology Advanced Development',
    },
    {
        img: 'https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png',
        title: 'Center of Science and Technology Advanced Development',
    },
    {
        img: 'https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png',
        title: 'Center of Science and Technology Advanced Development',
    },
    {
        img: 'https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png',
        title: 'Center of Science and Technology Advanced Development',
    },
    {
        img: 'https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png',
        title: 'Center of Science and Technology Advanced Development',
    },
    {
        img: 'https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png',
        title: 'Center of Science and Technology Advanced Development',
    },
    
]


const card = data.map((item) => {
    return (
        <CardCarousel key={item.title} {...item}/>
    )
})
const ItNewsCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-20 py-5">
            {card}
        </div>
    );
};

export default ItNewsCard;