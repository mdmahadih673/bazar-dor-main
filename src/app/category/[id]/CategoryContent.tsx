// app/category/[id]/CategoryContent.tsx
import { Iproduct } from '@/app/components/Marquee';
import ProductCard from '@/app/products/ProductCard';

export default async function CategoryContent({ params }: { params: Promise<{ id: string }> }) {
    const { id: slug } = await params;

    const url = `https://api.api-store.workers.dev/api/bazardor/products?category=${encodeURIComponent(slug)}`;
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
        return <p className="text-center text-red-500 py-8">ডেটা আনতে সমস্যা হয়েছে</p>;
    }

    const data = await res.json();
    const categoryData: Iproduct[] = Array.isArray(data) ? data : [];

    if (categoryData.length === 0) {
        return (
            <div className="py-8 text-center text-gray-500">
                <p>কোনো পণ্য পাওয়া যায়নি</p>
                <p className="mt-2 text-sm text-gray-400">Category: {slug}</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categoryData.map((p) => (
                <ProductCard key={p.id} product={p} />
            ))}
        </div>
    );
}