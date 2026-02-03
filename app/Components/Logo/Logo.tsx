import styles from "./Logo.module.css";
import { Major_Mono_Display } from "next/font/google";
import { useState, useEffect } from "react";

const MajorMonoDisplay = Major_Mono_Display({
    subsets: ["latin"],
    weight: "400",
});



export default function Logo() {

    const [time, setTime] = useState(new Date());

    const options = {
        year: 'numeric' as const,
        month: 'numeric' as const,
        day: 'numeric' as const,
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const currentDate = time.toLocaleDateString('en-US', options);

    return (
        <div className={styles.logoContainer}>
            <div className={styles.dateContainer}>
                <p className={styles.dateText}>{currentDate}</p>
            </div>
            <h1 className={`${styles.logoText} ${MajorMonoDisplay.className}`}>
                Globeview
            </h1>
        </div>
    );
}