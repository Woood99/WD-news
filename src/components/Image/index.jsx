import React from 'react';

import styles from './Image.module.scss';

const Image = ({ src, title = '' }) => {
   return <div className={styles.wrapper}>{src && src !== 'None' ? <img src={src} alt={title} className={styles.image} /> : null}</div>;
};

export default Image;
