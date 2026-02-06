import useSWR from "swr";

export interface formattedResponse {
    city: string;
    county: string;
    state: string;
    country: string;
    country_code: string;
}

// Nominatim API has a rate limit of 1 request per second sadly :(
// Consequence of using a free geocoding API

export const useReverseGeocode = (lat: number, lon: number) => {
    const shouldFetch = lat !== undefined && lon !== undefined;
    const url = shouldFetch ? `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&addressdetails=1&limit=1&namedetails=0&extratags=1&accept-language=en&zoom=10` : null;

    const fetcher = async (url: string) => {
        const res = await fetch(url);
        if (!res.ok) throw new Error('Failed to fetch location');
        return res.json();
    };

    const { data, error, isLoading } = useSWR(url, fetcher);

    const formattedData: formattedResponse | null = data ? {
        city: data.address?.city || '',
        county: data.address?.county || '',
        state: data.address?.state || '',
        country: data.address?.country || '',
        country_code: data.address?.country_code || '',
    } : null;

    return {
        data: formattedData,
        error,
        isLoading
    };
}