import React, { useState, useEffect } from 'react';

import formatDate from '../../helpers/formatDate';

import styles from './Header.module.scss';

const Header = () => {
   const [currentDate, setCurrentDate] = useState(formatDate(new Date()));

   useEffect(() => {
      setInterval(() => {
         setCurrentDate(formatDate(new Date()));
      }, 1000 * 60);
   }, []);

   return (
      <header className={styles.header}>
         <div className="container">
            <h1 className="text-2xl font-medium">WD NEWS</h1>
            <p>{currentDate}</p>
         </div>
      </header>
   );
};

export default Header;
