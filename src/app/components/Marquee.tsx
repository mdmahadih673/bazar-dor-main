"use client"



import { useEffect, useState } from "react";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface Iproduct {
    id: number
    nameBn: string,
    today: number
    unit: string
    image: string;
    categoryIcon: string;
    change: {
        dir: "up" | "down" | "flat";
        pct: number;
    };
}




const Marquee = () => {
    const [products, setProducts] = useState<Iproduct[]>([]);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products');
                const allData = await res.json();
                setProducts(allData.slice(0, 10));


            } catch (error) {
                console.error("ডেটা আনতে সমস্যা:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData()
    }, []);

    if (loading) return <p className="p-4">লোড হচ্ছে...</p>;





    return (

        <div className="overflow-hidden  bg-white border-y border-gray-200 py-3">
            <div className="flex container mx-auto animate-marquee whitespace-nowrap gap-8">
                <MarqueeText direction="right" duration={10} >
                    {products.map((product) => (
                        <div
                            className="flex items-center gap-2 text-sm font-medium"
                            key={product.id}>

                            <span className="text-lg">
                                {product.image || product.categoryIcon}
                            </span>

                            <span className="text-gray-800">{product.nameBn}

                            </span>

                            <span className="text-gray-900 font-bold">{product.today}টাকা/{product.unit}

                            </span>

                            {product.change.dir === 'up' && (
                                <span className="text-green-600 font-semibold"  >▲{product.change.pct}%
                                </span>
                            )}
                            {product.change.dir === 'down' && (
                                <span className="text-red-600 font-semibold">▼{Math.abs(product.change.pct)}%
                                </span>
                            )};
                            {product.change.dir === 'flat' && (

                                <span className="text-gray-500 font-semibold">-0%
                                </span>
                            )}
                        </div>
                    ))}

                </MarqueeText>
            </div>

        </div>
    );
};

export default Marquee;