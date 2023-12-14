import Image from "next/image";
import React from "react";

const AuthLayout = ({ children }: React.PropsWithChildren) => {
    return (
        <main className=" bg-white dark:bg-black w-screen h-screen flex gap-5 items-center justify-between relative">
            <div className="hidden lg:block w-[50%] h-full relative">
                <Image src={"/auth-bg.png"} width={3000} height={3000} alt="Auth BG" className="w-full top-0 left-0 h-full object-cover" />
            </div>
            <div className="w-full lg:w-[50%] h-full flex relative items-center justify-center">
                <h2 className="text-xl text-black dark:text-white font-bold text-center absolute top-10">BookFriend</h2>
                {children}
            </div>
        </main>
    )
}

export default AuthLayout;