import { Box, Input } from '@mui/material';
import { useEffect, useRef } from 'react';
import { LuUploadCloud } from 'react-icons/lu';
import { FaFileImage } from 'react-icons/fa6';
import { GoX } from 'react-icons/go';
import axios from 'axios';

const ImageUpload = ({
  imageFile,
  setImageFile,
  uploadedUrl,
  setUploadedUrl,
  setImageLoadingState,
}) => {
  const inputRef = useRef();
  const handleImageChange = (e) => {
    console.log(e.target.files);
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setImageFile(selectedFile);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) setImageFile(droppedFile);
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  async function uploadImagetoCloudinary() {
    setImageLoadingState(true);
    const data = new FormData();
    data.append('my_file', imageFile);
    const response = await axios.post(
      'http://localhost:5000/api/admin/products/upload-image',
      data
    );
    console.log(response, 'response');

    if (response?.data?.success) {
      setUploadedUrl(response.data.result.url);
      setImageLoadingState(false);
    }
  }

  useEffect(() => {
    if (imageFile != null) uploadImagetoCloudinary();
  }, [imageFile]);

  return (
    <div>
      <div>Upload Image</div>
      <Box
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        sx={{
          border: 2,
          borderBlockStyle: 'dashed',
          p: 4,
          borderRadius: '20px',
          width: '500px',
        }}
      >
        <Input
          ref={inputRef}
          type='file'
          id='image-upload'
          onChange={handleImageChange}
          sx={{ display: 'none' }}
        />
        {!imageFile ? (
          <label htmlFor='image-upload'>
            <LuUploadCloud />
            <span> Drag & Drop are click to upload image</span>
          </label>
        ) : (
          <div>
            <div>
              <FaFileImage />
            </div>
            <p>{imageFile.name}</p>
            <button onClick={handleRemoveImage}>
              <GoX />
            </button>
          </div>
        )}
      </Box>
    </div>
  );
};

export default ImageUpload;
