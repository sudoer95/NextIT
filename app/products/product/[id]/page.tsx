import { products } from "@/lib/dummyData";
import { categories } from "@/lib/dummyData";
import { notFound } from "next/navigation";
import Image from "next/image";
import { RouteTransition } from "@/components/RouteTransition";

interface ProductPageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const productId = parseInt(params.id, 10);
  const product = products.find(p => p.id === productId);
  const category = categories.find(c => c.id === product?.category_id);
  if (!product) {
    return notFound();
  }

  return (
    <main className="p-4 max-w-3xl mx-auto space-y-6">
      <RouteTransition>
      <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden">
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-2">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <span className="inline-block text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded">
          {category?.name || "Unknown Category"}
        </span>
        <p className="text-gray-700 mt-4">{product.description}</p>
      </div>

      <button className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
        Add to Cart
      </button>
      </RouteTransition>
    </main>
  );
}
