"use client"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { GeneralData, PersonalData } from "./settingsMenuData.data"
import { Separator } from "../ui/separator"
import { Button } from "../ui/button"
import { GoSignOut } from "react-icons/go";

const SettingsMenu = () => {
    const router = useRouter()
    const pathname = usePathname()

    return (
        <div className="dark:bg-[#09090B] bg-white py-10 w-72 min-w-72 px-8 h-full">
            <h1 className="font-semibold text-2xl text-black dark:text-white mb-7">Profile Settings</h1>
            <div className="mb-10">
                <h2 className="text-sm text-zinc-500 dark:text-zinc-400 font font-semibold mb-5">Personal info</h2>
                <div className="flex flex-col items-center gap-2">
                    {PersonalData.map((item) => (
                        <div className="w-full">
                            <div onClick={() => router.push(item.path)} key={item.path} className={cn("group flex transition gap-4 w-full py-3 px-4 dark:hover:bg-[#30293A] hover:bg-zinc-300 rounded-xl cursor-pointer", { "dark:bg-[#30293A] bg-zinc-300": pathname.startsWith(item.path) })}>
                                <item.icon className={cn("h-6 w-6 text-zinc-500 group-hover:text-white", { "text-red-500": pathname.startsWith(item.path) })} />
                                <p className={cn("text-zinc-500 group-hover:text-white font-semibold", { "text-white": pathname.startsWith(item.path) })}>{item.title}</p>
                            </div>
                            <Separator className="w-full my-3" orientation="horizontal" />
                        </div>
                    ))}

                </div>
            </div>
            <div>
                <h2 className="text-sm text-zinc-500 dark:text-zinc-400 font font-semibold mb-5">General</h2>
                <div className="flex flex-col items-center gap-2">
                    {GeneralData.map((item) => (
                        <div onClick={() => router.push(item.path)} key={item.path} className={cn("group flex transition gap-4 w-full py-3 px-4 dark:hover:bg-[#30293A] hover:bg-zinc-300 rounded-xl cursor-pointer", { "dark:bg-[#30293A] bg-zinc-300": pathname.startsWith(item.path) })}>
                            <item.icon className={cn("h-6 w-6 text-zinc-500 group-hover:text-white", { "text-red-500": pathname.startsWith(item.path) })} />
                            <p className={cn("text-zinc-500 group-hover:text-white font-semibold", { "text-white": pathname.startsWith(item.path) })}>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Button className="mt-7" variant={"primary_outline"}>
                <GoSignOut className="h-6 w-6 mr-2" />
                <p>Log Out</p>
            </Button>
        </div>
    )
}

export default SettingsMenu