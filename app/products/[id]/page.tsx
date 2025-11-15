"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { products } from "@/lib/products-data";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShoppingCart, Check } from "lucide-react";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function ProductDetailsPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = products.find((p) => p.id === productId);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-lg text-muted-foreground">Product not found</p>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Back Button */}
      <div className="px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/products"
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Products
        </Link>
      </div>

      {/* Product Details */}
      <section className="flex-1 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-80 md:h-96 lg:h-full min-h-80 bg-muted rounded-lg overflow-hidden"
            >
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col justify-center"
            >
              <div className="mb-2">
                {product.bestSeller && (
                  <span className="bg-primary text-white text-xs px-3 py-1 rounded-xl mb-2">
                    Most Sold Product
                  </span>
                )}
                <h1 className="mb-2 bg-card w-72 px-2 py-px rounded-2xl text-black border mt-2">
                  Shreejana Home Packging Udhyog
                </h1>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  {product.fullDescription}
                </p>
              </div>

              {/* Nutrition Info */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Nutrition Information
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(product.nutritionInfo).map(([key, value]) => (
                    <div
                      key={key}
                      className="p-3 bg-card border border-border rounded-lg"
                    >
                      <p className="text-xs text-muted-foreground capitalize mb-1">
                        {key}
                      </p>
                      <p className="font-semibold text-foreground">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16 md:mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  You May Also Like
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {relatedProducts.map((relatedProduct) => (
                    <Link
                      key={relatedProduct.id}
                      href={`/products/${relatedProduct.id}`}
                    >
                      <motion.div
                        whileHover={{ translateY: -4 }}
                        className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-colors cursor-pointer"
                      >
                        <div className="relative h-40 bg-muted overflow-hidden">
                          <Image
                            src={relatedProduct.image || "/placeholder.svg"}
                            alt={relatedProduct.name}
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-foreground mb-1">
                            {relatedProduct.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            {relatedProduct.description}
                          </p>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
