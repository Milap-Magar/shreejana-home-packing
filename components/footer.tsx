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

export function Footer() {
  const socialIcons = [
    { Icon: Facebook, href: "#" },
    { Icon: Instagram, href: "#" },
    { Icon: Twitter, href: "#" },
  ];

  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Shreejana Home Packaging Udhyog</h3>
            <p className="text-background/80 text-sm">
              Premium & hygenic dry fruits .
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <Link
                  href="/"
                  className="hover:text-background transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-background transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="hover:text-background transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +01-5193443
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                shreejanahome@info.com
              </li>
              <li className="flex items-center gap-2 gap-x-2">
                <MapPin className="w-4 h-4" />
                Kusunti-13, Lalitpur, Nepal
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialIcons.map(({ Icon, href }) => (
                <motion.a
                  key={href}
                  href={href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-background/10 rounded-full transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>
            &copy; 2025 Shreejana Home Packaging Udhyog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
