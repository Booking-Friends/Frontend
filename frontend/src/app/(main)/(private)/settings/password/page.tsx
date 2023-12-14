"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const changePasswordSchema = z.object({
    current_password: z.string().min(6, { message: "Password must be at least 6 characters" }),
    new_password: z.string().min(6, { message: "Password must be at least 6 characters" }),
})

const PasswordPage = () => {
    const [isEditing, setIsEditing] = useState(false)
    const [currentPasswordVisible, setCurrentPasswordVisible] = useState(false)
    const [newPasswordVisible, setNewPasswordVisible] = useState(false)

    const form = useForm<z.infer<typeof changePasswordSchema>>({
        resolver: zodResolver(changePasswordSchema),
        defaultValues: {
            current_password: "",
            new_password: "",
        },
    })

    function onSubmit(values: z.infer<typeof changePasswordSchema>) {
        console.log(values)
    }

    return (
        <div className="w-[80%] px-20 py-8">
            <h1 className="font-semibold text-2xl text-black dark:text-white mb-7">Password</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center gap-10">
                    <div className="w-full flex items-center justify-between gap-7">
                        <FormField
                            control={form.control}
                            name="current_password"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel className="text-md text-zinc-500 dark:text-zinc-400 font-semibold">Current Password</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Input readOnly={!isEditing} disabled={isEditing} type={currentPasswordVisible ? "text" : "password"} placeholder="Enter your password" {...field} />
                                            <div className="absolute top-[50%] right-3 translate-y-[-21px]">
                                                {!currentPasswordVisible ? <FaRegEyeSlash className="absolute right-3 top-3 text-zinc-500 dark:text-zinc-400 cursor-pointer h-5 w-5" onClick={() => setCurrentPasswordVisible(!currentPasswordVisible)} /> : <FaRegEye className="absolute right-3 top-3 text-zinc-500 dark:text-zinc-400 cursor-pointer h-5 w-5" onClick={() => setCurrentPasswordVisible(!currentPasswordVisible)} />}
                                            </div>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="new_password"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel className="text-md text-zinc-500 dark:text-zinc-400 font-semibold">New Password</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Input readOnly={!isEditing} disabled={isEditing} type={newPasswordVisible ? "text" : "password"} placeholder="Enter your password" {...field} />
                                            <div className="absolute top-[50%] right-3 translate-y-[-21px]">
                                                {!newPasswordVisible ? <FaRegEyeSlash className="absolute right-3 top-3 text-zinc-500 dark:text-zinc-400 cursor-pointer h-5 w-5" onClick={() => setNewPasswordVisible(!newPasswordVisible)} /> : <FaRegEye className="absolute right-3 top-3 text-zinc-500 dark:text-zinc-400 cursor-pointer h-5 w-5" onClick={() => setNewPasswordVisible(!newPasswordVisible)} />}
                                            </div>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="w-full flex justify-end ">
                        {isEditing ? (
                            <Button className="mt-6 !w-44" variant={"primary"} type="submit">Change password</Button>
                        ) : (
                            <Button onClick={(e) => {
                                e.preventDefault()
                                setIsEditing(true)
                            }} className="mt-6 !w-44" variant={"primary"}>Edit Password</Button>
                        )}
                    </div>
                </form>
            </Form>
        </div>
    );
}

export default PasswordPage;