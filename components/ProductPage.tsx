import MyCard from "./MyCard";

export type Datas = {
  readonly id: number;
  image: string;
  title: string;
  description: string;

};
const ProductPage = () => {
    const datas : Datas[] = [
      {
        "id": 1,
        "image": "https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png",
        "title": "Flutter Mobile Development",
        "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
      },
      {
        "id": 2,
        "image": "https://api.istad.co/media/image/4709913c-3dd4-4896-8b05-ba6f7fd074ba.png",
        "title": "Flutter Mobile Development",
        "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
      },
      {
        "id": 3,
        "image": "https://api.istad.co/media/image/354762b5-e27a-40ac-93c3-6de5cdb0362f.png",
        "title": "Flutter Mobile Development",
        "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
      },
      {
        "id": 4,
        "image": "https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png",
        "title": "Flutter Mobile Development",
        "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
      },
      {
        "id": 5,
        "image": "https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png",
        "title": "Flutter Mobile Development",
        "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
      },
      {
        "id": 6,
        "image": "https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png",
        "title": "Flutter Mobile Development",
        "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
      },
      {
        "id": 7,
        "image": "https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png",
        "title": "Flutter Mobile Development",
        "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
      },
      {
        "id": 8,
        "image": "https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png",
        "title": "Flutter Mobile Development",
        "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
      },
      {
        "id": 9,
        "image": "https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png",
        "title": "Flutter Mobile Development",
        "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
      },
      {
        "id": 10,
        "image": "https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png",
        "title": "Flutter Mobile Development",
        "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
      },
      {
        "id": 11,
        "image": "https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png",
        "title": "Flutter Mobile Development",
        "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
      },
      {
        "id": 12,
        "image": "https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png",
        "title": "Flutter Mobile Development",
        "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
      },
      {
        "id": 13,
        "image": "https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png",
        "title": "Flutter Mobile Development",
        "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
      },
      {
        "id": 14,
        "image": "https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png",
        "title": "Flutter Mobile Development",
        "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
      },

    ];

  return (
    <>
      <MyCard datas={datas} />
      
    </>
  );
};
export default ProductPage;
