import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import Image from "next/image";


const getCategories = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
  const data = await res.json();
  return data;
}


export default async function Home() {
  const categoryPromise = await getCategories()
  const categoryData = categoryPromise.data;
  const categories = categoryData.news_category;
  return (
    <div className="w-10/12 mx-auto grid grid-cols-12 gap-6 my-14">
      {/* Left Sidebar */}
      <div className="col-span-3">
        <LeftSidebar categories={categories} activeId={null}></LeftSidebar>
      </div>
      {/* Middle */}
      <div className="col-span-6">
        <h1 className="text-xl font-semibold text-gray-500">Dragon News Home</h1>
      </div>
      {/* Right Sidebar */}
      <div className="col-span-3">
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
}
