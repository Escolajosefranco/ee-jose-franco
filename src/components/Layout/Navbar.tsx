import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '@/assets/logo';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/quem-somos', label: 'Quem Somos' },
    { to: '/valores', label: 'Valores' },
    { to: '/galeria', label: 'Galeria' },
    { to: '/podcast', label: 'Podcast' },
    { to: '/calendario', label: 'Calendário' },
    { to: '/contato', label: 'Contato' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="escola-header-gradient"></div>
      <div className="escola-container py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <img
              src="/assets/logobra.png"
              alt="Logo da escola"
              className="h-16 w-auto object-contain"
            />
            <h1 className="text-lg md:text-2xl lg:text-3xl font-comic font-bold bg-gradient-colorido bg-clip-text text-transparent">
              E.E. JOSÉ FRANCO
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? 'escola-nav-link-active' : 'escola-nav-link'
                }
                end
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-escola-azul focus:outline-none"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 shadow-lg rounded-b-lg">
          <div className="flex flex-col space-y-1 p-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? 'escola-nav-link-active' : 'escola-nav-link'
                }
                onClick={closeMenu}
                end
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
