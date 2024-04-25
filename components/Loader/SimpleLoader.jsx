
import styles from './SimpleLoader.module.css';
import { RiLoader4Line } from 'react-icons/ri';

const SimpleLoader = ({ show }) => {
  return (
    <span className={`${styles.loader} ${show ? styles.spin : ""}`}>
      <RiLoader4Line className='text-[24px]' />
    </span>
  );
}

export default SimpleLoader;
