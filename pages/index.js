import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";

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
            </Wrapper>
        </main>
    );
}
