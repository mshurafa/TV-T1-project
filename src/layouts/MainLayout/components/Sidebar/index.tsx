import { Home, Settings, MenuBar, LogOut, Invoices, Withdraw, Contacts, Help } from "lib/@heroicons";
import { Link } from "components";
import { useRouter } from 'next/router'
import { useState } from "react";

export const Sidebar = () => {
    const [Open, setOpen] = useState(true)
    const homePage = useRouter()
    const menus = [
        { name: 'Home', link: "home", icon: Home },
        { name: 'Invoices', link: "home", icon: Invoices },
        { name: 'Withdraw', link: "home", icon: Withdraw },
        { name: 'Contacts', link: "home", icon: Contacts },
        { name: 'Help', link: "home", icon: Help, grow: true },
        { name: 'Settings', link: "home", icon: Settings },
        { name: 'Log Out', link: "home", icon: LogOut, last: true },
    ]
    return (
        <nav className="flex flex-col pt-4 h-full ">
            <div className={`flex px-2 ${'md:px-4 xl:px-4'} transition duration-500 cursor-pointer`} onClick={() => setOpen(!Open)}>
                <MenuBar className="text-gray w-5 mx-3 " />
                <h1 className={`text-gray hidden ${Open && 'md:flex xl:flex'} translate ease-in-out duration-500`}> Main Menu</h1>
            </div>
            <div className="mt-5 flex flex-col h-full">
                {menus.map((menu, i) => (
                    <div className={`${menu?.grow && 'grow'}`} key={i}>
                        <Link href='home' className={`${menu.name == 'Home' && homePage.asPath == '/home' ? 'bg-[#EAEEF2]' : null} ${menu.last && 'mb-20'} group flex  px-2 py-2 rounded-r-sm hover:bg-[#EAEEF2] md:px-4 xl:px-2`} >
                            <menu.icon className={`${menu.name == 'Home' && homePage.asPath == '/home' ? 'text-blue' : 'text-dark'} w-5 mx-3 group-hover:text-blue`} />
                            <span className={`${menu.name == 'Home' && homePage.asPath == '/home' ? 'text-blue' : 'text-dark'} text-sm ml-2 group-hover:text-blue hidden  ${Open && 'md:flex xl:flex'}`}>{menu.name}</span>
                        </Link>
                    </div>
                ))}
            </div>
        </nav >
    );
};
