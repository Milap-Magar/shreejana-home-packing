"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Leaf,
  Zap,
  Package,
  Mail,
  ArrowRight,
  HandPlatter,
  Building2,
  MapPin,
  Store,
  Send,
  Phone,
} from "lucide-react";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionTitle } from "@/components/section-title";
import { ProductCard } from "@/components/product-card";
import { WhyChooseCard } from "@/components/why-choose-card";
import { products } from "@/lib/products-data";
import Image from "next/image";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const images = [
    { src: "/product/Almond.jpg", alt: "Almonds - Nepal" },
    { src: "/product/WalnutPeeled.jpg", alt: "WalnutPeeled" },
    { src: "/product/Cashewnut.jpg", alt: "Cashewnut - Handpicked" },
    { src: "/product/yellowraisin.jpg", alt: "yellowraisin" },
    { src: "/product/Mixnut.jpg", alt: "Mixnut - Handpicked" },
    { src: "/product/Mixnuts.jpg", alt: "Mixed Dry Fruits" },
    // { src: "/product/Pista.jpg", alt: "Mixed Dry Fruits" },
  ];

  const whyChooseUs = [
    {
      icon: Leaf,
      title: "Hand Packaging",
      description: "100% hygenic, dry fruits from sustainable farms & cattles.",
    },
    {
      icon: Zap,
      title: "Women Empowered",
      description: "We assest women only as we have the team of women.",
    },
    {
      icon: HandPlatter,
      title: "Decades of Service",
      description:
        "Selling dry fruits for past 30+ years and years more to go.",
    },
    {
      icon: Package,
      title: "Premium Quality",
      description:
        "Hand-picked and quality-tested to ensure the best products reach you.",
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = (index = 0): Variants => ({
    hidden: { opacity: 0, y: 40, scale: 0.92 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", damping: 18, stiffness: 120 },
    },
    hover: { y: -12, scale: 1.03, transition: { duration: 0.18 } },
    tap: { scale: 0.98 },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden py-24">
        {/* Floating glow */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 0.25, scale: 1 }}
            transition={{ duration: 1.7 }}
            className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-pink-300 blur-[140px]"
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
          {/* TEXT SECTION */}
          <div className="space-y-6">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-extrabold text-[#2c1810] leading-tight"
            >
              Pure Nepali Dry Fruits
              <span className="block text-[#ff0a54]">
                Fresh • Organic • Premium
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg md:text-xl text-[#2c1810]/80 max-w-lg"
            >
              30 years of expertise, pure in quality & Dry fruits you can trust.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="flex gap-4"
            >
              <button className="px-6 py-3 rounded-xl bg-[#ff0a54] text-white font-medium flex items-center gap-2 hover:bg-[#ff477e] transition-all shadow-lg shadow-[#ff0a54]/30">
                Shop Now <ArrowRight className="w-4 h-4" />
              </button>

              <button className="px-6 py-3 rounded-xl bg-white/60 backdrop-blur-md border border-[#ffb3c1] font-medium text-[#2c1810] hover:bg-white transition-all">
                Contact Us
              </button>
            </motion.div>
          </div>

          <motion.div
            className="relative w-full flex items-center justify-center"
            initial="hidden"
            animate="show"
            variants={containerVariants}
          >
            <div className="relative w-full max-w-xl h-[420px] md:h-[480px]">
              {/* floating glow behind deck */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  animate={{ scale: [0.98, 1.02, 0.98] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="w-[420px] h-[420px] rounded-full bg-white/30 blur-3xl opacity-20"
                />
              </div>

              {images.map((img, i) => {
                const leftOffset = (i - (images.length - 1) / 2) * 95;
                const rotate = (i - (images.length - 1) / 2) * 9.5;

                return (
                  <motion.div
                    key={img.src}
                    className="absolute top-1/2 left-1/2 w-[72%] md:w-[60%] -translate-x-1/2 -translate-y-1/2 cursor-grab"
                    variants={cardVariants(i)}
                    whileHover="hover"
                    whileTap="tap"
                    drag="x"
                    dragConstraints={{ left: -90, right: 90 }}
                    dragElastic={0.16}
                    onDragStart={(e) => {
                      const el = (e.target as HTMLElement).closest(
                        "[data-card-index]",
                      ) as HTMLElement;
                      if (el) el.style.zIndex = "999";
                    }}
                    onDragEnd={(e) => {
                      const el = (e.target as HTMLElement).closest(
                        "[data-card-index]",
                      ) as HTMLElement;
                      if (el) el.style.zIndex = String(10 + i);
                    }}
                    data-card-index={i}
                    transition={{
                      layout: { type: "spring", stiffness: 200, damping: 22 },
                    }}
                    style={{
                      zIndex: 10 + i,
                      transformOrigin: "center",
                      left: `calc(50% + ${leftOffset}px)`,
                      rotate: `${rotate}deg`,
                    }}
                  >
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={780}
                        height={780}
                        className="w-full h-[340px] md:h-[420px] object-cover"
                        priority={i === 0}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section id="featured" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Featured Collection"
            description="Discover our finest selection of premium dry fruits, For three decades, we have been committed to delivering the highest-quality dry fruits, sourced with care and crafted with passion for purity, taste, and health."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <motion.a
              href="/products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              View All Products
            </motion.a>
          </div>
        </div>
      </section>

      {/* DISTRIBUTION SECTION */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#ff0a54] blur-[160px]"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            title="Where to Find Us"
            description="Currently supplying dry fruits across major supermarket chains"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
            {/* Pokhara Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#ffb3c1]/30 hover:border-[#ff0a54]/50 transition-all duration-300">
                {/* Icon container */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ff0a54] to-[#ff477e] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-[#2c1810] mb-3">
                  Pokhara
                </h3>
                <p className="text-[#2c1810]/70 leading-relaxed">
                  Available at leading supermarket chains throughout the city
                </p>

                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-[#ff0a54]/5 -z-10 group-hover:scale-150 transition-transform duration-500" />
              </div>
            </motion.div>

            {/* Kathmandu Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#ffb3c1]/30 hover:border-[#ff0a54]/50 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ff0a54] to-[#ff477e] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-[#2c1810] mb-3">
                  Kathmandu
                </h3>
                <p className="text-[#2c1810]/70 leading-relaxed">
                  Find us at supermarkets /stores across the valley
                </p>

                <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-[#ff0a54]/5 -z-10 group-hover:scale-150 transition-transform duration-500" />
              </div>
            </motion.div>

            {/* Lalitpur Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#ffb3c1]/30 hover:border-[#ff0a54]/50 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ff0a54] to-[#ff477e] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Store className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-[#2c1810] mb-3">
                  Lalitpur
                </h3>
                <p className="text-[#2c1810]/70 leading-relaxed">
                  Stocked at major retail outlets for your convenience
                </p>

                <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-[#ff0a54]/5 -z-10 group-hover:scale-150 transition-transform duration-500" />
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-white/80 backdrop-blur-md rounded-2xl px-8 py-6 shadow-lg border border-[#ffb3c1]/40">
              <p className="text-[#2c1810] text-lg mb-4">
                Can't find us in your area?{" "}
                <span className="font-semibold text-[#ff0a54]">
                  We're expanding soon!
                </span>
              </p>
              <button className="px-6 py-3 rounded-xl bg-[#ff0a54] text-white font-medium hover:bg-[#ff477e] transition-all shadow-lg shadow-[#ff0a54]/30 flex items-center gap-2 mx-auto">
                Request in Your Area <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Why Choose Us?"
            description="We're committed to delivering the finest quality and experience"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <WhyChooseCard {...item} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            className="absolute top-20 left-1/4 w-[400px] h-[400px] rounded-full bg-[#ff0a54] blur-[120px]"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.08 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute bottom-20 right-1/4 w-[350px] h-[350px] rounded-full bg-pink-300 blur-[100px]"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* LEFT SIDE - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#2c1810] mb-4">
                  Let's Connect
                </h2>
                <p className="text-lg text-[#2c1810]/70">
                  Have questions about our products? We're here to help you find
                  the perfect dry fruits.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-[#ffb3c1]/30 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff0a54] to-[#ff477e] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-[#2c1810]/60 font-medium">
                      Email Us
                    </p>
                    <p className="text-[#2c1810] font-semibold">
                      info@dryfruits.com
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-[#ffb3c1]/30 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff0a54] to-[#ff477e] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-[#2c1810]/60 font-medium">
                      Call Us
                    </p>
                    <p className="text-[#2c1810] font-semibold">
                      +977 123-456-7890
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-[#ffb3c1]/30 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff0a54] to-[#ff477e] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-[#2c1810]/60 font-medium">
                      Visit Us
                    </p>
                    <p className="text-[#2c1810] font-semibold">
                      Pokhara, Nepal
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Social proof */}
              <div className="pt-4">
                <p className="text-sm text-[#2c1810]/60 mb-3">
                  Trusted by customers across Nepal
                </p>
                <div className="flex gap-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.div
                      key={star}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: star * 0.1 }}
                    >
                      <svg
                        className="w-6 h-6 text-[#ff0a54]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-[#ffb3c1]/30 space-y-5"
              >
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-[#2c1810]"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white border-2 border-[#ffb3c1]/40 rounded-xl focus:border-[#ff0a54] focus:ring-2 focus:ring-[#ff0a54]/20 outline-none transition-all text-[#2c1810] placeholder:text-[#2c1810]/40"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-[#2c1810]"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white border-2 border-[#ffb3c1]/40 rounded-xl focus:border-[#ff0a54] focus:ring-2 focus:ring-[#ff0a54]/20 outline-none transition-all text-[#2c1810] placeholder:text-[#2c1810]/40"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-[#2c1810]"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white border-2 border-[#ffb3c1]/40 rounded-xl focus:border-[#ff0a54] focus:ring-2 focus:ring-[#ff0a54]/20 outline-none transition-all resize-none text-[#2c1810] placeholder:text-[#2c1810]/40"
                    placeholder="Tell us what you're looking for..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#ff0a54] to-[#ff477e] text-white py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-[#ff0a54]/30 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-2 p-4 bg-green-50 border border-green-200 rounded-xl"
                  >
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p className="text-green-700 font-semibold">
                      Message sent successfully!
                    </p>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
