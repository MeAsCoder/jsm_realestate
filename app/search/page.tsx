// app/search/page.tsx

import { Agency, CoverPhoto } from '@/components/types';
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
    id: number;
    objectID: number;
    ownerID: number;
    userExternalID: string;
    sourceID: number;
    state: string;
    geography: {
      lat: number;
      lng: number;
    };
    purpose: string;
    price: number;
    product: string;
    productLabel: string;
    rentFrequency: string | null;
    referenceNumber: string;
    permitNumber: string;
    title: string;
    title_l1: string;
    description: string;
    description_l1: string;
    externalID: string;
    slug: string;
    isVerified: boolean;
    slug_l1: string;
    location: any; // Adjust this type as needed
    category: any; // Adjust this type as needed
    createdAt: number;
    approvedAt: number;
    updatedAt: number;
    touchedAt: number;
    reactivatedAt: number;
    rooms: number;
    baths: number;
    area: number;
    score: number;
    score_l1: number;
    coverPhoto: CoverPhoto;
    photos: any[]; // Adjust this type as needed
    floorPlans: any[]; // Adjust this type as needed
    videos: any[]; // Adjust this type as needed
    panoramas: any[]; // Adjust this type as needed
    amenities: any[]; // Adjust this type as needed
    phoneNumber: {
      mobile: string;
      phone: string;
      whatsapp: string;
      proxyMobile: string;
    };
    contactName: string;
    agency: Agency;
    completionStatus: string;
    randBoostScore: number;
    randBoostScore_l1: number;
    furnishingStatus: string | null;
    extraFields: any; // Adjust this type as needed
    type: string;
    cityLevelScore: number;
    indyScore: number;
    indyScore_l1: number;
    hasMatchingFloorPlans: boolean;
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
