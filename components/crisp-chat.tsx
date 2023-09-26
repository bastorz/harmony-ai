"use client"

import { Crisp } from "crisp-sdk-web"
import { useEffect } from "react"

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("b1464837-0920-47ac-a820-0a1ee3fbc13c")
    }, [])

    return null
}