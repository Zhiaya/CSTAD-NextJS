import { Card, NavbarLink } from "flowbite-react";
import { Datas } from "./ProductPage";
type CardProps = {
  datas: Datas[];
};
export default function MyCard({ datas }: CardProps) {
  return (
    <div>
      {datas.map((data, index) => (
        <Card key={index} className="max-w-sm" imgSrc={data.image} horizontal>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data.title}
          </h5>
          <p>20% Scholarship</p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {data.description}
          </p>
        </Card>
      ))}
    </div>
  );
}
