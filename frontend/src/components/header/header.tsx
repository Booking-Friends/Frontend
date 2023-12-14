import { FiSearch } from "react-icons/fi";
import { Button } from "../ui/button";
import { LuBell } from "react-icons/lu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";


const Header = () => {
    return (
        <header className="py-1 px-7 flex items-center">
            <div className="w-72">
                <h2 className="text-xl text-black dark:text-white font-bold">FILMAX</h2>
            </div>
            <div className="flex items-center justify-between w-full">
                <nav>
                    <ul className="flex items-center gap-7">
                        <Link href={"/friends/list"}><li className={"hover:text-red-400 transition"}>Friends</li></Link>
                        <Link href={"/parties/list"}><li className={"hover:text-red-400 transition"}>Parties</li></Link>
                        <Link href={"/gifts/list"}><li className={"hover:text-red-400 transition"}>Gifts</li></Link>
                    </ul>
                </nav>
                <div className="flex gap-7 items-center">
                    <FiSearch className="text-black dark:text-white h-14 w-14" />
                    <Button className="!h-10 !rounded-full" variant={"primary"}>Subscribe</Button>
                    <LuBell className=" text-black dark:text-white  h-14 w-14" />
                    <div className="flex items-center">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <MdOutlineKeyboardArrowDown className="h-6 w-6 text-black dark:text-white" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header