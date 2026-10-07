import Link from "next/link";

interface Category {
    id: string;
    slug: string;
    nameBn: string;
    icon: string
}




const getCategories = async () => {

    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories')
    const categorie = await res.json();
    return categorie
}


const NavbarLinksPage = async () => {
    const categories = await getCategories()
    console.log(categories);


    return (
        <div className="container mx-auto ml-8 sm:px-6 lg:px-8">

            <div className="flex w-full items-center sticky top-0  gap-4 border-b border-gray-200 bg-white py-2 text-sm font-medium text-gray-700 shadow-sm sm:gap-6 sm:py-3 sm:text-base">

                <Link
                    href="/"
                    className="transition hover:text-red-600"
                >
                    হোম
                </Link>

                {categories.map((category: Category) => (
                    <Link
                        key={category.nameBn}
                        href={`/category/${category.nameBn}`}
                        className="transition hover:text-red-600"
                    >
                        {category.nameBn}
                        {category.icon}
                    </Link>
                ))}

            </div>
        </div>


    );
};

export default NavbarLinksPage;