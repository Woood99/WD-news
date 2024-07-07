import React, { useEffect, useState } from 'react';

import Skeleton from '../../components/Skeleton';
import NewsList from '../../components/NewsList';
import NewsBanner from '../../components/NewsBanner';
import { getNews } from '../../api/apiNews';

const Home = () => {
   const [newsItems, setNewsItems] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   useEffect(() => {
      const fetchNews = async () => {
         try {
            const response = await getNews();
            setNewsItems(response.news);
            setIsLoading(false);
         } catch (error) {
            console.log(error);
         }
      };
      fetchNews();
   }, []);

   return (
      <main>
         <section>
            <div className="container">
               <div className="grid grid-cols-3 gap-8 mt-12 max-sm:grid-cols-1">
                  {isLoading ? (
                     <ul className="grid grid-cols-3 gap-8 max-sm:grid-cols-1 col-span-full">
                        <Skeleton count={3} />
                     </ul>
                  ) : (
                     newsItems.map((item, index) => {
                        if (index < 3) {
                           return <NewsBanner key={item.id} {...item} />;
                        }
                     })
                  )}
               </div>
               <div className="mt-16">
                  {isLoading ? (
                     <ul className="grid grid-cols-2 gap-8">
                        <Skeleton count={12} type="item" />
                     </ul>
                  ) : (
                     <NewsList news={newsItems} />
                  )}
               </div>
            </div>
         </section>
      </main>
   );
};

export default Home;
