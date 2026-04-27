import React from 'react';
import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { getCategories, getNewsByCategoryID } from '@/lib/dataFetch';
import NewsCard from '@/components/homepage/news/NewsCard';

export const metadata = {
  title: "Dragon News || Category",
  description: "Best News Portal In Bangladesh",
};




const NewsCategoryPage = async ({ params }) => {
    const { id } = await params;

    

    const categoryPromise = await getCategories()
    const categoryData = categoryPromise.data;
    const categories = categoryData.news_category;

    const news = await getNewsByCategoryID(id)
    return (
        <div className="w-10/12 mx-auto grid grid-cols-12 gap-6 my-14">
            {/* Left Sidebar */}
            <div className="col-span-3">
                <LeftSidebar categories={categories} activeId={id}></LeftSidebar>
            </div>
            {/* Middle */}
            <div className="col-span-6">
                <h1 className="text-xl font-semibold text-gray-500">Dragon News Home</h1>
                <div className="space-y-4 mt-4">
                    {
                        news.data.length > 0 ? news.data.map(n => {
                            return <NewsCard key={n._id} news={n}></NewsCard>
                        }) : <h2 className='font-bold text-3xl text-center flex justify-center h-[40vh] items-center'>No News Found</h2>
                    }
                </div>
            </div>
            {/* Right Sidebar */}
            <div className="col-span-3">
                <RightSidebar></RightSidebar>
            </div>
        </div>
    );
};

export default NewsCategoryPage;