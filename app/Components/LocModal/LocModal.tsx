import { Coordinate } from 'ol/coordinate';
import styles from './LocModal.module.css';
import { Noto_Sans_KR } from 'next/font/google';

const notoSansKr = Noto_Sans_KR({ subsets: ['latin'], weight: ['400'] });



export default function LocModal({ coordinates }: { coordinates: Coordinate }) {
    return (
        <div className={`${styles.modal} ${notoSansKr.className}`}>
            <h2 className={styles.title}>You are at:</h2>
            <p className={styles.lat}>Longitude: {coordinates[0].toFixed(6)}</p>
            <p className={styles.lon}>Latitude: {coordinates[1].toFixed(6)}</p>
        </div>
    );
}