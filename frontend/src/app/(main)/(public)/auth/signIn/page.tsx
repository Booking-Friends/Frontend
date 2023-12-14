"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import React from "react"
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import {useRouter} from "next/navigation";
import {AuthService} from "@/services/auth.service";
import Cookie from "js-cookie";

const signInSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" })
})

const SignInPage = () => {
    const [passwordVisible, setPasswordVisible] = React.useState(false)
    const form = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })
    const router = useRouter()

    async function onSubmit(values: z.infer<typeof signInSchema>) {
        AuthService.login(values).then(res => {
            Cookie.set("access-token", res.response.token)
            router.push("/discovery")
        })
    }

    return (
        <div className="w-full py-2 px-24 relative">
            <h1 className="text-black dark:text-white text-3xl font-bold text-center mb-8">Hey there, <br /> welcome back</h1>
            <div className="flex flex-col gap-4 my-5">
                <Button variant={"gray"} type="submit">
                    <FcGoogle className="text-xl" />
                    <span className="ml-2 text-zinc-800 dark:text-white">Login with Google</span>
                </Button>
                <Button variant={"gray"} type="submit">
                    <FaGithub className="text-xl " />
                    <span className="ml-2 text-zinc-800 dark:text-white">Login with Github</span>
                </Button>
            </div>
            <div className="flex w-full items-center justify-between">
                <Separator className="!w-[35%] h-[1px]" />
                <p className="font-semibold text-center text-zinc-500 dark:text-zinc-400">Or login with</p>
                <Separator className="!w-[35%] h-[1px]" />
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center gap-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel className="text-md text-zinc-500 dark:text-zinc-400 font-semibold">Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel className="text-md text-zinc-500 dark:text-zinc-400 font-semibold">Password</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input type={passwordVisible ? "text" : "password"} placeholder="Enter your password" {...field} />
                                        <div className="absolute top-[50%] right-3 translate-y-[-21px]">
                                            {!passwordVisible ? <FaRegEyeSlash className="absolute right-3 top-3 text-zinc-500 dark:text-zinc-400 cursor-pointer h-5 w-5" onClick={() => setPasswordVisible(!passwordVisible)} /> : <FaRegEye className="absolute right-3 top-3 text-zinc-500 dark:text-zinc-400 cursor-pointer h-5 w-5" onClick={() => setPasswordVisible(!passwordVisible)} />}
                                        </div>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <p className="text-sm ml-auto font-semibold text-red-400 hover:text-red-500 dark:text-red-500 dark:hover:text-red-400">Forgot Password</p>
                    <Button className="mt-6" variant={"primary"} type="submit">Login</Button>
                    <p className="font-semibold text-center text-zinc-500 dark:text-zinc-400">Don`t have an account? <span className="text-red-400 hover:text-red-500 dark:text-red-500 dark:hover:text-red-400" onClick={() => router.push("/auth/signUp")}>Register</span></p>
                </form>
            </Form>
        </div>
    );
}

export default SignInPage;