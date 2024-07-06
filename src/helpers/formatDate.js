const formatDate = date => {
   const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
   };
   return date.toLocaleDateString('ru-RU', options);
};

export default formatDate;
