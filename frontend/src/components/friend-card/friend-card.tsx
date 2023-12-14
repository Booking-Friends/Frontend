import {FriendType} from "@/types/friend.interface";
import {User} from "lucide-react";
import {Button} from "@/components/ui/button";

interface FriendCardProps {
    friend: FriendType
}

const FriendCard = ({friend}: FriendCardProps) => {
    return (
        <div className={"w-72 rounded-2xl dark:bg-[#1A161F] bg-zinc-100  py-3 px-5 flex flex-col gap-3"}>
            <div className={"bg-zinc-600 flex items-center justify-center rounded-xl w-full h-40 text-3xl uppercase"}>
                {friend.name[0]}
                {friend.lastName[0]}
            </div>
            <div className={"flex gap-2 items-center w-full overflow-hidden whitespace-nowrap text-ellipsis"}>
                <User className={"w-5 h-5 dark:text-white"}/>
                <h1 className={"font-semibold text-xl"}>{friend.userName}</h1>
            </div>
            <div className={"dark:bg-[#30293A] bg-zinc-300 p-3 rounded-xl text-xs flex flex-col gap-2 text-zinc-300 h-24 overflow-scroll"}>
                <h1>{friend.name} {friend.lastName}</h1>
                <p>{friend.phoneNumber}</p>
                <p>{friend.email}</p>
            </div>
            <Button variant={"primary"}>Invite</Button>
        </div>
    )
}

export default FriendCard;