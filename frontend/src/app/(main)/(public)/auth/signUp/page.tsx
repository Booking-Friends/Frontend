"use client"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import * as z from "zod"
import {Button} from "@/components/ui/button"
import {
    Form,
    FormControl, FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Separator} from "@/components/ui/separator"
import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";
import React from "react"
import {FaRegEyeSlash} from "react-icons/fa";
import {FaRegEye} from "react-icons/fa";
import {useRouter} from "next/navigation";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import Link from "next/link";
import {DatePicker} from "@/components/ui/date-picker";
import {AuthService} from "@/services/auth.service";
import Cookie from "js-cookie";


const signUpSchema = z.object({
    name: z.string().min(2, {message: "First name must be at least 2 characters"}),
    lastName: z.string().min(2, {message: "Last name must be at least 2 characters"}),
    userName: z.string().min(2, {message: "Username must be at least 2 characters"}),
    phoneNumber: z.string().min(2, {message: "Phone number must be at least 2 characters"}),
    role: z.enum(["Friend", "Customer"]),
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(6, {message: "Password must be at least 6 characters"})
})
const SignUpPage = () => {
    const [passwordVisible, setPasswordVisible] = React.useState(false)
    const [birthDate, setBirthDate] = React.useState<Date>()
    const form = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            email: "",
            password: "",
            name: "",
            lastName: "",
            phoneNumber: "",
            role: "Friend",
            userName: "",
        },
    })
    const router = useRouter()

    function onSubmit(values: z.infer<typeof signUpSchema>) {
        if(!birthDate) return null
        AuthService.register({...values, birthDate}).then(res => {
            Cookie.set("access-token", res.response.token)
            router.push("/discovery")
        })
    }

    return (
        <div className="w-full py-2 px-24 relative">
            <h1 className="text-black dark:text-white text-3xl font-bold text-center mb-8">Hey there, Let`s start!</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center gap-4">
                    <div className={"flex w-full gap-5"}>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({field}) => (
                                <FormItem className="w-full">
                                    <FormLabel className="text-md text-zinc-500 dark:text-zinc-400 font-semibold">First
                                        name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your first name" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({field}) => (
                                <FormItem className="w-full">
                                    <FormLabel className="text-md text-zinc-500 dark:text-zinc-400 font-semibold">Last
                                        name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your last name" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="userName"
                        render={({field}) => (
                            <FormItem className="w-full">
                                <FormLabel className="text-md text-zinc-500 dark:text-zinc-400 font-semibold">User name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your user name" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem className="w-full">
                                <FormLabel
                                    className="text-md text-zinc-500 dark:text-zinc-400 font-semibold">Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your email" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({field}) => (
                            <FormItem className="w-full">
                                <FormLabel className="text-md text-zinc-500 dark:text-zinc-400 font-semibold">Phone
                                    number</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your phone number" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <div className={"flex w-full gap-5"}>
                        <FormField
                            control={form.control}
                            name="role"
                            render={({field}) => (
                                <FormItem className={"w-[100%]"}>
                                    <FormLabel>User role</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select user role"/>
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="Friend">Friend</SelectItem>
                                            <SelectItem value="Customer">Customer</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                       <div className={"w-full"}>
                           <p className={"text-sm mb-3"}>Birth date</p>
                           <DatePicker setDate={setBirthDate} date={birthDate}/>
                       </div>
                    </div>
                    <FormField
                        control={form.control}
                        name="password"
                        render={({field}) => (
                            <FormItem className="w-full">
                                <FormLabel
                                    className="text-md text-zinc-500 dark:text-zinc-400 font-semibold">Password</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input type={passwordVisible ? "text" : "password"}
                                               placeholder="Enter your password" {...field} />
                                        <div className="absolute top-[50%] right-3 translate-y-[-21px]">
                                            {!passwordVisible ? <FaRegEyeSlash
                                                className="absolute right-3 top-3 text-zinc-500 dark:text-zinc-400 cursor-pointer h-5 w-5"
                                                onClick={() => setPasswordVisible(!passwordVisible)}/> : <FaRegEye
                                                className="absolute right-3 top-3 text-zinc-500 dark:text-zinc-400 cursor-pointer h-5 w-5"
                                                onClick={() => setPasswordVisible(!passwordVisible)}/>}
                                        </div>
                                    </div>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button className="mt-6" variant={"primary"} type="submit">Register</Button>
                    <p className="font-semibold text-center text-zinc-500 dark:text-zinc-400">Already have an
                        account? <span
                            className="text-red-400 hover:text-red-500 dark:text-red-500 dark:hover:text-red-400"
                            onClick={() => router.push("/auth/signIn")}>Login</span></p>
                </form>
            </Form>
        </div>
    );
}

export default SignUpPage;