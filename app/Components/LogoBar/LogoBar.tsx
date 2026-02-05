import styles from "./Logo.module.css";
import { Major_Mono_Display, Jost } from "next/font/google";
import { useState, useEffect, useMemo } from "react";

const MajorMonoDisplay = Major_Mono_Display({
    subsets: ["latin"],
    weight: "400",
});

const jost = Jost({
    subsets: ["latin"],
    weight: "200",
});


export default function LogoBar() {

    const [time, setTime] = useState(new Date());
    const [mounted, setMounted] = useState(false);
    const [collapsed, setCollapsed] = useState(false);

    const options = {
        year: 'numeric' as const,
        month: 'numeric' as const,
        day: 'numeric' as const,
    };

    useEffect(() => {
        setMounted(true);
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formattedTime = useMemo(() => {
        if (!mounted) { return '--:--:--' };
        const hours = (time.getHours() % 12 || 12).toString().padStart(2, '0');
        const minutes = time.getMinutes().toString().padStart(2, '0');
        const seconds = time.getSeconds().toString().padStart(2, '0');
        const ampm = time.getHours() >= 12 ? 'PM' : 'AM';
        return `${hours}:${minutes}:${seconds} ${ampm}`;
    }, [time, mounted]);


    const currentDate = time.toLocaleDateString('en-US', options);
    const formattedDate = currentDate.replace(/\//g, '.');

    const collapseClick = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className={styles.header}>
            <div className={`${styles.logoContainer} ${collapsed ? styles.collapsed : styles.expanded}`}>
                <p className={`${styles.dateText} ${jost.className}`}>{formattedDate}</p>
                <h1 className={`${styles.logoText} ${MajorMonoDisplay.className}`}>
                    Globeview
                </h1>
                <p className={`${styles.timeText} ${jost.className}`}>{formattedTime}</p>
            </div>
            <div className={`${styles.bezel} ${collapsed ? styles.collapsed : styles.expanded}`}>
                <button onClick={collapseClick}>
                    {collapsed ? 'Expand' : 'Collapse'}
                </button>
            </div>
        </div>
    );
}