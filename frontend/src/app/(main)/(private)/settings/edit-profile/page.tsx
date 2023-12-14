"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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

const editProfileSchema = z.object({
    first_name: z.string().min(2, { message: "First name must be at least 2 characters" }),
    last_name: z.string().min(2, { message: "Last name must be at least 2 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone_number: z.string().min(10, { message: "Phone number must be at least 10 characters" }),
})


const EditProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false)

    const form = useForm<z.infer<typeof editProfileSchema>>({
        resolver: zodResolver(editProfileSchema),
        defaultValues: {
            email: "",
            first_name: "",
            last_name: "",
            phone_number: "",
        },
    })

    function onSubmit(values: z.infer<typeof editProfileSchema>) {
        console.log(values)
    }

    return (
        <div className="w-[80%] px-20 py-8">
            <div>
                <Avatar className="h-24 w-24 mb-8">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center gap-7">
                    <div className="w-full flex items-center justify-between gap-7">
                        <FormField
                            control={form.control}
                            name="first_name"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel className="text-md text-zinc-500 dark:text-zinc-400 font-semibold">First name</FormLabel>
                                    <FormControl>
                                        <Input readOnly={!isEditing} disabled={isEditing} placeholder="Enter your first name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="last_name"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel className="text-md text-zinc-500 dark:text-zinc-400 font-semibold">Last name</FormLabel>
                                    <FormControl>
                                        <Input readOnly={!isEditing} disabled={isEditing} placeholder="Enter your last name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel className="text-md text-zinc-500 dark:text-zinc-400 font-semibold">Email</FormLabel>
                                <FormControl>
                                    <Input readOnly={!isEditing} disabled={isEditing} placeholder="Enter your email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone_number"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel className="text-md text-zinc-500 dark:text-zinc-400 font-semibold">Phone number</FormLabel>
                                <FormControl>
                                    <Input readOnly={!isEditing} disabled={isEditing} placeholder="Enter your phone" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="w-full flex justify-end ">
                        {isEditing ? (
                            <Button className="mt-6 !w-44" variant={"primary"} type="submit">Save Profile</Button>
                        ) : (
                            <Button onClick={(e) => {
                                e.preventDefault()
                                setIsEditing(true)
                            }} className="mt-6 !w-44" variant={"primary"}>Edit Profile</Button>
                        )}
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default EditProfilePage