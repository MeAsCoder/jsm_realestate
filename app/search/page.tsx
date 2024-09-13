// app/search/page.tsx

import { fetchApi, baseUrl } from '../../utils/fetchApi';
import Search from './search'; // Adjust path if necessary




interface SearchParamsType {
    purpose?: string;
    rentFrequency?: string;
    minPrice?: string;
    maxPrice?: string;
    roomsMin?: string;
    bathsMin?: string;
    sort?: string;
    areaMax?: string;
    locationExternalIDs?: string;
    categoryExternalID?: string;
  }
  
  // Define PropertyType interface for the properties
  interface PropertyType {
    id: string;
    price: number;
    title: string;
    location: {
      name: string;
    };
    coverPhoto: {
      url: string;
    };
    rooms: number;
    baths: number;
    area: number;
  }
  
  // Define the type for the API response
  interface ApiResponse {
    hits: PropertyType[];
  }


export default async function SearchPage({ searchParams }: {searchParams: SearchParamsType}) {
  const purpose = searchParams.purpose || 'for-rent';
  const rentFrequency = searchParams.rentFrequency || 'yearly';
  const minPrice = searchParams.minPrice || '0';
  const maxPrice = searchParams.maxPrice || '1000000';
  const roomsMin = searchParams.roomsMin || '0';
  const bathsMin = searchParams.bathsMin || '0';
  const sort = searchParams.sort || 'price-desc';
  const areaMax = searchParams.areaMax || '35000';
  const locationExternalIDs = searchParams.locationExternalIDs || '5002';
  const categoryExternalID = searchParams.categoryExternalID || '4';

  // Fetch data from the API
  const data : ApiResponse = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  // Pass the fetched data and purpose to the Client Component
  return <Search properties={data?.hits || []} purpose={purpose} />;
}
