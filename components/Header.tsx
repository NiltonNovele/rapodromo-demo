"use client";

import Link from "next/link";
import { useState } from "react";
import {
  InfoIcon,
  TicketIcon,
  ShieldHalfIcon,
  FlameIcon,
  UsersIcon,
  MailIcon,
  UserCircleIcon,
  LogInIcon,
  UserPlusIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulação
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Rapódromo" className="h-8 w-8" />
          <span className="text-2xl font-bold text-red-600">Rapódromo</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex space-x-5 items-center text-sm">
          <Link
            href="/sobre"
            className="flex items-center gap-1 hover:text-red-500"
          >
            <InfoIcon className="w-4 h-4" /> Sobre
          </Link>
          <Link
            href="/bilhetes"
            className="flex items-center gap-1 hover:text-red-500"
          >
            <TicketIcon className="w-4 h-4" /> Bilhetes
          </Link>
          <Link
            href="/temporada"
            className="flex items-center gap-1 hover:text-red-500"
          >
            <ShieldHalfIcon className="w-4 h-4" /> Temporada
          </Link>
          <Link
            href="/batalhas"
            className="flex items-center gap-1 hover:text-red-500"
          >
            <FlameIcon className="w-4 h-4" /> Batalhas
          </Link>
          <Link
            href="/communidade/anuncios"
            className="flex items-center gap-1 hover:text-red-500"
          >
            <UsersIcon className="w-4 h-4" /> Comunidade
          </Link>
          <Link
            href="/contacto"
            className="flex items-center gap-1 hover:text-red-500"
          >
            <MailIcon className="w-4 h-4" /> Contacto
          </Link>
          {isLoggedIn ? (
            <Link
              href="/perfil"
              className="flex items-center gap-1 hover:text-red-500"
            >
              <UserCircleIcon className="w-4 h-4" /> Minha Conta
            </Link>
          ) : (
            <>
              <Link
                href="/login"
                className="flex items-center gap-1 hover:text-red-500"
              >
                <LogInIcon className="w-4 h-4" /> Entrar
              </Link>
              <Link
                href="/signup"
                className="flex items-center gap-1 hover:text-red-500"
              >
                <UserPlusIcon className="w-4 h-4" /> Criar Conta
              </Link>
            </>
          )}
        </nav>

        {/* Hamburger Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-white focus:outline-none"
        >
          {menuOpen ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden mt-4 space-y-3 px-4">
          <Link href="/sobre" className="block hover:text-red-500">
            Sobre
          </Link>
          <Link href="/bilhetes" className="block hover:text-red-500">
            Bilhetes
          </Link>
          <Link href="/temporada" className="block hover:text-red-500">
            Temporada
          </Link>
          <Link href="/batalhas" className="block hover:text-red-500">
            Batalhas
          </Link>
          <Link
            href="/communidade/anuncios"
            className="block hover:text-red-500"
          >
            Comunidade
          </Link>
          <Link href="/contacto" className="block hover:text-red-500">
            Contacto
          </Link>
          {isLoggedIn ? (
            <Link href="/perfil" className="block hover:text-red-500">
              Minha Conta
            </Link>
          ) : (
            <>
              <Link href="/login" className="block hover:text-red-500">
                Entrar
              </Link>
              <Link href="/signup" className="block hover:text-red-500">
                Criar Conta
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}
