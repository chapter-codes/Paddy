'use client'

import { usePathname } from "next/navigation"

export default function PathName(){
    const pathName=usePathname()
    return(<p>{pathName=='/'? "Home": pathName}</p>)
}