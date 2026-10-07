"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Category {
    id: string;
    slug: string;
    nameBn: string;
    icon: string
}

const NavbarLinksPage = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories');
                const data = await res.json();
                setCategories(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error("ক্যাটেগরি আনতে সমস্যা:", error);
                setCategories([]);
            } finally {
                setLoading(false);
            }
        };

        getCategories();
    }, []);

    return (
        <div className="ml-8 sm:px-6 lg:px-8">
            <div className="flex w-full container mx-auto items-center sticky top-0 gap-4 border-b border-gray-100 bg-white py-2 text-sm font-medium text-gray-700 shadow-sm sm:gap-6 sm:py-3 sm:text-base">
                <Link href="/" className="transition hover:text-red-600">
                    হোম
                </Link>

                {!loading && categories.map((category: Category) => (
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