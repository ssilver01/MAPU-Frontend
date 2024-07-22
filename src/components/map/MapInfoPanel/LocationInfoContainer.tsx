import useMapInfoStore from '../../../stores/mapInfoStore';
import styles from './LocationInfoContainer.module.scss';

const LocationInfoContainer = () => {
  const { location } = useMapInfoStore();

  return (
    <div className={styles.locationInfoContainer}>
      <div className={styles.locationInfo}>
        <span className={styles.location__title}>위치</span>
        <span>{location}</span>
      </div>
      <div className={styles.locationInfo}>
        <span className={styles.location__title}>날씨</span>
        <span>날씨 api 호출 결과</span>
      </div>
      <div className={styles.locationInfo}>
        <span className={styles.location__title}>미세/초미세</span>
        <span>미세먼지 api 호출 결과</span>
      </div>
    </div>
  );
};

export default LocationInfoContainer;
