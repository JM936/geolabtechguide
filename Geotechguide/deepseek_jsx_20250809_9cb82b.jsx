// src/components/StepByStep.js
export default function StepByStep({ steps }) {
  return (
    <div className="space-y-6">
      {steps.map((step) => (
        <div key={step.step} className="flex">
          <div className="flex flex-col items-center mr-4">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold">{step.step}</span>
            </div>
            <div className="w-0.5 h-full bg-blue-600/30 mt-2"></div>
          </div>
          <div className="pb-8">
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-300">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}