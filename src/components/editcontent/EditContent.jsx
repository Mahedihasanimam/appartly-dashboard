import { message } from 'antd';
import React, { useRef, useState } from 'react';

const EditContent = () => {
    // State variables to hold the form values
    const [heroTitle, setHeroTitle] = useState('Experience Unforgettable Stays with Our Easy Room Booking');
    const [heroDescription, setHeroDescription] = useState('Discover the perfect accommodation tailored just for you, whether it’s a weekend getaway or a business trip.');
    const [roomsTitle, setRoomsTitle] = useState('Explore Amazing Rooms');
    const [propertyTitle, setPropertyTitle] = useState('Transform your property into a lucrative experience for travelers');
    const [aboutHeroTitle, setAboutHeroTitle] = useState('Know Our History...');
    const [aboutHeroDescription, setAboutHeroDescription] = useState('At Appartali we believe that every journey begins with a place to call home, and we’re dedicated to making your stay unforgettable.');
    const [aboutFirstSectionTitle, setFirstAboutSectionTitle] = useState('Booking room anytime');
    const [aboutSecoundSectionTitle, setSecoundAboutSectionTitle] = useState('Invest your property');

    const [firstStepTitle, setFirstStepTitle] = useState('Developing Confident and Successful Learners');
    const [firstStepDescription, setFirstStepDescription] = useState('Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al');
    const [secondStepTitle, setSecondStepTitle] = useState('Developing Confident and Successful Learners');
    const [secondStepDescription, setSecondStepDescription] = useState('Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al');
    const [blogTitle, setblogiTitle] = useState('Our rooms are incredible');
    const [blogdecription, setblogDecription] = useState('Surrounded by nature, this cozy cabin provides a peaceful retreat with a rustic charm. A warm fireplace and a king-sized bed make this room perfect for a quiet, comfortable stay away from the hustle of the city.');
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
            aboutFirstSectionTitle,
            aboutSecoundSectionTitle,
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
        <div className=' p-5 rounded-lg' style={{ backgroundColor: '#242424', color: 'white' }}>
            <div className='pb-8'>
                <h1 className='text-2xl font-bold mb-5'>Edit Home Content</h1>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div>
                        <label className='block text-lg'>Hero Title</label>
                        <input
                            type='text'
                            defaultValue={heroTitle}
                            onChange={(e) => setHeroTitle(e.target.value)}
                            className='w-full p-2 bg-[#383838] text-white  opacity-70 rounded'
                            placeholder='Enter hero title'
                        />
                    </div>
                    <div>
                        <label className='block text-lg'>Hero Description</label>
                        <textarea
                            defaultValue={heroDescription}
                            onChange={(e) => setHeroDescription(e.target.value)}
                            className='w-full p-2 bg-[#383838] text-white   opacity-70  rounded'
                            placeholder='Enter hero description'
                            rows='3'
                        />
                    </div>
                    <div>
                        <label className='block text-lg'>Rooms Title</label>
                        <input
                            type='text'
                            defaultValue={roomsTitle}
                            onChange={(e) => setRoomsTitle(e.target.value)}
                            className='w-full p-2 bg-[#383838] text-white   opacity-70  rounded'
                            placeholder='Enter rooms title'
                        />
                    </div>
                    <div>
                        <label className='block text-lg'>Property Title</label>
                        <input
                            type='text'
                            defaultValue={propertyTitle}
                            onChange={(e) => setPropertyTitle(e.target.value)}
                            className='w-full p-2 bg-[#383838] text-white   opacity-70  rounded'
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
                            defaultValue={aboutHeroTitle}
                            onChange={(e) => setAboutHeroTitle(e.target.value)}
                            className='w-full p-2 bg-[#383838] text-white opacity-70  rounded'
                            placeholder='Enter about hero title'
                        />
                    </div>
                    <div>
                        <label className='block text-lg'>About Hero Description</label>
                        <textarea
                            defaultValue={aboutHeroDescription}
                            onChange={(e) => setAboutHeroDescription(e.target.value)}
                            className='w-full p-2 bg-[#383838] text-white opacity-70  rounded'
                            placeholder='Enter about hero description'
                            rows='3'
                        />
                    </div>
                    <div>
                        <label className='block text-lg'>First section Title</label>
                        <input
                            type='text'
                            defaultValue={aboutFirstSectionTitle}
                            onChange={(e) => setFirstAboutSectionTitle(e.target.value)}
                            className='w-full p-2 bg-[#383838] text-white opacity-70  rounded'
                            placeholder='Enter about main title'
                        />
                    </div>
                    <div>
                        <label className='block text-lg'>Secound section Title</label>
                        <input
                            type='text'
                            defaultValue={aboutSecoundSectionTitle}
                            onChange={(e) => setSecoundAboutSectionTitle(e.target.value)}
                            className='w-full p-2 bg-[#383838] text-white opacity-70  rounded'
                            placeholder='Enter about main title'
                        />
                    </div>
                    <div>
                        <label className='block text-lg'>First Step Title</label>
                        <input
                            type='text'
                            defaultValue={firstStepTitle}
                            onChange={(e) => setFirstStepTitle(e.target.value)}
                            className='w-full p-2 bg-[#383838] text-white opacity-70  rounded'
                            placeholder='Enter first step title'
                        />
                    </div>
                    <div>
                        <label className='block text-lg'>First Step Description</label>
                        <textarea
                            defaultValue={firstStepDescription}
                            onChange={(e) => setFirstStepDescription(e.target.value)}
                            className='w-full p-2 bg-[#383838] text-white opacity-70  rounded'
                            placeholder='Enter first step description'
                            rows='3'
                        />
                    </div>
                    <div>
                        <label className='block text-lg'>Second Step Title</label>
                        <input
                            type='text'
                            defaultValue={secondStepTitle}
                            onChange={(e) => setSecondStepTitle(e.target.value)}
                            className='w-full p-2 bg-[#383838] text-white opacity-70 rounded'
                            placeholder='Enter second step title'
                        />
                    </div>
                    <div>
                        <label className='block text-lg'>Second Step Description</label>
                        <textarea
                            defaultValue={secondStepDescription}
                            onChange={(e) => setSecondStepDescription(e.target.value)}
                            className='w-full p-2 bg-[#383838] text-white opacity-70 rounded'
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
                            defaultValue={blogTitle}
                            onChange={(e) => setblogiTitle(e.target.value)}
                            className='w-full p-2 bg-[#383838] text-white opacity-70 rounded'
                            placeholder='Enter about hero title'
                        />
                    </div>
                    <div>
                        <label className='block text-lg'>Blog Description</label>
                        <textarea
                            defaultValue={blogdecription}
                            onChange={(e) => setblogDecription(e.target.value)}
                            className='w-full p-2 bg-[#383838] text-white opacity-70 rounded'
                            placeholder='Enter about hero description'
                            rows='3'
                        />
                    </div>
                    <div>
                    <label className='block text-lg'>Blog Image</label>
                    <div
                        className='w-full p-6 bg-[#383838] text-white opacity-70 rounded border-2 border-dashed border-gray-500 flex justify-center items-center cursor-pointer'
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
