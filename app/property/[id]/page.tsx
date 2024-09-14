/*

import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import { baseUrl, fetchApi } from '../../../utils/fetchApi';
import ImageScrollbar from '../../../components/ImageScrollbar';





interface Agency {
    logo: {
      url: string;
    };
  }
  
  interface Amenity {
    text: string;
  }
  
  interface Amenities {
    amenities: Amenity[];
  }
  
  interface PropertyDetailsType {
    price: number;
    rentFrequency?: string;
    rooms: number;
    title: string;
    baths: number;
    area: number;
    agency: Agency;
    isVerified: boolean;
    description: string;
    type: string;
    purpose: string;
    furnishingStatus?: string;
    amenities?: Amenities[];
    photos?: { id: string; url: string }[];
  }
  
  // Define the parameters for dynamic routes
  interface Params {
    params: {
      id: string;
    };
  }
  



export default async function PropertyDetails({ params}: Params) {
  const { id } = params; // dynamic id from URL
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  console.log(data);

  const {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  } = data;

  return (
    <Box maxWidth="1000px" margin="auto" p="4">
      {photos && <ImageScrollbar data={photos} />}
      <Box w="full" p="6">
        <Flex paddingTop="2" alignItems="center">
          <Box paddingRight="3" color="green.400">
            {isVerified && <GoVerified />}
          </Box>
          <Text fontWeight="bold" fontSize="lg">
            AED {price} {rentFrequency && `/${rentFrequency}`}
          </Text>
          <Spacer />
          <Avatar size="sm" src={agency?.logo?.url} boxSize="100px" />
        </Flex>
        <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
          {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        </Flex>
      </Box>
      <Box marginTop="2">
        <Text fontSize="lg" marginBottom="2" fontWeight="bold">
          {title}
        </Text>
        <Text lineHeight="2" color="gray.600">
          {description}
        </Text>
      </Box>
      <Flex flexWrap="wrap" textTransform="uppercase" justifyContent="space-between">
        <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3">
          <Text>Type</Text>
          <Text fontWeight="bold">{type}</Text>
        </Flex>
        <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3">
          <Text>Purpose</Text>
          <Text fontWeight="bold">{purpose}</Text>
        </Flex>
        {furnishingStatus && (
          <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3">
            <Text>Furnishing Status</Text>
            <Text fontWeight="bold">{furnishingStatus}</Text>
          </Flex>
        )}
      </Flex>
      <Box>
        {amenities && amenities.length > 0 && (
          <Text fontSize="2xl" fontWeight="black" marginTop="5">
            Facilities:
          </Text>
        )}
        <Flex flexWrap="wrap">
          {amenities?.map((item: Amenities) =>
            item.amenities?.map((amenity: Amenity) => (
              <Text
                key={amenity.text}
                fontWeight="bold"
                color="blue.400"
                fontSize="l"
                p="2"
                bg="gray.200"
                m="1"
                borderRadius="5"
              >
                {amenity.text}
              </Text>
            ))
          )}
        </Flex>
      </Box>
    </Box>
  );
}


*/


/*


import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import { baseUrl, fetchApi } from '../../../utils/fetchApi';
import ImageScrollbar from '../../../components/ImageScrollbar';
import React from 'react';

// Define types for the property details
interface Agency {
  logo: {
    url: string;
  };
}

interface Amenity {
  text: string;
}

interface Amenities {
  amenities: Amenity[];
}

interface PropertyDetailsType {
  price: number;
  rentFrequency?: string;
  rooms: number;
  title: string;
  baths: number;
  area: number;
  agency: Agency;
  isVerified: boolean;
  description: string;
  type: string;
  purpose: string;
  furnishingStatus?: string;
  amenities?: Amenities[];
  photos?: { id: string; url: string }[];
}

// Define the parameters for dynamic routes
interface Params {
  params: {
    id: string;
  };
}

// The PropertyDetails component
export default async function PropertyDetails({ params }: Params) {
  const { id } = params; // dynamic id from URL

  // Fetch data from the API and type it correctly
  const data: PropertyDetailsType = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  

  console.log(data);

  const {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  } = data;

  return (
    <Box maxWidth="1000px" margin="auto" p="4">
      {photos && <ImageScrollbar data={photos} />}
      <Box w="full" p="6">
        <Flex paddingTop="2" alignItems="center">
          <Box paddingRight="3" color="green.400">
            {isVerified && <GoVerified />}
          </Box>
          <Text fontWeight="bold" fontSize="lg">
            AED {price} {rentFrequency && `/${rentFrequency}`}
          </Text>
          <Spacer />
          <Avatar size="sm" src={agency?.logo?.url} boxSize="100px" />
        </Flex>
        <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
          {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        </Flex>
      </Box>
      <Box marginTop="2">
        <Text fontSize="lg" marginBottom="2" fontWeight="bold">
          {title}
        </Text>
        <Text lineHeight="2" color="gray.600">
          {description}
        </Text>
      </Box>
      <Flex flexWrap="wrap" textTransform="uppercase" justifyContent="space-between">
        <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3">
          <Text>Type</Text>
          <Text fontWeight="bold">{type}</Text>
        </Flex>
        <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3">
          <Text>Purpose</Text>
          <Text fontWeight="bold">{purpose}</Text>
        </Flex>
        {furnishingStatus && (
          <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3">
            <Text>Furnishing Status</Text>
            <Text fontWeight="bold">{furnishingStatus}</Text>
          </Flex>
        )}
      </Flex>
      <Box>
        {amenities && amenities.length > 0 && (
          <Text fontSize="2xl" fontWeight="black" marginTop="5">
            Facilities:
          </Text>
        )}
        <Flex flexWrap="wrap">
          {amenities?.map((item: Amenities) =>
            item.amenities?.map((amenity: Amenity) => (
              <Text
                key={amenity.text}
                fontWeight="bold"
                color="blue.400"
                fontSize="l"
                p="2"
                bg="gray.200"
                m="1"
                borderRadius="5"
              >
                {amenity.text}
              </Text>
            ))
          )}
        </Flex>
      </Box>
    </Box>
  );
}


*/




import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import { baseUrl, fetchApi } from '../../../utils/fetchApi';
import ImageScrollbar from '../../../components/ImageScrollbar';
import React from 'react';
import { PropertyDetailsType } from '@/components/types';


// Define the parameters for dynamic routes
interface Params {
  params: {
    id: string;
  };
}

interface Amenity {
    text: string;
  }
  
  interface Amenities {
    amenities: Amenity[];
  }

// The PropertyDetails component
export default async function PropertyDetails({ params }: Params) {
  const { id } = params; // dynamic id from URL

  // Fetch data from the API and type it correctly
  const data: PropertyDetailsType = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  console.log(data);

  const {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  } = data;

  return (
    <Box maxWidth="1000px" margin="auto" p="4">
      {photos && <ImageScrollbar data={photos} />}
      <Box w="full" p="6">
        <Flex paddingTop="2" alignItems="center">
          <Box paddingRight="3" color="green.400">
            {isVerified && <GoVerified />}
          </Box>
          <Text fontWeight="bold" fontSize="lg">
            AED {price} {rentFrequency && `/${rentFrequency}`}
          </Text>
          <Spacer />
          <Avatar size="sm" src={agency?.logo?.url} boxSize="100px" />
        </Flex>
        <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
          {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        </Flex>
      </Box>
      <Box marginTop="2">
        <Text fontSize="lg" marginBottom="2" fontWeight="bold">
          {title}
        </Text>
        <Text lineHeight="2" color="gray.600">
          {description}
        </Text>
      </Box>
      <Flex flexWrap="wrap" textTransform="uppercase" justifyContent="space-between">
        <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3">
          <Text>Type</Text>
          <Text fontWeight="bold">{type}</Text>
        </Flex>
        <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3">
          <Text>Purpose</Text>
          <Text fontWeight="bold">{purpose}</Text>
        </Flex>
        {furnishingStatus && (
          <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3">
            <Text>Furnishing Status</Text>
            <Text fontWeight="bold">{furnishingStatus}</Text>
          </Flex>
        )}
      </Flex>
      <Box>
        {amenities && amenities.length > 0 && (
          <Text fontSize="2xl" fontWeight="black" marginTop="5">
            Facilities:
          </Text>
        )}
        <Flex flexWrap="wrap">
          {amenities?.map((item : Amenities) =>
            item.amenities?.map((amenity : Amenity) => (
              <Text
                key={amenity.text}
                fontWeight="bold"
                color="blue.400"
                fontSize="l"
                p="2"
                bg="gray.200"
                m="1"
                borderRadius="5"
              >
                {amenity.text}
              </Text>
            ))
          )}
        </Flex>
      </Box>
    </Box>
  );
}
