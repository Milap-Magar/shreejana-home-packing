"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Footer() {
  const socialIcons = [
    { Icon: Facebook, href: "#" },
    { Icon: Instagram, href: "#" },
    { Icon: Twitter, href: "#" },
  ];

  return (
    <footer className="bg-foreground text-background py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Image
                  src="/Logo.png"
                  alt="logo"
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-md"
                />
              </motion.div>
              <span className="font-semibold text-lg hidden sm:inline">
                Shreejana Home Packaging Udhyog
              </span>
            </Link>

            <p className="text-background/70 text-sm leading-relaxed max-w-xs">
              Premium, hygienic and fresh dry fruits for every occasion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="/" className="hover:text-background transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-background transition"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="hover:text-background transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> +977-9841539407
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> shreejanahome@info.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Kusunti-13, Lalitpur, Nepal
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-3">
              {socialIcons.map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="p-2 bg-background/10 rounded-full hover:bg-background/20 transition"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-10 pt-6 text-center text-sm text-background/60">
          © 2025 Shreejana Home Packaging Udhyog — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
