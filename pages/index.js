import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";

export default function Home() {
    return (
        <main>
            <HeroBanner />

            <Wrapper>
                <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <div className="text-[24px] md:text-[30px] mb-5 font-semibold leading-tight">
                        Sneaker Sphere: Where Sneakers Are Our Obsession
                    </div>

                    <div className="text-md md:text-xl">
                        Sneakers crafted with luxurious leather and cushioned soles for all-day comfort. Timeless designs complement any outfit.
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
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
                    <ProductCard />
                    <ProductCard />
                </div>
            </Wrapper>
        </main>
    );
}
