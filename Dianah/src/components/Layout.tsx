// src/components/Layout.tsx
import Navbar from "./Navbar";
import Footer from "./Footer";

type LayoutProps = {
    children: React.ReactNode;
    showNavbar?: boolean;
    showFooter?: boolean;
    variant?: "default" | "minimal" | "auth";
};

export default function Layout({
    children,
    showNavbar = true,
    showFooter = false,
    variant = "default",
}: LayoutProps) {
    return (
        <div className={`min-h-screen flex flex-col ${variant === "auth" ? "bg-gray-100" : "bg-white"}`}>
            {showNavbar && <Navbar />}
            <main className="flex-grow">{children}</main>
            {showFooter && <Footer />}
        </div>
    );
}
