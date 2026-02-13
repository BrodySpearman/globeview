import { toZonedTime } from "date-fns-tz";
import { useEffect, useMemo, useState } from "react";
import { FindLocalTimeZone } from "../../api/FindLocalTimeZone";

import classes from './LocalClock.module.css';

export default function LocalClock({ lat, lon }: { lat: number, lon: number }) {

    const [time, setTime] = useState(new Date());
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const { data: timezones, isLoading, error } = FindLocalTimeZone(lat, lon);

    const TZformat = timezones?.[0] || '';

    const localDate = toZonedTime(time, TZformat);

    const formattedLocationTime = useMemo(() => {
        if (!mounted) { return '--:--:--' };
        const hours = (localDate.getHours() % 12 || 12).toString().padStart(2, '0');
        const minutes = localDate.getMinutes().toString().padStart(2, '0');
        const seconds = localDate.getSeconds().toString().padStart(2, '0');
        const ampm = localDate.getHours() >= 12 ? 'PM' : 'AM';
        return `${hours}:${minutes}:${seconds} ${ampm}`;
    }, [time, mounted, localDate]);

    if (isLoading) {
        return <p className={classes.localTime}>Loading...</p>;
    }

    if (error || !timezones || timezones.length === 0) {
        return <p className={classes.localTime}>Timezone not found</p>;
    }

    return (
        <div className={classes.localTimeContainer}>
            <p className={classes.localTime}>{formattedLocationTime}</p>
            <p className={classes.tz}>({TZformat})</p>
        </div>
    );
}