"use client";
import React, { useState } from "react";

export default function ImageUpload() {
  const [imageURL, setImageURL] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageURL(url);
    }
  };

  return (
    <div className=" border border-gray-900 rounded-lg w-full p-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="w-full p-4 border cursor-pointer"
        // allow drag-and-drop here
      />

      {imageURL && (
        <img
          src={imageURL}
          alt="Preview"
          className="mt-4 max-h-64 w-full object-contain rounded"
        />
      )}
    </div>
  );
}
