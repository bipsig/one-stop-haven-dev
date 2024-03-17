import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "@/utils/api";

export default function Home() {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetchDataFromApi("/products");
            // console.log("Data received:", response);
            setData(response);
            // console.log (data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }    

    return (
        <main>
            <HeroBanner />

            {/* <h1>{data?.[0]?.title}</h1> */}
            <Wrapper>
                <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <div className="text-[24px] md:text-[30px] mb-5 font-semibold leading-tight">
                        One Stop Haven: All Your Favorites, All in One Haven
                    </div>

                    <div className="text-md md:text-xl">
                        Sneakers crafted with luxurious leather and cushioned soles for all-day comfort. Timeless designs complement any outfit.
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                    {data?.map((product) => (
                        <ProductCard key = {product.id} data = {product} />
                    ))}
                </div>
            </Wrapper>
        </main>
    );
}
