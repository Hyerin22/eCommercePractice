import styles from '../styles/Home.module.css';

import ProductCard from '../components/ProductCard';
import FilterCont from '../components/FilterCont';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hamburger}>
        <FontAwesomeIcon icon={faBars} size='lg' />
      </div>
      <FilterCont />
      <ProductCard />
    </div>
  )
}
