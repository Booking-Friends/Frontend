import SettingsMenu from "@/components/settings-menu/settings-menu"
import { Separator } from "@/components/ui/separator"


const SettingsLayout = ({children}: React.PropsWithChildren) => {
    return (
        <div className="h-full w-full flex">
            <SettingsMenu/>
            <Separator className="w-[1px] h-full" orientation="vertical"/>
            {children}
        </div>
    )
}
export default SettingsLayout 