"use client";
import { useState, useMemo } from "react";
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
  Sparkles,
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

  // Memoize static data
  const images = useMemo(
    () => [
      { src: "/product/Almond.jpg", alt: "Almonds - Nepal" },
      { src: "/product/Pista.jpg", alt: "WalnutPeeled" },
      { src: "/product/Cashewnut.jpg", alt: "Cashewnut - Handpicked" },
      { src: "/product/HazelnutTreat.jpg", alt: "yellowraisin" },
      { src: "/product/Special150gm.jpg", alt: "Mixnut - Handpicked" },
      { src: "/product/Mixnuts.jpg", alt: "Mixed Dry Fruits" },
    ],
    [],
  );

  const whyChooseUs = useMemo(
    () => [
      {
        icon: Leaf,
        title: "Hand Packaging",
        description:
          "100% hygenic, dry fruits from sustainable farms & cattles.",
      },
      {
        icon: Zap,
        title: "Women Empowered",
        description: "We assist women only as we have the team of women.",
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
    ],
    [],
  );

  const featuredProducts = useMemo(() => products.slice(0, 3), []);

  const containerVariants: Variants = useMemo(
    () => ({
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.08,
        },
      },
    }),
    [],
  );

  const cardVariants = useMemo(
    () =>
      (index = 0): Variants => ({
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { type: "spring", damping: 20, stiffness: 150 },
        },
        hover: { y: -8, scale: 1.02, transition: { duration: 0.15 } },
        tap: { scale: 0.98 },
      }),
    [],
  );

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
      <section className="relative w-full overflow-hidden py-6 md:py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-pink-300 blur-[140px] opacity-25" />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-extrabold text-[#2c1810] leading-tight"
            >
              <span className="block text-[#ff0a54] text-lg px-2 rounded-2xl bg-muted/40 w-48">
                Hygenic • Premium
              </span>
              Clean hands, Clean Pack, Pure
              <span className="text-amber-400 ps-2">Quality...</span>
            </motion.h1>

            <motion.p
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-lg md:text-xl text-[#2c1810]/80 max-w-lg"
            >
              Shreejana Home Packing Udhyog is proudly Nepali, women-led cottage
              industry specializing in premium dry fruits, seeds, spices and
              healthy snack mixes. With over 30 years of family experience, we
              combine traditional knowledge with modern hygenic practices to
              deliver nutritious, high-quality products to households
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="flex gap-4"
            >
              <a href="/products">
                <button className="px-6 py-3 rounded-xl bg-[#ff0a54] text-white font-medium flex items-center gap-2 hover:bg-[#ff477e] transition-all shadow-lg shadow-[#ff0a54]/30 cursor-pointer">
                  Explore Product <ArrowRight className="w-4 h-4" />
                </button>
              </a>
              <a href="#contact">
                <button className="cursor-pointer px-6 py-3 rounded-xl bg-white/60 backdrop-blur-md border border-[#ffb3c1] font-medium text-[#2c1810] hover:bg-white transition-all">
                  Contact Us
                </button>
              </a>
            </motion.div>
          </div>

          <motion.div
            className="relative w-full flex items-center justify-center"
            initial="hidden"
            animate="show"
            variants={containerVariants}
          >
            <div className="relative w-full max-w-xl h-[420px] md:h-[480px]">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[420px] h-[420px] rounded-full bg-white/30 blur-3xl opacity-20" />
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
                    data-card-index={i}
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <motion.a
              href="/products"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              View All Products
            </motion.a>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-20 md:py-10 relative overflow-hidden bg-gradient-to-b from-white to-pink-50/30">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-pink-200/20 blur-2xl" />
          <div className="absolute bottom-32 right-[15%] w-40 h-40 rounded-full bg-amber-200/15 blur-2xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-pink-200/60 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#ff0a54]" />
              <span className="text-sm font-semibold text-[#2c1810]">
                Our Mission
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2c1810] leading-tight">
              From Humble Beginnings to
              <span className="block mt-2 bg-gradient-to-r from-[#ff0a54] to-[#ff477e] bg-clip-text text-transparent">
                Trusted Excellence
              </span>
            </h2>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-100/30 to-transparent blur-xl" />
              <p className="relative text-lg md:text-xl text-[#2c1810]/70 leading-relaxed max-w-3xl mx-auto">
                What started as a small home-based packing unit has now grown
                into a trusted supplier for supermarkets, department stores and
                local retailers in{" "}
                <span className="font-semibold text-[#2c1810]">Kathmandu</span>,{" "}
                <span className="font-semibold text-[#2c1810]">Lalitpur</span>,{" "}
                <span className="font-semibold text-[#2c1810]">Pokhara</span>{" "}
                and other major cities.
              </p>
            </div>

            <div className="flex justify-center pt-4">
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#ff0a54] to-transparent rounded-full" />
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <WhyChooseCard {...item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DISTRIBUTION SECTION */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#ff0a54] blur-[160px] opacity-15" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            title="Where to Find Us"
            description="Currently supplying dry fruits across major supermarket chains"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12"
          >
            {[
              {
                icon: MapPin,
                title: "Pokhara",
                desc: "Available at leading supermarket chains throughout the city",
              },
              {
                icon: Building2,
                title: "Kathmandu",
                desc: "Find us at supermarkets /stores across the valley",
              },
              {
                icon: Store,
                title: "Lalitpur",
                desc: "Stocked at major retail outlets for your convenience",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#ffb3c1]/30 hover:border-[#ff0a54]/50 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ff0a54] to-[#ff477e] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2c1810] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#2c1810]/70 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-[#ff0a54]/5 -z-10 group-hover:scale-150 transition-transform duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
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

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-[400px] h-[400px] rounded-full bg-[#ff0a54] blur-[120px] opacity-10" />
          <div className="absolute bottom-20 right-1/4 w-[350px] h-[350px] rounded-full bg-pink-300 blur-[100px] opacity-8" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
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

              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    label: "Email Us",
                    value: "shreejanahome@info.com",
                  },
                  { icon: Phone, label: "Call Us", value: "+977-9841539407" },
                ].map((contact) => (
                  <motion.div
                    key={contact.label}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-[#ffb3c1]/30 shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff0a54] to-[#ff477e] flex items-center justify-center flex-shrink-0">
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#2c1810]/60 font-medium">
                        {contact.label}
                      </p>
                      <p className="text-[#2c1810] font-semibold">
                        {contact.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
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
