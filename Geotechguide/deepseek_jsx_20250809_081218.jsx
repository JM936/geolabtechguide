// src/components/Header.js
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BeakerIcon, BookOpenIcon, HomeIcon } from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Solo', href: '/ensaios/solo', icon: BeakerIcon },
  { name: 'Concreto', href: '/ensaios/concreto', icon: BeakerIcon },
  { name: 'Asfalto', href: '/ensaios/asfalto', icon: BeakerIcon },
  { name: 'Agregados', href: '/ensaios/agregados', icon: BeakerIcon },
  { name: 'Cimento', href: '/ensaios/cimento', icon: BeakerIcon },
  { name: 'Blog', href: '/blog', icon: BookOpenIcon },
];

export default function Header() {
  const pathname = usePathname();
  
  return (
    <header className="bg-dark-800 sticky top-0 z-50 border-b border-dark-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <BeakerIcon className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              LabtechGuide
            </span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-1 transition-colors duration-200 hover:text-blue-400 ${
                  pathname === item.href ? 'text-blue-400 font-medium' : ''
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link href="/contato" className="text-sm hover:text-blue-400 transition-colors">
              Contato
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}