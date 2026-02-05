export interface formattedResponse {
    city: string;
    county: string;
    state: string;
    country: string;
    country_code: string;
}

// Needed API delay to prevent rate troubles.
// Using Nominatim API, only limited to 1 request per second.
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export async function reverseGeocode(lat: number, lon: number, setCityInfo: (cityInfo: formattedResponse | null) => void) {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&addressdetails=1&limit=1&namedetails=0&extratags=1&accept-language=en&zoom=10`
    const response = await fetch(url, { cache: 'force-cache', next: { revalidate: 86400 } });
    const data = await response.json();

    const formattedData: formattedResponse = {
        city: data.address.city,
        county: data.address.county,
        state: data.address.state,
        country: data.address.country,
        country_code: data.address.country_code,
    }

    console.log(formattedData);

    await setCityInfo(formattedData);

    await delay(1000);
}