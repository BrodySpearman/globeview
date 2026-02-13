'use client';
import { useReverseGeocode } from '../../api/ReverseGeocode';
import styles from './LocInfo.module.css';
import { Noto_Sans_KR } from 'next/font/google';

const notoSansKr = Noto_Sans_KR({ subsets: ['latin'], weight: ['200', '300', '400'] });

export default function LocInfo({ lat, lon }: { lat: number, lon: number }) {
    const { data, isLoading, error } = useReverseGeocode(lat, lon);

    if (isLoading) {
        return (
            <div className={styles.locInfo}>
                <p className={notoSansKr.className}>Loading location...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.locInfo}>
                <p className={notoSansKr.className}>Error loading location.</p>
            </div>
        );
    }

    if (!data) return null;

    return (
        <div className={styles.locInfo}>
            <p className={`${notoSansKr.className} ${styles.city}`}><span className={styles.underline}>{data.city}</span></p>
            <p className={`${notoSansKr.className} ${styles.county}`}>{data.county}, {data.state}</p>
            <p className={`${notoSansKr.className} ${styles.country}`}><span className={styles.underline}>{data.country}</span></p>
        </div>
    );
}