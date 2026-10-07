import Image from "next/image";
import logo from "@/assets/logo-icon.png";
import Link from "next/link";
import ButtonPage from "./Button";
import NavbarLinksPage from "./NavbarLinks";

const HeaderPage = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    return (
        <header className="w-full border-b  border-gray-200 bg-white shadow-sm">
            <div className="container mx-auto relative flex min-h-[72px] items-center px-4">

                {/* Center Logo + Website Info */}
                <div className="absolute  flex -translate-x-1/2 items-center gap-3">

                    <div className="flex h-10 w-10 items-center  overflow-hidden rounded-xl">
                        <Link href={'/'}>

                            <Image
                                src={logo}
                                alt="Bangla News 24 Logo"
                                width={40}
                                height={40}
                                className="h-10 w-10 object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    <div className="leading-tight">
                        <h1 className="text-xl font-bold tracking-tight text-red-700 sm:text-2xl">
                            Bangla News 24
                        </h1>

                        <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">
                            {date}
                        </p>
                    </div>

                </div>

                {/* Right Side Buttons */}
                <ButtonPage />

            </div>
            <NavbarLinksPage />
        </header>
    );
};

export default HeaderPage;