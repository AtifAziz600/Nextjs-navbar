import Image from 'next/image'
import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
interface PropsType {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
}

const ProductCard: React.FC<PropsType> = ({
     img,
     title,
     desc,
     rating,
     price,
   }) => {
    const generateRating = (rating: number) => {
        switch (rating) {
          case 1:
            return (
              <div className="flex gap-1 text-[20px] text-orange-400">
                <AiFillStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
            );
          case 2:
            return (
              <div className="flex gap-1 text-[20px] text-orange-400">
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
            );
          case 3:
            return (
              <div className="flex gap-1 text-[20px] text-orange-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
            );
          case 4:
            return (
              <div className="flex gap-1 text-[20px] text-orange-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
            );
          case 5:
            return (
              <div className="flex gap-1 text-[20px] text-orange-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            );
          default:
            return null;
        }
    }
  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
      <div>
        <Image
          className="w-full h-auto"
          src={img}
          width={200}
          height={200}
          alt={title}
        />
      </div>
      <div className="space-y-2 py-2">
        <h2 className="text-gray-900 font-medium uppercase">{title}</h2>
        <p className="text-gray-500 max-w-[150px">{desc}</p>
        <div>{generateRating(rating)}</div>
        <div className="font-bold flex gap-4">
          {price} TK
          <del className="text-gray-500 font-normal">
            TK{parseInt(price) + 50}
          </del>
        </div>
        <div className="mt-5 flex items-center justify-center">
          <button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard

// import Image from "next/image";


// export default function ProductCard() {
//   interface propsType {
//     img: string;
//     title: string;
//     desc: string;
//     rating: string;
//     price: string;
//   }

//   const ProductCard: React.FC<propsType> = ({
//     img,
//     title,
//     desc,
//     rating,
//     price,
//   }) => {
//     return (
//       <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
//         <div>
//           <Image
//             className="w-full h-auto"
//             src={img}
//             width={200}
//             height={200}
//             alt={title}
//           />
//         </div>
//       </div>
//     );
//   };
// };