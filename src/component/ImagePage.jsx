import React, { useState } from 'react';
import '../css/Image.css';

function ImagePhoto() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageUpload = (event) => {
    const uploadedImages = Array.from(event.target.files);
    setImages((prevImages) => [...prevImages, ...uploadedImages]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Shop name:', name);
    console.log('Shop description:', description);
    console.log('Shop images:', images);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>

      <div>
        <label htmlFor="description">Description:</label>
        <textarea id="description" value={description} onChange={handleDescriptionChange} />
      </div>

      <div>
        <label htmlFor="images">Upload Images:</label>
        <input type="file" id="images" multiple onChange={handleImageUpload} />
      </div>

      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}

export default ImagePhoto;
