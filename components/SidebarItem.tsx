import Link from 'next/link';
import React from 'react'
import { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge';

interface SidebarItemProps {
    icon: IconType,
    href: string;
    label: string;
    active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    icon: Icon,
    href,
    label,
    active
}) => {
    return (
        <Link
            href={href}
            className={twMerge(`
                flex
                flex-row
                h-auto
                items-center
                w-full
                gap-x-4
                text-base
                font-medium
                hover:text-white
                transition
                text-neutral-400
                py-1
            `, active && 'text-white')}
        >
            <Icon size={26} />
            <p className="truncate w-full">{label}</p>
        </Link>
    )
}

export default SidebarItem