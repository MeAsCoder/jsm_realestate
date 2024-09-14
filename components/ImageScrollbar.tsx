"use client";

//import { useContext } from 'react';
import Image from 'next/image';
import { Box, Icon, Flex } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
//import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';




interface ImageSrollbarProps {
    data: { id: string; url: string }[];
  }

  /*

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent='center' alignItems='center' marginRight='1'>
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        fontSize='2xl'
        cursor='pointer'
        d={['none','none','none','block']}
      />
    </Flex>
  );
}

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex justifyContent='center' alignItems='center' marginLeft='1'>
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        fontSize='2xl'
        cursor='pointer'
        d={['none','none','none','block']}
    />
    </Flex>
  );
}

*/


/*
export default function ImageSrollbar({ data }) {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: 'hidden' }} >
      {data.map((item) => (
        <Box width='910px' itemId={item.id} overflow='hidden' p='1'>
          <Image placeholder="blur" blurDataURL={item.url}  src={item.url} width={1000} height={500}  sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px" />
        </Box>
      ))}
    </ScrollMenu>
  );
}

*/



export default function ImageSrollbar({ data }: ImageSrollbarProps) {
    return (
      <div className="carousel w-full">
        {data.map((item, index) => (
          <div
            id={`slide${index + 1}`}
            key={item.id}
            className="carousel-item relative w-full"
          >
            <Image
              placeholder="blur"
              blurDataURL={item.url}
              src={item.url}
              alt={`Slide ${index + 1}`}
              width={1000}
              height={500}
              className="w-full"
              sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href={`#slide${index === 0 ? data.length : index}`}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={`#slide${index === data.length - 1 ? 1 : index + 2}`}
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }