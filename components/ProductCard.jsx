import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getDiscountPercent, getMarkedPrice, getSellingPrice } from '@/utils/helper';

const ProductCard = ({ id, data }) => {

    const generateDiscount = () => {
        return Math.floor(Math.random() * (50 - 10 + 1)) + 10;
    }
    const discountPercent = generateDiscount();

    return (
        <Link
            href={`/product/${data.id}`}
            className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer block mx-4 xl:mx-20"
        >
            <div className="relative" style={{ width: '300px', height: '400px' }}>
                <Image
                    layout="fill"
                    objectFit="contain"
                    src={data.image}
                    alt={data.title}
                />
            </div>

            <div className="p-4 text-black/[0.9]">
                <h2 className="text-lg font-medium">
                    {data.title}
                </h2>

                <div className="flex items-center text-black/[0.5]">
                    <p className="mr-2 text-lg font-semibold">
                        Rs. {getSellingPrice(getMarkedPrice(data.price), discountPercent).toFixed(2)}
                    </p>
                    <p className="text-base font-medium line-through">
                        Rs. {getMarkedPrice(data.price).toFixed(2)}
                    </p>
                    <p className="ml-auto text-base font-medium text-green-500">
                        {discountPercent.toFixed(2)}% off
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard;
