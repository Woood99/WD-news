import React from 'react';
import formatTimeAgo from '../../helpers/formatTimeAgo';

import styles from './NewsItem.module.scss';

const NewsItem = ({ title, image, published, author }) => {
   return (
      <article className="flex gap-4">
         <div className={styles.image} style={{backgroundImage: `url(${image})`}}>
         </div>
         <div>
            <h2 className="text-lg font-medium">{title}</h2>
            <p className="text-gray-400 mt-2">
               {formatTimeAgo(published)} от {author}
            </p>
         </div>
      </article>
   );
};

export default NewsItem;
