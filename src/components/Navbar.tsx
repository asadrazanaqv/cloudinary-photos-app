import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Navbar () {
    return (
        <div className="border-b">
          <div className="flex h-16 items-center px-3 container mx-auto">
            <h1 className="text-3xl font-serif font-extrabold ">Likely</h1>
            <div className="ml-auto flex items-center space-x-4">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

    )
}