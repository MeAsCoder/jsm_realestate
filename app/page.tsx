

import Image from "next/image";
import Link from 'next/link';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import Property from '../components/Property';


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

// Define the type for props
type BannerProps = {
  purpose: string;
  title1: string;
  title2: string;
  desc1: string;
  desc2: string;
  buttonText: string;
  linkName: string;
  imageUrl: string;
};

// Banner component
const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }: BannerProps) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />

        <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{title1}<br />{title2}</Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}<br />{desc2}</Text>
      <Button fontSize="xl" border="2px solid" borderColor="gray.500" _hover={{ bg: "gray.600", borderColor: "gray.700" }}>
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>  
  </Flex>
);




// Async Home component to fetch data on the server side
export default async function Home() {
  try {
    // Fetch properties for sale and rent
    const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
    const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

    const propertiesForSale = propertyForSale?.hits || [];
    const propertiesForRent = propertyForRent?.hits || [];

    return (
      <Box>
        <Banner 
          purpose="RENT A HOME"
          title1="Rental Homes for"
          title2="Everyone"
          desc1="Explore Apartments, Villas, Homes"
          desc2="and more"
          buttonText="Explore Renting"
          linkName="/search?purpose=for-rent"
          imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
        />

        <Flex flexWrap="wrap">
          {propertiesForRent.length ? (
            propertiesForRent.map((property: any) => <Property property={property} key={property.id} />)
          ) : (
            <Text>No properties for rent found</Text>
          )}
        </Flex>

        <Banner 
          purpose='BUY A HOME'
          title1='Find, Buy & Own Your'
          title2='Dream Home'
          desc1='Explore from Apartments, land, builder floors,'
          desc2='villas and more'
          buttonText='Explore Buying'
          linkName='/search?purpose=for-sale'
          imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
        />

        <Flex flexWrap="wrap">
          {propertiesForSale.length ? (
            propertiesForSale.map((property: any) => <Property property={property} key={property.id} />)
          ):(
            <Text>No properties for sale found</Text>
          )}
        </Flex>
      </Box>
    );
  } catch (error) {
    console.error("Error fetching properties:", error);
    return <Text>Error fetching properties</Text>;
  }
}




