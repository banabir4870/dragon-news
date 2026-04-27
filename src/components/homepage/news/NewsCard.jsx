import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiShare2, CiStar } from 'react-icons/ci';
import { FaRegBookmark } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';

const NewsCard = ({ news }) => {
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className='flex justify-between items-center px-4 py-2 bg-gray-400 rounded-t-lg'>
                <div className='flex items-center gap-2'>
                    <Image src={news.author.img} alt='author image' width={40} height={40} className='w-10 h-10 rounded-full'></Image>
                    <div>
                        <h2>{news.author.name}</h2>
                        <p>{news.author.published_date}</p>
                    </div>
                </div>
                <div className='flex gap-4 items-center text-2xl'>
                    <FaRegBookmark />
                    <CiShare2 />
                </div>
            </div>
            <h2 className="card-title px-4 py-2">{news.title}</h2>
            <figure className="px-4 pt-4">
                <Image src={news.image_url} alt='news image' width={800} height={500}></Image>
            </figure>
            <div className="card-body">
                <p className='line-clamp-2'>{news.details}</p>
                <Link href={`/news/${news._id}`}><button className='text-orange-500 btn'>Read More</button></Link>
                <hr />
                <div className="card-actions flex justify-between items-center">
                    <div className='flex justify-between items-center gap-2'>
                        <CiStar className='text-2xl text-yellow-500' />
                        <p className='text-xl'>{news.rating.number}</p>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <IoEyeOutline className='text-2xl' />
                        <p className='text-xl'>{news.total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;