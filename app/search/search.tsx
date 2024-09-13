"use client";

import { useState } from 'react';
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';

import Property from '../../components/Property';
import SearchFilters from '../../components/SearchFilters';
import noresult from '../../assets/images/noresult.svg';

const Search = ({ properties, purpose }) => {
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
          properties.map((property) => (
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
