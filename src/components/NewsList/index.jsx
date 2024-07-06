import React from 'react';

import NewsItem from '../NewsItem';

import styles from './NewsList.module.scss';

const NewsList = ({ news }) => {
   return (
      <ul className={styles.list}>
         {news.map(item => {
             return <NewsItem key={item.id} {...item} />;
         })}
      </ul>
   );
};

export default NewsList;
