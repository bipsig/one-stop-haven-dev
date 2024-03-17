import React from 'react';
import Link from 'next/link';
import { IoMdArrowDropdown } from "react-icons/io";
import { generateSubmenuData } from '@/utils/helper';

const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
];

// const subMenuData = [
//     { id: 1, name: "Jordan", doc_count: 11 },
//     { id: 2, name: "Sneakers", doc_count: 8 },
//     { id: 3, name: "Running Shoes", doc_count: 64 },
//     { id: 4, name: "Football Shoes", doc_count: 107 },
// ];

const MenuMobile = ({ showCatMenu, setShowCatMenu, setMobileMenu, categories }) => {
    const subMenuData = generateSubmenuData (categories);

    return (
        <div className="md:hidden font-bold absolute top-[50px] left-0 w-full bg-white border-t text-black">
            <ul className="flex flex-col">
                {data.map((item) => {
                    return (
                        <React.Fragment key={item.id}>
                            {!!item?.subMenu ? (
                                <li
                                    className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
                                    onClick={() => setShowCatMenu(!showCatMenu)}
                                >
                                    <div className="flex justify-between items-center">
                                        {item.name}
                                        <IoMdArrowDropdown size={20} />
                                    </div>

                                    {showCatMenu && (
                                        <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                                            {subMenuData.map((submenu) => {
                                                return (
                                                    <Link
                                                        key={submenu.id}
                                                        href="/"
                                                        onClick={() => {
                                                            showCatMenu(false);
                                                            setMobileMenu(false);
                                                        }}
                                                    >
                                                        <li className="py-4 px-8 border-t flex justify-between">
                                                            {submenu.name}
                                                            {/* <span className="opacity-50 text-sm">
                                                                {submenu.doc_count}
                                                            </span> */}
                                                        </li>
                                                    </Link>
                                                );
                                            })}
                                        </ul>
                                    )}
                                </li>
                            ) : (
                                <li className="py-4 px-5 border-b">
                                    <Link
                                        href={item.url}
                                        onClick={() => setMobileMenu(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            )}
                        </React.Fragment>
                    );
                })}
            </ul>
        </div>
    );
};

export default MenuMobile;
