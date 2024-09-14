// types.ts or a common types file

export interface CoverPhoto {
    id: string;
    externalID: string;
    title: string;
    url: string;
    orderIndex: number;
    nimaScore: number;
    main: boolean;
    photoCount: number;
    videoCount: number;
    panoramaCount: number;
  }
  
  export interface Agency {
    id: number;
    objectID: number;
    name: string;
    externalID: string;
    product: string;
    productScore: number;
    licenses: any; // Adjust this type as needed
    logo: {
      url: string | undefined;
      slug: string;
      slug_l1: string;
    };
    tier: number;
    active: boolean;
    hasExactGeography: boolean;
    verification: {
      status: string;
      type: string | null;
      eligible: boolean;
      comment: string | null;
      updatedAt: number;
      verifiedAt: number | null;
      visitedAt: number | null;
    };
  }
  
  export interface PropertyDetailsType {
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
    isVerified : boolean;
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
  