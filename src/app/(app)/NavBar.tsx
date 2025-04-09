import { NavLink } from "./NavLink";
import { UserButton } from "@clerk/nextjs";

export function Navbar({
    links,
}: {
    links: {
        name: string;
        href: string;
    }[];
}) {
    return (
        <div className="absolute z-50 w-full h-full left-0 top-0 flex flex-col pointer-events-none">
            <nav className="h-16 w-full bg-gray-800 border-b border border-gray-900 text-white flex items-center justify-between px-4 pointer-events-auto drop-shadow-xl">
                <ul className="flex space-x-4">
                    {links.map((link) => (
                        <NavLink {...link} key={link.href} />
                    ))}
                </ul>
                <UserButton />
            </nav>
        </div>
    );
}
