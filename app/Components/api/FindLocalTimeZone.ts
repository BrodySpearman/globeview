import { find } from 'browser-geo-tz';
import useSWR from 'swr';

export const FindLocalTimeZone = (lat: number, lon: number) => {

    const fetchTZ = async () => {
        const timezone = await find(lat, lon);
        console.log(timezone);
        return timezone;
    }

    const { data, error, isLoading } = useSWR([lat, lon], fetchTZ);

    return {
        data,
        error,
        isLoading
    };
}