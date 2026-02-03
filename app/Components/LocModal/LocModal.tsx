import { Coordinate } from 'ol/coordinate';
import styles from './LocModal.module.css';



export default function LocModal({ coordinates }: { coordinates: Coordinate }) {

    let lat = coordinates[1];
    let lon = coordinates[0];

    let latDir = lat >= 0 ? 'N' : 'S';
    let lonDir = lon >= 0 ? 'E' : 'W';

    lat = Math.abs(lat);
    lon = Math.abs(lon);

    return (
        <div className={styles.modal}>
            <h2 className={styles.title}>You are at:</h2>
            <p className={styles.lon}>Longitude: {lon.toFixed(4)}° {lonDir}</p>
            <p className={styles.lat}>Latitude: {lat.toFixed(4)}° {latDir}</p>
        </div>
    );
}