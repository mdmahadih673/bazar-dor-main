"use client"


import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Iproduct } from "../components/Marquee";




const HighPriceProduct = () => {
    const [products, setProducts] = useState<Iproduct[]>([]);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://api.abcz.workers.dev/api/bazardor/products');
                const allData = await res.json();
                setProducts(allData);


            } catch (error) {
                console.error("ডেটা আনতে সমস্যা:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData()
    }, []);

    if (loading) {
        return (
            <h1></h1>
        );
    }

    const increased = products.filter((p) => p.change?.dir === "up")
    const decreased = products.filter((p) => p.change?.dir === "down")



    return (
        <div className="container mx-auto px-4 py-8 space-y-10">
            <section>
                <h2 className="flex items-center gap-2 text-xl font-bold text-gray-800 mb-4">
                    <span className="text-red-600 text-2xl">▲</span>
                    আজ দাম বেড়েছে
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {increased.map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </section>

            <section>
                <h2 className="flex items-center gap-2 text-xl font-bold text-gray-800 mb-4">
                    <span className="text-green-600 text-2xl">▼</span>
                    আজ দাম কমেছে
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {decreased.map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </section>

            <section>
                <h2 className="flex items-center gap-2 text-xl font-bold text-gray-800 mb-4">
                    সব পণ্য

                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </section>

        </div>
    );
};

export default HighPriceProduct;