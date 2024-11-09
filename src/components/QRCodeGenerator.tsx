import React, { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { Download, Link as LinkIcon, Github, Settings2, Linkedin, Instagram } from 'lucide-react';
import ColorPicker from './ColorPicker';

const QRCodeGenerator = () => {
  const [url, setUrl] = useState('');
  const [size, setSize] = useState(256);
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [fgColor, setFgColor] = useState('#000000');
  const qrRef = useRef<HTMLDivElement>(null);

  const downloadQRCode = () => {
    const canvas = qrRef.current?.querySelector('canvas');
    if (canvas) {
      const link = document.createElement('a');
      link.download = 'qrcode.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
      <div className="space-y-6">
        <div className="relative">
          <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL or text"
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <Settings2 size={16} className="mr-2" /> QR Code Size
            </label>
            <input
              type="range"
              min="128"
              max="512"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-sm text-gray-500 text-center">{size}px</div>
          </div>

          <ColorPicker
            label="Background Color"
            value={bgColor}
            onChange={setBgColor}
          />

          <ColorPicker
            label="Foreground Color"
            value={fgColor}
            onChange={setFgColor}
          />
        </div>
      </div>

      <div className="flex flex-col items-center space-y-6">
        <div
          ref={qrRef}
          className="p-4 bg-white rounded-xl shadow-lg"
          style={{ backgroundColor: bgColor }}
        >
          <QRCodeCanvas
            value={url || 'https://github.com/krishanmurariji'}
            size={size}
            bgColor={bgColor}
            fgColor={fgColor}
            level="H"
            includeMargin={true}
          />
        </div>

        <button
          onClick={downloadQRCode}
          className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Download size={20} className="mr-2" />
          Download QR Code
        </button>
      </div>

      <footer className="text-center space-y-4">
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/krishanmurariji"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/krishan-murari/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/krishanmurariji/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Instagram Profile"
          >
            <Instagram size={24} />
          </a>
        </div>
        <p className="text-sm text-gray-500">
          Created by Krishan Murari
        </p>
      </footer>
    </div>
  );
};

export default QRCodeGenerator;