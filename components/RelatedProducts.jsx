import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import ProductCard from './ProductCard';
import { fetchDataFromApi } from '@/utils/api';

const RelatedProducts = ({ pId, category }) => {

    // useEffect (() => {
    //     console.log ("In Related Products");
    //     console.log (category)
    //     console.log (product)
    // }, [category])

    const [relatedProducts, setRelatedProducts] = useState(null);

    useEffect(() => {
        if (category) {
            fetchRelatedProducts();
        }
    }, [category]);

    // useEffect(() => {
    //     console.log ("is Related Products");
    //     console.log (relatedProducts);
    // }, [relatedProducts]);

    const fetchRelatedProducts = async () => {
        try {
            const relatedProductsData = await fetchDataFromApi(`/products/category/${category}`);
            setRelatedProducts(relatedProductsData);
        } catch (error) {
            console.error('Error fetching related products:', error);
        }
    };

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1023, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 463, min: 0 },
            items: 1,
        },
    };

    return (
        <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0">
            <div className="text-2xl font-bold mb-5">
                Discover These Gems Too!
            </div>

            {relatedProducts?.length > 0 && 
                <Carousel
                    responsive={responsive}
                    containerClass="-mx-[10px]"
                    itemClass="px-[10px]"
                >
                    {relatedProducts?.map((product) => (
                        <ProductCard key={product.id} data={product} />
                    ))}
                </Carousel>
            }
        </div>
    );
};

export default RelatedProducts;
