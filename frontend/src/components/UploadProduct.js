import React, { useState } from 'react';
import { CgClose } from "react-icons/cg";
import productCategory from '../helpers/productCategory';
import { FaCloudUploadAlt } from "react-icons/fa";
import uploadImage from '../helpers/uploadImage';
import DisplayImage from './DisplayImage';
import { MdDelete } from "react-icons/md";
import SummaryApi from '../common';
import { toast } from 'react-toastify';

const UploadProduct = ({
    onClose,
    fetchData
}) => {
  const [data, setData] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: [],
    description: "",
    price: "",
    sellingPrice: ""
  });

  const [openFullScreenImage, setOpenFullScreenImage] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUploadProduct = async (files) => {
    const uploadedImages = await Promise.all(
      Array.from(files).map(async (file) => {
        const uploadImageCloudinary = await uploadImage(file);
        return { url: uploadImageCloudinary.url, name: file.name };
      })
    );

    // Set the first uploaded file's name as the product name
    const productNameFromImage = uploadedImages[0]?.name?.split('.')[0] || data.productName;

    setData((prev) => ({
      ...prev,
      productImage: [...prev.productImage, ...uploadedImages.map(img => img.url)],
      productName: productNameFromImage
    }));
  };

  const handleDeleteProductImage = async (index) => {
    const newProductImage = [...data.productImage];
    newProductImage.splice(index, 1);

    setData((prev) => ({
      ...prev,
      productImage: [...newProductImage]
    }));
  };

  const handlePasteImage = async (e) => {
    const items = e.clipboardData.items;

    for (const item of items) {
      if (item.type.indexOf("image") !== -1) {
        const file = item.getAsFile();

        const uploadedImage = await uploadImage(file);

        setData((prev) => ({
          ...prev,
          productImage: [...prev.productImage, uploadedImage.url]
        }));

        toast.success("Image uploaded successfully!");
      }
    }
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    setIsDragging(false); 

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      await handleUploadProduct(files);
      toast.success("Image uploaded successfully!");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true); 
  };

  const handleDragLeave = () => {
    setIsDragging(false); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(SummaryApi.uploadProduct.url, {
      method: SummaryApi.uploadProduct.method,
      credentials: 'include',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const responseData = await response.json();

    if (responseData.success) {
      toast.success(responseData?.message);
      onClose();
      fetchData();
    }

    if (responseData.error) {
      toast.error(responseData?.message);
    }
  };

  return (
    <div 
      className='fixed w-full h-full bg-slate-200 bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center' 
      onPaste={handlePasteImage}
      onDrop={handleDrop}          
      onDragOver={handleDragOver}  
      onDragLeave={handleDragLeave} 
    >
      <div className='bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden'>
        <div className='flex justify-between items-center pb-3'>
          <h2 className='font-bold text-lg'>Upload Product</h2>
          <div className='w-fit ml-auto text-2xl hover:text-red-600 cursor-pointer' onClick={onClose}>
            <CgClose />
          </div>
        </div>

        <form className='grid p-4 gap-2 overflow-y-scroll h-full pb-5' onSubmit={handleSubmit}>
          <label htmlFor='productName'>Product Name:</label>
          <input 
            type='text' 
            id='productName' 
            placeholder='enter product name' 
            name='productName'
            value={data.productName} 
            onChange={handleOnChange}
            className='p-2 bg-slate-100 border rounded'
            required
          />

          <label htmlFor='brandName' className='mt-3'>Brand Name:</label>
          <input 
            type='text' 
            id='brandName' 
            placeholder='enter brand name' 
            value={data.brandName} 
            name='brandName'
            onChange={handleOnChange}
            className='p-2 bg-slate-100 border rounded'
            required
          />

          <label htmlFor='category' className='mt-3'>Category:</label>
          <select 
            required 
            value={data.category} 
            name='category' 
            onChange={handleOnChange} 
            className='p-2 bg-slate-100 border rounded'>
            <option value={""}>Select Category</option>
            {productCategory.map((el, index) => (
              <option value={el.value} key={el.value + index}>{el.label}</option>
            ))}
          </select>

          <label htmlFor='productImage' className='mt-3'>Product Image:</label>
          <label 
            htmlFor='uploadImageInput'
            className={`p-2 border rounded h-32 w-full flex justify-center items-center cursor-pointer ${isDragging ? 'bg-blue-100' : 'bg-slate-100'}`} 
          >
            <div className='text-slate-500 flex justify-center items-center flex-col gap-2'>
              <span className='text-4xl'><FaCloudUploadAlt /></span>
              <p className='text-sm'>Upload or Drag and Drop Product Images</p>
              <input 
                type='file' 
                id='uploadImageInput' 
                className='hidden' 
                onChange={(e) => handleUploadProduct(e.target.files)} 
                multiple
              />
            </div>
          </label>
          <div>
            {data?.productImage[0] ? (
              <div className='flex items-center gap-2'>
                {data.productImage.map((el, index) => (
                  <div className='relative group' key={el + index}>
                    <img 
                      src={el} 
                      alt={el} 
                      width={80} 
                      height={80}  
                      className='bg-slate-100 border cursor-pointer'  
                      onClick={() => {
                        setOpenFullScreenImage(true);
                        setFullScreenImage(el);
                      }}
                    />
                    <div className='absolute bottom-0 right-0 p-1 text-white bg-red-600 rounded-full hidden group-hover:block cursor-pointer' onClick={() => handleDeleteProductImage(index)}>
                      <MdDelete />  
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className='text-red-600 text-xs'>*Please upload or paste a product image</p>
            )}
          </div>

          <label htmlFor='price' className='mt-3'>Price:</label>
          <input 
            type='number' 
            id='price' 
            placeholder='enter price' 
            value={data.price} 
            name='price'
            onChange={handleOnChange}
            className='p-2 bg-slate-100 border rounded'
            required
          />

          <label htmlFor='sellingPrice' className='mt-3'>Selling Price:</label>
          <input 
            type='number' 
            id='sellingPrice' 
            placeholder='enter selling price' 
            value={data.sellingPrice} 
            name='sellingPrice'
            onChange={handleOnChange}
            className='p-2 bg-slate-100 border rounded'
            required
          />

          <label htmlFor='description' className='mt-3'>Description:</label>
          <textarea 
            className='h-28 bg-slate-100 border resize-none p-1' 
            placeholder='enter product description' 
            rows={3} 
            onChange={handleOnChange} 
            name='description'
            value={data.description}
          />

          <button className='px-3 py-2 bg-red-600 text-white mb-10 hover:bg-red-700'>Upload Product</button>
        </form>
      </div>

      {openFullScreenImage && <DisplayImage src={fullScreenImage} onClose={() => setOpenFullScreenImage(false)} />}
    </div>
  );
};

export default UploadProduct;
