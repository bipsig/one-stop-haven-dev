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

const Menu = ({ showCatMenu, setShowCatMenu, categories }) => {
    
    const subMenuData = generateSubmenuData (categories);

    return (
        <ul className="hidden md:flex items-center gap-8 font-medium text-black">
            {data.map((item) => {
                return (
                    <React.Fragment key={item.id}>
                        {!!item?.subMenu
                            ? (
                                <li
                                    className="cursor-pointer flex items-center gap-2 relative"
                                    onMouseEnter={() => setShowCatMenu(true)}
                                    onMouseLeave={() => setShowCatMenu(false)}
                                >
                                    {item.name}
                                    <IoMdArrowDropdown size={20} />

                                    {showCatMenu && (
                                        <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg">
                                            {subMenuData?.map((submenu) => {
                                                return (
                                                    <Link 
                                                        key={submenu.id} 
                                                        href={`/category/${submenu.path}`}
                                                        onClick={() => showCatMenu (false)}
                                                    >
                                                        <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
                                                            {submenu.name}
                                                            {/* <span className="opacity-50 text-sm">
                                                                {submenu.doc_count}
                                                            </span> */}
                                                        </li>
                                                    </Link>
                                                )
                                            })}
                                        </ul>
                                    )}
                                </li>
                            )
                            : (
                                <li className="cursor-pointer">
                                    <Link href={item.url}>
                                        {item.name}
                                    </Link>
                                </li>
                            )}
                    </React.Fragment>
                )
            })}
        </ul>
    )
}

export default Menu
