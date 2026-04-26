import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
    {
        _id: '1',
        title: 'Breaking News: Major Event Unfolds in The City'
    },
    {
        _id: '2',
        title: 'Breaking News: New Policy Announced By The Government'
    },
    {
        _id: '3',
        title: 'Breaking News: Sports Team Wins Championship'
    }
]

const BreakingNews = () => {
    return (
        <div className='flex w-10/12 mx-auto bg-gray-200 p-2 rounded-xl'>
            <button className='btn btn-secondary'>Latest:</button>
            <Marquee pauseOnHover speed={80}>
                {
                    news.map(n=> <p key={n._id}>{n.title}</p>)
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;