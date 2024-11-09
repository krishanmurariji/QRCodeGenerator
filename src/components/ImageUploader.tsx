import React from 'react';
import { Upload, X } from 'lucide-react';

interface ImageUploaderProps {
  logoImage: string | null;
  onImageUpload: (image: string) => void;
  onImageRemove: () => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ logoImage, onImageUpload, onImageRemove }) => {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        onImageUpload(result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">Logo Image</label>
      <div className="relative">
        {logoImage ? (
          <div className="relative w-24 h-24 mx-auto">
            <img
              src={logoImage}
              alt="Logo"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={onImageRemove}
              className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="logo-upload"
            />
            <label
              htmlFor="logo-upload"
              className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors"
            >
              <Upload className="w-8 h-8 text-gray-400" />
              <span className="mt-2 text-sm text-gray-500">Upload logo</span>
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;