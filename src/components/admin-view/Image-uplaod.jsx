import React, { useRef, useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { Input } from '../ui/input'

const ImageUpload = ({ file,setFile,uploadImageUrl,setUploadImageUrl }) => {
  const fileInputRef = useRef(null)
  const [preview, setPreview] = useState(null)
    const inputRef=useRef(null)
    const handleFileChange=(event)=>{
        console.log(event.target.files)
        const selectedFile=event.target.files?.[0];
        if(selectedFile) setFile(selectedFile)
    }
  
 

  return (
    <div className="space-y-4">
      <Input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleFileChange}
        // className="hidden"
        id="image-upload"
      />
      <label htmlFor="upload-input">
        <Button type="button" variant="outline">
          Upload Image
        </Button>
      </label>

      {preview && (
        <div className="relative w-40 h-40 border rounded-md overflow-hidden shadow-md">
          <img
            src={preview}
            alt="Preview"
            className="object-cover w-full h-full"
          />
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
