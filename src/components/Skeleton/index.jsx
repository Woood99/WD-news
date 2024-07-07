import styles from './Skeleton.module.scss';

const Skeleton = ({ count = 1, type = 'banner' }) => {
   console.log(count);
   return (
      <>
         {[...Array(count)].map((_, index) => {
            return <li key={index} className={type === 'banner' ? styles.banner : styles.item}></li>;
         })}
      </>
   );
};

export default Skeleton;
