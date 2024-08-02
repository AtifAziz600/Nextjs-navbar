"use client"

import ProductCard from "./ProductCard";
import Egg from "../../../public/data/Brown-eggs.png";
import Tea from "../../../public/data/tea.png";
import Soft from "../../../public/data/soft_drinks.jpg";
import Coffee from "../../../public/data/coffee.png";
import FrozenFood from "../../../public/data/frozen_food.png";
import IceCream from "../../../public/data/ice_cream.jpg";
import Noodles from "../../../public/data/noodle.jpg";


export default function NewProduct() {
    const data = [
      {
        img: Egg,
        title: "Tea",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, voluptatibus quibusdam assumenda fugiat ullam, ducimus expedita odit commodi officiis odio molestias possimus aut aperiam maxime laborum quas, velit beatae qui?",
        rating: 3,
        price: "38.00 TK",
      },
      {
        img: Tea,
        title: "Egg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, voluptatibus quibusdam assumenda fugiat ullam, ducimus expedita odit commodi officiis odio molestias possimus aut aperiam maxime laborum quas, velit beatae qui?",
        rating: 4,
        price: "38.00 TK",
      },
      {
        img: Coffee,
        title: "Coffee",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, voluptatibus quibusdam assumenda fugiat ullam, ducimus expedita odit commodi officiis odio molestias possimus aut aperiam maxime laborum quas, velit beatae qui?",
        rating: 5,
        price: "38.00 TK",
      },
      {
        img: FrozenFood,
        title: "Frozen Food",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, voluptatibus quibusdam assumenda fugiat ullam, ducimus expedita odit commodi officiis odio molestias possimus aut aperiam maxime laborum quas, velit beatae qui?",
        rating: 4,
        price: "38.00 TK",
      },
      {
        img: IceCream,
        title: "Ice Cream",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, voluptatibus quibusdam assumenda fugiat ullam, ducimus expedita odit commodi officiis odio molestias possimus aut aperiam maxime laborum quas, velit beatae qui?",
        rating: 3,
        price: "38.00 TK",
      },
      {
        img: Soft,
        title: "Soft Drinks",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, voluptatibus quibusdam assumenda fugiat ullam, ducimus expedita odit commodi officiis odio molestias possimus aut aperiam maxime laborum quas, velit beatae qui?",
        rating: 4,
        price: "38.00 TK",
      },
      {
        img: Noodles,
        title: "Noodles",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, voluptatibus quibusdam assumenda fugiat ullam, ducimus expedita odit commodi officiis odio molestias possimus aut aperiam maxime laborum quas, velit beatae qui?",
        rating: 3,
        price: "38.00 TK",
      },
    ];
    return (
      <div>
        <div className="container pt-16">
          <h2 className="font-medium text-2xl pb-4">New Products</h2>

          <div className="grid grid-cols-1 place-content-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
            {data.map((item, index) => (
              <ProductCard
                key={index}
                img={item.img.src}
                title={item.title}
                desc={item.desc}
                rating={item.rating}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    );
}