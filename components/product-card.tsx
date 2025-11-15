"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  description: string;
}

export function ProductCard({
  id,
  name,
  image,
  description,
}: ProductCardProps) {
  return (
    <Link href={`/products/${id}`}>
      <motion.div
        whileHover={{ translateY: -8 }}
        className="group cursor-pointer h-full"
      >
        <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-colors h-full flex flex-col">
          {/* Image Container */}
          <div className="relative h-48 md:h-56 bg-muted overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Content */}
          <div className="p-5 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {description}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
