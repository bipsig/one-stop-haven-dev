import React, { useEffect, useState } from 'react';
import Wrapper from '@/components/Wrapper';
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';
import RelatedProducts from '@/components/RelatedProducts';
import { AiOutlineHeart } from "react-icons/ai";
import { fetchDataFromApi } from '@/utils/api';
import { useRouter } from 'next/router';
import { capitalizeEveryWord } from '@/utils/helper';

const ProductDetails = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [product, setProduct] = useState(null);
    const [category, setCategory] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        if (slug) {
            fetchData();
        }
    }, [slug]);

    useEffect(() => {
        setCategory(capitalizeEveryWord(product?.category || ""));
    }, [product]);

    useEffect(() => {
        if (category) {
            fetchRelatedProducts();
        }
    }, [category]);

    // useEffect(() => {
    //     console.log (relatedProducts);
    // }, [relatedProducts]);

    const fetchData = async () => {
        try {
            const productData = await fetchDataFromApi(`/products/${slug}`);
            setProduct(productData);
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    };

    const fetchRelatedProducts = async () => {
        try {
            const relatedProductsData = await fetchDataFromApi(`/products/category/${product?.category}`);
            setRelatedProducts(relatedProductsData);
        } catch (error) {
            console.error('Error fetching related products:', error);
        }
    };

    return (
        <div>
            <Wrapper>
                <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:max-0">
                        <ProductDetailsCarousel image={product?.image} />
                    </div>

                    <div className="flex-[1] py-3">
                        <div className="text-[24px] font-semibold mb-2">
                            {product?.title}
                        </div>

                        <div className="text-lg font-semibold mb-5">
                            {category}
                        </div>

                        <div className="text-lg font-semibold">
                            MRP : Rs. {product?.price * 82}
                        </div>
                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-20">
                            {`(Also includes all applicable duties)`}
                        </div>

                        <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                            Add to Cart
                        </button>
                        
                        <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                            Wishlist
                            <AiOutlineHeart size={20}/>
                        </button>

                        <div>
                            <div className="text-lg font-bold mb-5">
                                Product Details
                            </div>
                            <div className="text-md mb-5">
                                {product?.description}
                            </div>
                        </div>
                    </div>
                </div>

                {/* <RelatedProducts related={relatedProducts}/> */}
            </Wrapper>
        </div>
    );
};

export default ProductDetails;