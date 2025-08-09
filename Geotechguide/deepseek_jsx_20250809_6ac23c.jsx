// src/components/ProcedurePage.js
import { BookOpenIcon, CalculatorIcon, ExclamationTriangleIcon, ShieldCheckIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import Table from '@/components/Table';
import StepByStep from '@/components/StepByStep';

export default function ProcedurePage({ data }) {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-dark-800 rounded-xl p-6 border border-dark-700">
            <h2 className="text-lg font-semibold mb-4">Neste Ensaio</h2>
            <ul className="space-y-2">
              <li>
                <a href="#objective" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                  <BookOpenIcon className="h-4 w-4 mr-2" />
                  Objetivo
                </a>
              </li>
              <li>
                <a href="#norms" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                  <ShieldCheckIcon className="h-4 w-4 mr-2" />
                  Normas
                </a>
              </li>
              <li>
                <a href="#materials" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                  <WrenchScrewdriverIcon className="h-4 w-4 mr-2" />
                  Materiais
                </a>
              </li>
              <li>
                <a href="#procedure" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                  <WrenchScrewdriverIcon className="h-4 w-4 mr-2" />
                  Procedimento
                </a>
              </li>
              <li>
                <a href="#example" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                  <CalculatorIcon className="h-4 w-4 mr-2" />
                  Exemplo
                </a>
              </li>
              <li>
                <a href="#problems" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                  <ExclamationTriangleIcon className="h-4 w-4 mr-2" />
                  Problemas Comuns
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-xl p-8 mb-8 border border-blue-800/30">
            <div className="flex items-center mb-6">
              <div className="bg-blue-900/20 p-3 rounded-lg mr-4">
                <WrenchScrewdriverIcon className="h-10 w-10 text-blue-400" />
              </div>
              <div>
                <span className="text-sm text-blue-400 font-medium bg-blue-900/30 px-3 py-1 rounded-full">
                  {data.category}
                </span>
                <h1 className="text-3xl font-bold mt-2">{data.title}</h1>
              </div>
            </div>
            
            <p className="text-lg text-gray-300">{data.objective}</p>
          </div>
          
          <section id="objective" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <BookOpenIcon className="h-6 w-6 mr-2 text-blue-400" />
              Objetivo do Ensaio
            </h2>
            <p className="text-gray-300">{data.objective}</p>
          </section>
          
          <section id="norms" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <ShieldCheckIcon className="h-6 w-6 mr-2 text-blue-400" />
              Normas de Referência
            </h2>
            <ul className="bg-dark-800 rounded-lg p-4 border border-dark-700">
              {data.norms.map((norm, index) => (
                <li key={index} className="py-2 border-b border-dark-700 last:border-0">
                  {norm}
                </li>
              ))}
            </ul>
          </section>
          
          <section id="materials" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <WrenchScrewdriverIcon className="h-6 w-6 mr-2 text-blue-400" />
              Materiais e Equipamentos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-dark-800 rounded-lg p-6 border border-dark-700">
                <h3 className="font-medium text-lg mb-3">Equipamentos Necessários</h3>
                <ul className="space-y-2">
                  {data.materials.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-blue-500 mt-2 mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-dark-800 rounded-lg p-6 border border-dark-700">
                <h3 className="font-medium text-lg mb-3">EPIs e Segurança</h3>
                <ul className="space-y-2">
                  {data.safety.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-cyan-500 mt-2 mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          
          <section id="procedure" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <WrenchScrewdriverIcon className="h-6 w-6 mr-2 text-blue-400" />
              Procedimento Experimental
            </h2>
            <StepByStep steps={data.steps} />
          </section>
          
          <section id="example" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <CalculatorIcon className="h-6 w-6 mr-2 text-blue-400" />
              Exemplo de Cálculo
            </h2>
            <div className="bg-dark-800 rounded-lg p-6 border border-dark-700">
              <Table data={data.example.data} />
              <div className="mt-6 p-4 bg-blue-900/20 rounded-lg border border-blue-800/30">
                <p className="font-mono text-sm">{data.example.calculation}</p>
              </div>
              <div className="mt-6">
                <h3 className="font-medium text-lg mb-3">Interpretação dos Resultados</h3>
                <p className="text-gray-300">{data.interpretation}</p>
              </div>
            </div>
          </section>
          
          <section id="problems" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <ExclamationTriangleIcon className="h-6 w-6 mr-2 text-yellow-400" />
              Problemas Comuns e Soluções
            </h2>
            <div className="bg-dark-800 rounded-lg p-6 border border-dark-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.problems.map((item, index) => (
                  <div key={index} className="bg-dark-700/50 p-4 rounded-lg">
                    <h4 className="font-medium text-yellow-400 mb-2">Problema: {item.problem}</h4>
                    <p className="text-gray-300">Solução: {item.solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          <section className="bg-dark-800 rounded-lg p-6 border border-dark-700">
            <h3 className="font-medium text-lg mb-3">Referências Bibliográficas</h3>
            <ul className="space-y-2">
              {data.references.map((ref, index) => (
                <li key={index} className="text-sm text-gray-400">
                  {ref}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}