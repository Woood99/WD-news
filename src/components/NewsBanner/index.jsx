import React from 'react';
import formatTimeAgo from '../../helpers/formatTimeAgo';

import Image from '../Image';

const NewsBanner = ({ title, image, published, author }) => {
   return (
      <article>
         <Image src={image} title={title} />
         <h2 className="text-lg mt-2 font-medium">{title}</h2>
         <p className="text-gray-400 mt-2">
            {formatTimeAgo(published)} от {author}
         </p>
      </article>
   );
};

export default NewsBanner;
