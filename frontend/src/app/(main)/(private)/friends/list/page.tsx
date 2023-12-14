"use client"
import {useQuery} from "react-query";
import {FriendsService} from "@/services/friends.service.ts";
import {ScrollArea} from "@/components/ui/scroll-area";
import {FriendType} from "@/types/friend.interface";
import FriendCard from "@/components/friend-card/friend-card";


const FriendsListPage = () => {
    const {data, isError, isLoading} = useQuery({
        queryKey: ["friends"],
        queryFn: async () => await FriendsService.getAll()
    });

    console.log(data)

    return (
        <ScrollArea className={"w-full px-10  flex justify-center py-5"}>
                <div className={"grid grid-cols-3 h-screen gap-7 w-fit"}>
                    {data && data.map((friend: FriendType) => (
                        <FriendCard friend={friend} key={friend.ID}/>
                    ))}
                </div>
        </ScrollArea>
    )
}

export default FriendsListPage;