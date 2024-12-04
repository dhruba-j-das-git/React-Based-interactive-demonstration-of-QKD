import { QuantumSimulator } from './components/QuantumSimulator';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl p-6">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Quantum Cryptography Demo
          </h1>
          <QuantumSimulator />
        </div>
      </div>
    </div>
  );
}

export default App;