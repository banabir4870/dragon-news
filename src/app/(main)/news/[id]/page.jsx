import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';

const getNewsDetails = async (detailId) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${detailId}`)
    const data = await res.json()
    return data.data[0];
}

export const generateMetadata = async ({params}) => {
    const {id} = await params;
    const news = await getNewsDetails(id)
    return {
        title: news.title,
        description: news.details
    }
};


const NewsDetailsPage = async ({params}) => {
    const {id} = await params;
    console.log(id)
    const news = await getNewsDetails(id);
    console.log('Details: ', news)
    return (
        <div className='w-6/12 mx-auto mt-4'>
            <h1 className="text-xl font-semibold text-gray-500">Dragon News</h1>
            <div className='bg-base-100 shadow-sm my-4 p-8 space-y-4 rounded-xl'>
                <Image src={news.image_url} alt='news details' width={1500} height={1500} className='w-full h-fit'></Image>
                <h1 className='text-2xl font-semibold'>{news.title}</h1>
                <p>{news.details}</p>
                <Link href={`/category/${news.category_id}`}><button className='flex justify-center items-center gap-2 btn btn-secondary'><FaArrowLeftLong />All News In This Category</button></Link>
            </div>
        </div>
    );
};

export default NewsDetailsPage;