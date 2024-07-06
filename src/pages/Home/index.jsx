import React, { useEffect, useState } from 'react';

import NewsList from '../../components/NewsList';
import NewsBanner from '../../components/NewsBanner';
import { getNews } from '../../api/apiNews';

const Home = () => {
   const [newsItems, setNewsItems] = useState([]);
   useEffect(() => {
      const fetchNews = async () => {
         try {
            const response = await getNews();
            setNewsItems(response.news);
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
                  {newsItems.map((item, index) => {
                     if (index < 3) {
                        return <NewsBanner key={item.id} {...item} />;
                     }
                  })}
               </div>
               <div className="mt-16">
                  <NewsList news={newsItems} />
               </div>
            </div>
         </section>
      </main>
   );
};

export default Home;
