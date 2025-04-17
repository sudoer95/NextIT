import ProductCart from "../components/ProductCard";
import { products } from "@/lib/dummyData";
import { categories } from "@/lib/dummyData";
import { Carousel } from "../components/Carousel";
import Link from "next/link";
import { RouteTransition } from "@/components/RouteTransition";

export default function Home() {
  const popularProducts = products.slice(0, 3);
  const popularCategories = categories.slice(0, 5);
  return (
    <main>
      <RouteTransition>
      <br />
      <section>
        <h1 className="text-2xl font-bold mb-4 text-center font-mono">Welcome to the greatest <b className="font-extrabold">Tech</b> store!</h1>
        <p className="text-lg mb-4 text-center">
          Discover a wide range of products tailored just for you.
        </p>
        <Carousel
        images={["/images/dummy1x1.png", "/images/dummy1x1.png", "/images/dummy1x1.png"]}
        autoSlideInterval={4000}
      />
      </section>
      <br />
      <section>
        <h2 className=" text=xl font-semibold mb-4 text-center">Popular categories</h2>
        <div className="flex justify-center gap-6">
          {popularCategories.map(category =>( <div className="" key={category.id}><span className="text-xl mb-4 hover:text-amber-500"><Link href={`/products?category_id=${category.id}`}>{category.name}</Link></span></div> ))}
        </div>
      </section>
      <br />
      <section>
        <h2 className="text-xl text-center font-semibold mb-4">You might also like</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {popularProducts.map(product => (
            <ProductCart key={product.id} product={product} />
          ))}
        </div>
      </section>
      </RouteTransition>
    </main>
  );
}
