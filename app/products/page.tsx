"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products-data";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { Search } from "lucide-react";

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6); // pagination

  const categories = [
    { value: "all", label: "All Products" },
    { value: "nuts", label: "Nuts" },
    { value: "dried-fruits", label: "Dried Fruits" },
  ];

  const categoryMap: Record<string, string[]> = {
    nuts: ["almonds", "cashews", "walnuts", "pistachios"],
    "dried-fruits": ["raisins", "dates"],
  };

  // --- Optimized Filter Logic ---
  const filteredProducts = useMemo(() => {
    const lower = searchTerm.toLowerCase();

    return products.filter((p) => {
      const match =
        p.name.toLowerCase().includes(lower) ||
        p.description.toLowerCase().includes(lower);

      if (selectedCategory === "all") return match;

      const allowedIds = categoryMap[selectedCategory] || [];
      return match && allowedIds.includes(p.id);
    });
  }, [searchTerm, selectedCategory]);

  // Pagination slice
  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  const resetPagination = () => setVisibleCount(6);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Search & Filter */}
      <section className="py-8 bg-white top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  resetPagination();
                }}
                className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <motion.button
                  key={cat.value}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedCategory(cat.value);
                    resetPagination();
                  }}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === cat.value
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Header */}
      <section className="py-12 md:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Products
            </h1>
            <p className="text-lg text-muted-foreground">
              Browse our complete collection of dry fruits
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="flex-1 py-12 md:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <>
              <p className="text-sm text-muted-foreground mb-6">
                Showing {visibleProducts.length} of {filteredProducts.length}{" "}
                products
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {visibleProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    className="relative"
                  >
                    {/* ⭐ BEST SELLER BADGE */}
                    {product.bestSeller && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="
                          absolute top-2 right-2
                          text-xs font-semibold
                          px-3 py-1
                          rounded-full
                          bg-gradient-to-r from-yellow-400 to-orange-500
                          text-black
                          shadow-lg
                          animate-pulse
                          ring-2 ring-yellow-300 ring-offset-2
                        "
                      >
                        ⭐ Most Sold
                      </motion.span>
                    )}

                    {/* Product Card */}
                    <ProductCard {...product} />
                  </motion.div>
                ))}
              </div>

              {/* Load More Button */}
              {hasMore && (
                <div className="text-center mt-10">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setVisibleCount((prev) => prev + 6)}
                    className="px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-primary/90"
                  >
                    Load More
                  </motion.button>
                </div>
              )}
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-lg text-muted-foreground mb-2">
                No products found
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  resetPagination();
                }}
                className="text-primary hover:underline"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
