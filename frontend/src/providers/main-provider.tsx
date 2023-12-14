"use client"
import {ThemeProvider} from "@/providers/theme-provider";
import {PropsWithChildren} from "react";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()
const MainProvider = ({children}: PropsWithChildren) => {
    return (
        <QueryClientProvider client={queryClient}>
            {/*<ThemeProvider  attribute="class"*/}
            {/*                defaultTheme="system"*/}
            {/*                enableSystem*/}
            {/*                disableTransitionOnChange>*/}
                {children}
            {/*</ThemeProvider>*/}
        </QueryClientProvider>
    )
}

export default MainProvider;