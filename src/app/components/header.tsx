import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo-icon.png'
import ButtonsPage from './Button';
import NavbarLinksPage from './NavbarLinks';


const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });
    return (
        <header className="w-full border-b border-gray-200 bg-white shadow-sm sticky top-0 z-50">

            <div className="container mx-auto relative flex min-h-[72px] items-center justify-between px-4 sm:px-6 lg:px-8">


                <div className="flex items-center gap-3">
                    <Link href={'/'} className="flex-shrink-0">
                        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-green-50">

                            <Image
                                src={logo}
                                alt="বাজার দর Logo"
                                width={40}
                                height={40}
                                className="h-10 w-10 object-contain p-1"
                                priority
                            />
                        </div>
                    </Link>

                    <Link href={'/'}>
                        <div className="leading-tight">
                            <h1 className="text-xl font-bold tracking-tight text-green-700 sm:text-2xl">
                                বাজার দর
                            </h1>
                            <p className="mt-0.5 text-[10px] font-medium text-gray-500 sm:text-xs">
                                {date}
                            </p>
                        </div>
                    </Link>
                </div>

                {/* Right Side: Buttons */}
                <div className="flex items-center gap-2 sm:gap-4">

                    {/* Sign In Button */}
                    <ButtonsPage />

                </div>
            </div>

            <NavbarLinksPage />
        </header>
    );
};

export default Header;