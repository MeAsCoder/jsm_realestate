"use client";

import { useState } from 'react';
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';

import Property from '../../components/Property';
import SearchFilters from '../../components/SearchFilters';
import noresult from '../../assets/images/noresult.svg';
import { Agency, CoverPhoto } from '@/components/types';




interface SearchProps {
  properties: PropertyType[];
  purpose?: string;
}



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


const Search = ({ properties, purpose }: SearchProps) => {
  const [searchFilters, setSearchFilters] = useState(false);

  // Ensure purpose has a default value if not provided
  const displayPurpose = purpose || 'Default Purpose';

  return (
    <Box>
      <Flex
        onClick={() => setSearchFilters(!searchFilters)}
        cursor='pointer'
        bg='gray.100'
        borderBottom='1px'
        borderColor='gray.200'
        p='2'
        fontWeight='black'
        fontSize='lg'
        justifyContent='center'
        alignItems='center'
      >
        <Text>Search Property By Filters</Text>
        <Icon paddingLeft='2' w='7' as={BsFilter} />
      </Flex>
      {searchFilters && <SearchFilters />}
      <Text fontSize='2xl' p='4' fontWeight='bold'>
        Properties {displayPurpose}
      </Text>
      <Flex flexWrap='wrap'>
        {properties.length > 0 ? (
          properties.map((property: PropertyType) => (
            <Link key={property.id} href={`/property/${property.id}`} passHref>
              <Box width="100%" mb="4">
                <Property property={property} />
              </Box>
            </Link>
          ))
        ) : (
          <Flex
            justifyContent='center'
            alignItems='center'
            flexDir='column'
            marginTop='5'
            marginBottom='5'
          >
            <Image src={noresult} alt="No result" />
            <Text fontSize='xl' marginTop='3'>
              No Result Found.
            </Text>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default Search;
