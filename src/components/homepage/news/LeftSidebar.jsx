import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({ categories, activeId }) => {
    return (
        <div>
            <h1 className="text-xl font-semibold text-gray-500">All Category</h1>
            <ul className="flex flex-col gap-4 my-4">
                {
                    categories.map(category => <li key={category.category_id}
                        className={`${activeId === category.category_id && 'bg-secondary text-white'} text-lg font-medium text-gray-400 py-4 text-center shadow-sm rounded-xl`}>
                        <Link href={`/category/${category.category_id}`} className='block'>{category.category_name}</Link>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default LeftSidebar;