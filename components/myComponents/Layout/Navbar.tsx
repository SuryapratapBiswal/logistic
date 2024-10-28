import React from 'react'
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className="w-full h-16 bg-gradient  text-white px-4 flex justify-end ">
      <div className="flex items-center gap-2 mr-5">
        <FaBell size={24} />
        <Popover>
          <PopoverTrigger asChild>
            <IoPersonCircleSharp size={34} />
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  surya.pratap@lpu.com
                </p>
                <hr />

                <ol className="flex flex-col gap-2">
                  <Link href="/profile">
                    Profile
                  </Link>
                  <Link href="/forgot-password">
                    Forgot password
                  </Link>
                  <hr />
                  <Link href={"/"}>
                    Logout
                  </Link>
                </ol>
              </div>

            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}

export default Navbar