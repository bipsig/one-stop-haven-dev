import React, { useEffect, useState } from 'react';
import Wrapper from '@/components/Wrapper';
import ProductCard from '@/components/ProductCard';
import { fetchDataFromApi } from '@/utils/api';
import { useRouter } from 'next/router';
import { capitalizeEveryWord } from '@/utils/helper';

const Category = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [category, setCategory] = useState(null);
    const [products, setProducts] = useState(null);

    useEffect(() => {
        if (slug) {
            fetchProducts();
        }
    }, [slug]);

    useEffect(() => {
        console.log(products);
    }, [products])

    const fetchProducts = async () => {
        try {
            const response = await fetchDataFromApi(`/products/category/${slug}`);
            setProducts(response);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    return (
        <div className="w-full md:py-20">
            <Wrapper>
                <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        {capitalizeEveryWord(products?.[0]?.category || "")}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                    {products?.map((product) => (
                        <ProductCard key={product.id} data={product} />
                    ))}
                </div>
            </Wrapper>
        </div>
    );
};

export default Category;