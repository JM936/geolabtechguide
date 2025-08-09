// src/app/page.js
import { BeakerIcon, BookOpenIcon, AcademicCapIcon, ChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import TestCard from '@/components/TestCard';

const categories = [
  {
    name: "Solo",
    description: "Ensaios geotécnicos e classificação de solos",
    icon: BeakerIcon,
    tests: [
      { name: "Análise Granulométrica", href: "/ensaios/solo/analise-granulometrica" },
      { name: "Limites de Atterberg", href: "/ensaios/solo/limites-atterberg" },
      { name: "Compactação Proctor", href: "/ensaios/solo/compactacao-proctor" }
    ]
  },
  {
    name: "Concreto",
    description: "Ensaios de caracterização do concreto fresco e endurecido",
    icon: BeakerIcon,
    tests: [
      { name: "Slump Test", href: "/ensaios/concreto/slump-test" },
      { name: "Resistência à Compressão", href: "/ensaios/concreto/resistencia-compressao" }
    ]
  },
  {
    name: "Asfalto",
    description: "Ensaios de misturas asfálticas e ligantes",
    icon: BeakerIcon,
    tests: [
      { name: "Teor de Betume", href: "/ensaios/asfalto/teor-betume" },
      { name: "Ensaios Marshall", href: "/ensaios/asfalto/ensaio-marshall" }
    ]
  }
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900/40 to-cyan-900/40 rounded-2xl overflow-hidden border border-blue-800/30 mb-16">
        <div className="absolute inset-0 bg-grid-dark-800/[0.05] bg-[length:40px_40px]"></div>
        <div className="relative z-10 px-8 py-24 md:py-32 flex flex-col items-center text-center">
          <div className="bg-blue-900/20 p-3 rounded-full mb-6">
            <BeakerIcon className="h-12 w-12 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Procedimentos Técnicos
            </span> para Laboratórios de Construção
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-10">
            Guia completo de ensaios para solos, concreto, asfalto e materiais de construção
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/ensaios" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-medium"
            >
              Explorar Ensaios
            </Link>
            <Link 
              href="/blog" 
              className="px-6 py-3 bg-dark-800 hover:bg-dark-700 border border-dark-700 rounded-lg transition-colors font-medium"
            >
              Ver Artigos Técnicos
            </Link>
          </div>
        </div>
      </div>
      
      {/* Categories Section */}
      <div className="mb-20">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold">Categorias de Ensaios</h2>
          <Link href="/ensaios" className="text-blue-400 hover:text-blue-300 transition-colors">
            Ver todos →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.name} 
              className="bg-dark-800 rounded-xl p-6 border border-dark-700 hover:border-blue-500/30 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-900/20 p-2 rounded-lg mr-4">
                  <category.icon className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">{category.name}</h3>
              </div>
              <p className="text-gray-400 mb-4">{category.description}</p>
              <ul className="space-y-2">
                {category.tests.map((test) => (
                  <li key={test.name}>
                    <Link 
                      href={test.href}
                      className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-3"></span>
                      {test.name}
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      {/* Features Section */}
      <div className="bg-dark-800 rounded-2xl p-8 border border-dark-700 mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Por que usar o LabtechGuide?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="bg-blue-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <AcademicCapIcon className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Procedimentos Atualizados</h3>
              <p className="text-gray-400">
                Todos os ensaios baseados nas normas técnicas mais recentes
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ChartBarIcon className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Exemplos Práticos</h3>
              <p className="text-gray-400">
                Cálculos passo a passo com dados reais e interpretação
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <UserGroupIcon className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comunidade Técnica</h3>
              <p className="text-gray-400">
                Compartilhe experiências e solucione problemas com outros profissionais
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}