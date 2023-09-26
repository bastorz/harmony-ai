import { Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";

export const MAX_FREE_COUNTS = 5;

export const tools = [
    {
        label: "Conversation",
        icon: MessageSquare,
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        href: "/conversation"
    },
    {
        label: "Music Generation",
        icon: Music,
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
        href: "/music"
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        color: "text-pink-700",
        bgColor: "bg-pink-700/10",
        href: "/image"
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        color: "text-orange-700",
        bgColor: "bg-orange-700/10",
        href: "/video"
    },
    {
        label: "Code Generation",
        icon: Code,
        color: "text-green-700",
        bgColor: "bg-green-700/10",
        href: "/code"
    },
]

export const testimonials = [
    {
        name: "Antonio",
        avatar: "A",
        title: "Software Engineer",
        description: "This is the best application I've ever used."
    },
    {
        name: "Laura",
        avatar: "L",
        title: "Designer",
        description: "First time I meet a completely free AI image and video generator."
    },
    {
        name: "Sonia",
        avatar: "S",
        title: "Music Producer",
        description: "I loved the way in which I can produce my music now with this feature."
    },
    {
        name: "Pablo",
        avatar: "P",
        title: "Copywriter",
        description: "Was stucked looking for new ideas for my posts, but thanks to this tool now I'm back on track again"
    },
]