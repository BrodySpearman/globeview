import { Coordinate } from 'ol/coordinate';
import styles from './LocModal.module.css';
import { Noto_Sans_KR } from 'next/font/google';
import LocInfo from './LocInfo/LocInfo';

const notoSansKr = Noto_Sans_KR({ subsets: ['latin'], weight: ['300', '400'] });

export default function LocModal({ coordinates }: { coordinates: Coordinate }) {

    let lat = coordinates[1];
    let lon = coordinates[0];

    let latDir = lat >= 0 ? 'N' : 'S';
    let lonDir = lon >= 0 ? 'E' : 'W';

    let displayLat = Math.abs(lat);
    let displayLon = Math.abs(lon);

    return (
        <div className={`${styles.modal} ${notoSansKr.className}`}>
            <LocInfo lat={lat} lon={lon} />
            <p className={styles.lat}>Latitude: {displayLat.toFixed(4)}° {latDir}</p>
            <p className={styles.lon}>Longitude: {displayLon.toFixed(4)}° {lonDir}</p>
        </div>
    );
}