import { message } from 'antd';
import React, { useRef, useState } from 'react';

const EditContent = () => {
    // State variables to hold the form values
    const [heroTitle, setHeroTitle] = useState('');
    const [heroDescription, setHeroDescription] = useState('');
    const [roomsTitle, setRoomsTitle] = useState('');
    const [propertyTitle, setPropertyTitle] = useState('');
    const [aboutHeroTitle, setAboutHeroTitle] = useState('');
    const [aboutHeroDescription, setAboutHeroDescription] = useState('');
    const [aboutMainTitle, setAboutMainTitle] = useState('');
    const [firstStepTitle, setFirstStepTitle] = useState('');
    const [firstStepDescription, setFirstStepDescription] = useState('');
    const [secondStepTitle, setSecondStepTitle] = useState('');
    const [secondStepDescription, setSecondStepDescription] = useState('');
    const [blogTitle, setblogiTitle] = useState('');
    const [blogdecription, setblogDecription] = useState('');
    const [blogImage, setBlogImage] = useState(null);
    const fileInputRef = useRef(null);
    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you would typically handle the submission,
        // e.g., sending the data to your server or saving it locally.
        console.log({
            heroTitle,
            heroDescription,
            roomsTitle,
            propertyTitle,
           
        });
        message.success('Home Content saved successfully!');
    };
    const handleSubmit2 = (e) => {
        e.preventDefault();
        // Here, you would typically handle the submission,
        // e.g., sending the data to your server or saving it locally.
        console.log({
            aboutHeroTitle,
            aboutHeroDescription,
            aboutMainTitle,
            firstStepTitle,
            firstStepDescription,
            secondStepTitle,
            secondStepDescription,
           
        });
        message.success('aboutContent saved successfully!');
    };
    const handleSubmit3 = (e) => {
        e.preventDefault();
        // Here, you would typically handle the submission,
        // e.g., sending the data to your server or saving it locally.
        console.log({
            blogTitle,
            blogdecription,
           
        });
        message.success('Blotg Content saved successfully!');
    };
  

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setBlogImage(file);
        }
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            setBlogImage(file);
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };
    const handleDivClick = () => {
        fileInputRef.current.click();
    };
    return (
        <div className=' p-5' style={{ backgroundColor: '#242424', color: 'white' }}>
            <div className='pb-8'>
                <h1 className='text-2xl font-bold mb-5'>Edit Home Content</h1>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div>
                        <label className='block text-lg'>Hero Title</label>
                        <input
                            type='text'
                            value={heroTitle}
                            onChange={(e) => setHeroTitle(e.target.value)}
                            className='w-full p-2 bg-[#383838] text-white rounded'
                            placeholder='Enter hero title'
                        />
                    </div>
                    <div>
                        <label className='block text-lg'>Hero Description</label>
                        <textarea
                            value={heroDescription}
                            onChange={(e) => setHeroDescription(e.target.value)}
                            className='w-full p-2 bg-[#383838] text-white rounded'
                            placeholder='Enter hero description'
                            rows='3'
                        />
                    </div>
                    <div>
                        <label className='block text-lg'>Rooms Title</label>
                        <input
                            type='text'
                            value={roomsTitle}
                            onChange={(e) => setRoomsTitle(e.target.value)}
                            className='w-full p-2 bg-[#383838] text-white rounded'
                            placeholder='Enter rooms title'
                        />
                    </div>
                    <div>
                        <label className='block text-lg'>Property Title</label>
                        <input
                            type='text'
                            value={propertyTitle}
                            onChange={(e) => setPropertyTitle(e.target.value)}
                            className='w-full p-2 bg-[#383838] text-white rounded'
                            placeholder='Enter property title'
                        />
                    </div>
                    <button
                        type='submit'
                        className='px-4 py-2'
                        style={{ backgroundColor: '#EBCA7E', color: '#242424' }}
                    >
                        Save Changes
                    </button>
                </form>
            </div>

            <hr />

            <div className=' py-8'>
                <h1 className='text-2xl font-bold mb-5'>Edit About Page Content</h1>
                <form onSubmit={handleSubmit2} className='space-y-4'>
                    <div>
                        <label className='block text-lg'>About Hero Title</label>
                        <input
                            type='text'
                            value={aboutHeroTitle}
                            onChange={(e) => setAboutHeroTitle(e.target.value)}
                            className='w-full p-2 bg-[#383838] text-white rounded'
                            placeholder='Enter about hero title'
                        />
                    </div>
                    <div>
                        <label className='block text-lg'>About Hero Description</label>
                        <textarea
                            value={aboutHeroDescription}
                            onChange={(e) => setAboutHeroDescription(e.target.value)}
                            className='w-full p-2 bg-[#383838] text-white rounded'
                            placeholder='Enter about hero description'
                            rows='3'
                        />
                    </div>
                    <div>
                        <label className='block text-lg'>About Main Title</label>
                        <input
                            type='text'
                            value={aboutMainTitle}
                            onChange={(e) => setAboutMainTitle(e.target.value)}
                            className='w-full p-2 bg-[#383838] text-white rounded'
                            placeholder='Enter about main title'
                        />
                    </div>
                    <div>
                        <label className='block text-lg'>First Step Title</label>
                        <input
                            type='text'
                            value={firstStepTitle}
                            onChange={(e) => setFirstStepTitle(e.target.value)}
                            className='w-full p-2 bg-[#383838] text-white rounded'
                            placeholder='Enter first step title'
                        />
                    </div>
                    <div>
                        <label className='block text-lg'>First Step Description</label>
                        <textarea
                            value={firstStepDescription}
                            onChange={(e) => setFirstStepDescription(e.target.value)}
                            className='w-full p-2 bg-[#383838] text-white rounded'
                            placeholder='Enter first step description'
                            rows='3'
                        />
                    </div>
                    <div>
                        <label className='block text-lg'>Second Step Title</label>
                        <input
                            type='text'
                            value={secondStepTitle}
                            onChange={(e) => setSecondStepTitle(e.target.value)}
                            className='w-full p-2 bg-[#383838] text-white rounded'
                            placeholder='Enter second step title'
                        />
                    </div>
                    <div>
                        <label className='block text-lg'>Second Step Description</label>
                        <textarea
                            value={secondStepDescription}
                            onChange={(e) => setSecondStepDescription(e.target.value)}
                            className='w-full p-2 bg-[#383838] text-white rounded'
                            placeholder='Enter second step description'
                            rows='3'
                        />
                    </div>
                    <button
                        type='submit'
                        className='px-4 py-2'
                        style={{ backgroundColor: '#EBCA7E', color: '#242424' }}
                    >
                        Save Changes
                    </button>
                </form>
            </div>
            <hr />
            <div className=' pt-8'>
                <h1 className='text-2xl font-bold mb-5'>Edit/Add blog Content</h1>
                <form onSubmit={handleSubmit3} className='space-y-4'>
                    <div>
                        <label className='block text-lg'>Blog Title</label>
                        <input
                            type='text'
                            value={blogTitle}
                            onChange={(e) => setblogiTitle(e.target.value)}
                            className='w-full p-2 bg-[#383838] text-white rounded'
                            placeholder='Enter about hero title'
                        />
                    </div>
                    <div>
                        <label className='block text-lg'>Blog Description</label>
                        <textarea
                            value={blogdecription}
                            onChange={(e) => setblogDecription(e.target.value)}
                            className='w-full p-2 bg-[#383838] text-white rounded'
                            placeholder='Enter about hero description'
                            rows='3'
                        />
                    </div>
                    <div>
                    <label className='block text-lg'>Blog Image</label>
                    <div
                        className='w-full p-6 bg-[#383838] text-white rounded border-2 border-dashed border-gray-500 flex justify-center items-center cursor-pointer'
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onClick={handleDivClick}
                    >
                        {blogImage ? (
                            <p>{blogImage.name}</p>
                        ) : (
                            <p>Drag & drop an image here or click to upload</p>
                        )}
                        <input
                            type='file'
                            ref={fileInputRef}
                            onChange={handleImageUpload}
                            className='hidden'
                            accept='image/*'
                        />
                    </div>
                </div>
                 
                    <button
                        type='submit'
                        className='px-4 py-2'
                        style={{ backgroundColor: '#EBCA7E', color: '#242424' }}
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditContent;
