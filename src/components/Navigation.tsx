"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { href: "#meni", label: "Meni" },
    { href: "#o-nama", label: "O Nama" },
    { href: "#galerija", label: "Galerija" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            Restoran Silba
          </Link>
          
          {/* Desktop Navigation - Hidden on Mobile */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <div className="flex items-center gap-6 lg:gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm lg:text-base font-medium hover:text-accent transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            <ThemeSwitch />
          </div>

          {/* Mobile Menu Button & Theme Switch - Only on Mobile */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeSwitch />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu - Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm animate-in slide-in-from-top-2 duration-200">
            <div className="py-4 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="block px-4 py-3 text-base font-medium hover:bg-muted/50 hover:text-accent transition-colors rounded-lg"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}