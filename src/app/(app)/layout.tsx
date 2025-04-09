import type { Metadata } from "next";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Navbar } from "./NavBar";

export const metadata: Metadata = {
    title: "ChaseBuster app",
    description: "Descriptive description",
};

const links = [
    { name: "Home", href: "/" },
    { name: "Accounts", href: "/accounts" },
    { name: "Transactions", href: "/transactions" },
];

export default async function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { userId } = await auth();
    const isSignedIn = !!userId;
    if (!isSignedIn) {
        redirect("/sign-in");
    }
    return (
        <div className="flex flex-col h-screen relative">
            <Navbar links={links} />
            {/* Offset for the Navbar */}
            <div className="pt-16 h-full w-full">
                <main className="px-2 lg:px-6 h-full w-full relative">
                    {children}
                </main>
            </div>
        </div>
    );
}
