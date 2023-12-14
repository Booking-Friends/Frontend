import { type IconType } from "react-icons";
import { IoPerson } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { LuShieldCheck } from "react-icons/lu";
import { FaDatabase } from "react-icons/fa";

interface NavigationData {
    title: string;
    icon: IconType;
    path: string;
}



export const PersonalData: NavigationData[] = [
    {
        title: 'Edit Profile',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        icon: IoPerson,
        path: '/settings/edit-profile',
    },
    {
        title: 'Password',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        icon: RiLockPasswordLine,
        path: '/settings/password',
    },
]

export const GeneralData: NavigationData[] = [
    {
        title: 'Data Privacy',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        icon: LuShieldCheck,
        path: '/settings/data-privacy',
    },
    {
        title: 'Admin',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        icon: FaDatabase,
        path: '/settings/admin',
    },
]