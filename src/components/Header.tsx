
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, BookOpen, Users, Video, FileText, Target, Info, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Info Kedinasan', href: '/info-kedinasan', icon: Info },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Database Soal', href: '/database-soal', icon: BookOpen },
    { name: 'Video Pembelajaran', href: '/video-pembelajaran', icon: Video },
    { name: 'Tryout', href: '/tryout', icon: Target },
    { name: 'About Us', href: '/about', icon: Users },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-speedu-blue to-speedu-green rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Speedu</h1>
              <p className="text-xs text-speedu-blue font-medium">ngebut belajar</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-speedu-blue hover:bg-speedu-gray-light transition-all duration-200"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button className="hidden md:flex bg-gradient-to-r from-speedu-blue to-speedu-green hover:from-speedu-blue-dark hover:to-speedu-green-dark text-white">
              <MessageCircle className="w-4 h-4 mr-2" />
              Join Community
            </Button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-speedu-blue hover:bg-speedu-gray-light transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
              <Button className="mt-4 bg-gradient-to-r from-speedu-blue to-speedu-green text-white">
                <MessageCircle className="w-4 h-4 mr-2" />
                Join Community
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
