import React from 'react';
import QRCodeGenerator from './components/QRCodeGenerator';
import { QrCode } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <QrCode size={48} className="text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            QR Code Generator
          </h1>
          <p className="text-gray-600">
            Create and customize your QR codes instantly
          </p>
        </header>

        <main>
          <QRCodeGenerator />
        </main>
      </div>
    </div>
  );
}

export default App;