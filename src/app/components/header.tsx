import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo-icon.png'
import ButtonsPage from './Button';
import NavbarLinksPage from './NavbarLinks';
import CurrentDate from './CurrentDate';

const Header = () => {
    return (
        <header className="w-full border-b border-gray-200 bg-white shadow-sm ">

            <div className="container mx-auto  flex min-h-[72px] items-center justify-between px-4 sm:px-6 lg:px-8">


                <div className="flex items-center gap-3">
                    <Link href={'/'} className="shrink-0">
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
                                <CurrentDate />
                            </p>
                        </div>
                    </Link>
                </div>

                
                <div className="flex items-center gap-2 sm:gap-4">

                   
                    <ButtonsPage />

                </div>
            </div>

            <NavbarLinksPage />
        </header>
    );
};

export default Header;