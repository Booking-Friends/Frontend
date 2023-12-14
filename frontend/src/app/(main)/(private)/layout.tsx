import Header from "@/components/header/header";
import SideMenu from "@/components/sideMemu/sideMenu";
import { Separator } from "@/components/ui/separator";



const MainLayout = ({ children }: React.PropsWithChildren) => {
    return (
        <main className="w-screen h-screen overflow-hidden">
            <Header/>
            <div className="flex h-full">
                <SideMenu />
                <Separator className="w-[1px] h-full" orientation="vertical"/>
                {children}
            </div>
        </main>
    )
}

export default MainLayout;