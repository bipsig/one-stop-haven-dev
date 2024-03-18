import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

import Wrapper from "./Wrapper";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
import { CgMenuRight } from "react-icons/cg";
import { fetchDataFromApi } from "@/utils/api";

const Header = () => {

    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [categories, setCatgories] = useState (null);

    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("-translate-y-[80px]");
            }
            else {
                setShow("shadow-sm");
            }
        }
        else {
            setShow("translate-y-0");
        }

        setLastScrollY(window.scrollY);
    }
    // When scrolled the function will be called which shall update the value of scroll amount is the variable lastScrollY. When the scroll amount is less than 200 no change is brought on. When scrolled more than 200, '-translate-y-[80px]' is added to the menu which translated the menu upwards and hence hiding it. When the scroll amount starts decreasing, that is we start scrolling upwards the header appears again.

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);

        return () => {
            window.removeEventListener("scroll", controlNavbar)
        }
    }, [lastScrollY])
    // This function is activated whenever the page is scrolled. When scrolled controlNavbar() function is called

    useEffect(() => {
        fetchCategories();
    }, [])

    const fetchCategories = async () => {
        try {
            const response = await fetchDataFromApi("/products/categories");
            // console.log("Categories Data received:", response);
            setCatgories(response);
            // console.log (data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    return (
        <header className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}>
            <Wrapper className="h-[60px] flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="ml-6">
                    <div className="flex flex-row">
                        <img src="/new-logo-only.png" className="w-[40px] md:w-[60px] mr-2" alt="logo" />
                        <img src="/new-logo-text.png" className="w-[40px] md:w-[60px]" alt="logo" />
                    </div>
                </Link>

                {/* Menu with the Links */}
                <Menu
                    showCatMenu={showCatMenu}
                    setShowCatMenu={setShowCatMenu}
                    categories={categories}
                />

                {mobileMenu && (
                    <MenuMobile
                        showCatMenu={showCatMenu}
                        setShowCatMenu={setShowCatMenu}
                        setMobileMenu={setMobileMenu}
                        categories={categories}
                    />
                )}

                <div className="flex items-center gap-2 text-black">
                    <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">

                        <AiOutlineHeart className="text-[20px] md:text-[30px]" />
                        <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                            21
                        </div>
                    </div>

                    <Link href="/">
                        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">

                            <AiOutlineShoppingCart className="text-[20px] md:text-[30px]" />
                            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                                5
                            </div>
                        </div>
                    </Link>

                    <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
                        {mobileMenu ? (
                            <VscChromeClose
                                className="text-[16px]"
                                onClick={() => setMobileMenu(false)}
                            />
                        ) : (
                            <CgMenuRight
                                className="text-[16px]"
                                onClick={() => setMobileMenu(true)}
                            />
                        )}
                    </div>
                </div>
            </Wrapper>
        </header>
    );
};

export default Header;