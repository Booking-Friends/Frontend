import { TbDiscountCheckFilled } from "react-icons/tb";
import { CiStar } from "react-icons/ci";
import { MdOutlineTimer } from "react-icons/md";
import { type IconType } from "react-icons";
import { MdAccessTime } from "react-icons/md";
import { FaDownload } from "react-icons/fa";

interface NavigationData {
    title: string;
    icon: IconType;
    path: string;
}

export const FriendsMenuData: NavigationData[] = [
    {
        title: 'Friends List',
        icon:  TbDiscountCheckFilled,
        path: '/friends/list',
    },
    {
        title: 'Current Friends',
        icon:  CiStar,
        path: '/friends/current',
    },
    {
        title: 'History',
        icon:  MdOutlineTimer,
        path: '/friends/history',
    },
];

export const PartiesMenuData: NavigationData[] = [
    {
        title: 'Parties List',
        icon:  TbDiscountCheckFilled,
        path: '/friends/list',
    },
    {
        title: 'Current Parties',
        icon:  CiStar,
        path: '/friends/current',
    },
    {
        title: 'History',
        icon:  MdOutlineTimer,
        path: '/friends/history',
    },
];

export const GiftsMenuData: NavigationData[] = [
    {
        title: 'My Gifts',
        icon:  TbDiscountCheckFilled,
        path: '/gifts/list',
    },
    {
        title: 'History',
        icon:  MdOutlineTimer,
        path: '/gifts/history',
    },
];

export const LibraryData: NavigationData[] = [
    {
        title: 'Recent played',
        icon:  MdAccessTime,
        path: '/recent-played',
    },
    {
        title: 'Downloaded',
        icon:  FaDownload,
        path: '/downloaded',
    },
]