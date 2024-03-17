import React from 'react';

import Wrapper from '@/components/Wrapper';
import ProductCard from '@/components/ProductCard';
import { fetchDataFromApi } from '@/utils/api';

const Category = ({ category, slug }) => {

    return (
        <div className="w-full md:py-20">
            <Wrapper>
                <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Running Shoes
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                        {/* <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard /> */}
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Category;

// export async function getStaticPaths() {
//     const category = await fetchDataFromApi ("/products/categories");

//     const paths = category.data?.map((c) => ({
//         params: {
//             slug: c
//         }
//     }));

//     console.log ("Paths");
//     console.log (paths);

//     return {
//         paths,
//         fallback: false
//     };
// }

// export async function getStaticProps({ params: { slug } }) {
//     const category = await fetchDataFromApi (`/products/category/${slug}`);

//     return {
//         props: {
//             category,
//             slug
//         }
//     };
// }