import React, { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { Input } from '../ui/input'
import axios from 'axios'
import { axiosInstance } from '@/helpers/axiosInstance'

const ImageUpload = ({ file, setFile }) => {
  const inputRef = useRef(null)
  const [preview, setPreview] = useState(null)

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)

      // Generate preview
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(selectedFile)
    }
  }

  const handleRemoveImage = () => {
    setFile(null)
    setPreview(null)
    if (inputRef.current) {
      inputRef.current.value = null
    }
  }

  return (
    <div className="space-y-4">
      <label htmlFor="image-upload" className="font-medium text-primary">
        Upload Product Image
      </label>
      <Input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleFileChange}
        className="mt-2"
        id="image-upload"
      />

      {file && (
        <div className="relative w-40 h-40 border rounded-md overflow-hidden shadow-md">
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="object-cover w-full h-full"
            />
          )}
          <button
            type="button"
            onClick={handleRemoveImage}
            className="absolute top-1 right-1 p-1 bg-black/60 text-white rounded-full"
          >
            <X size={16} />
          </button>
        </div>
      )}
    </div>
  )
}

export default ImageUpload
