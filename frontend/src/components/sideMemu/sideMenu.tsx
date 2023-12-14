"use client"
import { cn } from "@/lib/utils"
import {FriendsMenuData, GiftsMenuData, LibraryData, PartiesMenuData} from "./sideMenuData.data"
import { useRouter, usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { TbSettings } from "react-icons/tb";
import { FaMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";


const SideMenu = () => {
    const router = useRouter()
    const { theme, setTheme } = useTheme()
    const pathname = usePathname()
    

    return (
        <div className="dark:bg-[#1A161F] bg-zinc-100 py-10 w-72 px-8 h-full">
            <div className="mb-10">
                <h2 className="uppercase text-zinc-500 dark:text-zinc-400 font font-semibold mb-5">menu</h2>
                <div className="flex flex-col items-center gap-2">
                    {pathname.startsWith("/friends") && FriendsMenuData.map((item) => (
                        <div onClick={() => router.push(item.path)} key={item.path} className={cn("group flex transition gap-4 w-full py-3 px-4 dark:hover:bg-[#30293A] hover:bg-zinc-300 rounded-xl cursor-pointer", {"dark:bg-[#30293A] bg-zinc-300" :pathname.startsWith(item.path)})}>
                            <item.icon className={cn("h-6 w-6 text-zinc-500 group-hover:text-white", {"text-red-500": pathname.startsWith(item.path)})} />
                            <p className={cn("text-zinc-500 group-hover:text-white font-semibold",  {"text-white": pathname.startsWith(item.path)})}>{item.title}</p>
                        </div>
                    ))}
                    {pathname.startsWith("/parties") && PartiesMenuData.map((item) => (
                        <div onClick={() => router.push(item.path)} key={item.path} className={cn("group flex transition gap-4 w-full py-3 px-4 dark:hover:bg-[#30293A] hover:bg-zinc-300 rounded-xl cursor-pointer", {"dark:bg-[#30293A] bg-zinc-300" :pathname.startsWith(item.path)})}>
                            <item.icon className={cn("h-6 w-6 text-zinc-500 group-hover:text-white", {"text-red-500": pathname.startsWith(item.path)})} />
                            <p className={cn("text-zinc-500 group-hover:text-white font-semibold",  {"text-white": pathname.startsWith(item.path)})}>{item.title}</p>
                        </div>
                    ))}
                    {pathname.startsWith("/gifts") && GiftsMenuData.map((item) => (
                        <div onClick={() => router.push(item.path)} key={item.path} className={cn("group flex transition gap-4 w-full py-3 px-4 dark:hover:bg-[#30293A] hover:bg-zinc-300 rounded-xl cursor-pointer", {"dark:bg-[#30293A] bg-zinc-300" :pathname.startsWith(item.path)})}>
                            <item.icon className={cn("h-6 w-6 text-zinc-500 group-hover:text-white", {"text-red-500": pathname.startsWith(item.path)})} />
                            <p className={cn("text-zinc-500 group-hover:text-white font-semibold",  {"text-white": pathname.startsWith(item.path)})}>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="uppercase text-zinc-500 dark:text-zinc-400 font font-semibold mb-5">library</h2>
                <div className="flex flex-col items-center gap-2">
                    {LibraryData.map((item) => (
                        <div onClick={() => router.push(item.path)} key={item.path} className={cn("group flex transition gap-4 w-full py-3 px-4 dark:hover:bg-[#30293A] hover:bg-zinc-300 rounded-xl cursor-pointer", {"dark:bg-[#30293A] bg-zinc-300" :pathname.startsWith(item.path)})}>
                            <item.icon className={cn("h-6 w-6 text-zinc-500 group-hover:text-white", {"text-red-500": pathname.startsWith(item.path)})}/>
                            <p className={cn("text-zinc-500 group-hover:text-white font-semibold",  {"text-white": pathname.startsWith(item.path)})}>{item.title}</p>
                        </div>
                    ))}
                    <div onClick={() => theme === "dark" ? setTheme("light") : setTheme("dark")} className="group flex transition gap-4 w-full py-3 px-4 dark:hover:bg-[#30293A] hover:bg-zinc-300 rounded-xl cursor-pointer">
                        {theme === "dark" ? (
                            <FaMoon className="h-6 w-6 text-zinc-500 group-hover:text-white" />
                        ) : (
                            <LuSun className="h-6 w-6 text-zinc-500 group-hover:text-white" />
                        )}
                        <p className={cn("text-zinc-500 group-hover:text-white font-semibold")}>{theme === "dark" ? "Dark mode" : "Light mode"}</p>
                    </div>
                    <div onClick={() => router.push("/settings/edit-profile")} className={cn("group flex transition gap-4 w-full py-3 px-4 dark:hover:bg-[#30293A] hover:bg-zinc-300 rounded-xl cursor-pointer", {"dark:bg-[#30293A] bg-zinc-300" :pathname.startsWith("/settings")})}>
                        <TbSettings className={cn("h-6 w-6 text-zinc-500 group-hover:text-white", {"text-red-500": pathname.startsWith("/settings")})} />
                        <p className={cn("text-zinc-500 group-hover:text-white font-semibold",  {"text-white": pathname.startsWith("/settings")})}>Settings</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideMenu