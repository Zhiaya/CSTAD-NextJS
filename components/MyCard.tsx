import { Card } from "flowbite-react";
import { Datas } from "./ProductPage";
import { IoIosTime } from 'react-icons/io';
import { FaLayerGroup } from 'react-icons/fa';

type CardProps = {
 datas: Datas[];
};

export default function MyCard({ datas }: CardProps) {
 return (
    <div className="grid grid-cols-2 gap-3">
      {datas.map((data, index) => (
        <Card key={index} className="max-w-sm" imgSrc={data.image} horizontal>
          <div className='flex flex-row gap-2.5'>
            <div className="basis-[70%]">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {data.title}
              </h5>
              <span className="bg-red-700 text-white text-sm rounded-lg px-2 my-2 w-fit">20% Scholarship</span>
              <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
                {data.description}
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
