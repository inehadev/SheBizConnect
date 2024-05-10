import { Flex, Box, Heading , Card , Image , CardBody, Stack , Text , Divider , CardFooter  ,  Button , ButtonGroup } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";

export default function Categories (){
    return (
      <>
      <Header/>
      <Flex flexDirection={"column"}>
        <Box ml={"14%"} >
            <Heading mt={3} fontFamily={"fonts.heading"} color={"pink.900"} >Categories</Heading>
        </Box>
         {/* -------CARD-----------*/}

         <Box mt={10} ml={5}   >
            <Flex gap={7}>
           <Card maxW='250px' bg={"pink.100"}>
            <CardBody  >
               <Image
               src='/makeup.jpg'  alt='img' borderRadius='lg' />
             <Stack mt='6' spacing='3'>
              <Heading size='md' fontFamily={"fonts.heading"} color={"pink.900"}>Style & Fashion</Heading>
              </Stack>
            </CardBody>
           <Divider className="bg-pink-900" />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' bg={"pink.900"} > Explore Service  </Button>
            </ButtonGroup>
         </CardFooter>
       </Card>


       <Card maxW='250px' bg={"pink.100"}>
           <CardBody  >
          <Image  src='/cooking.jpg'  alt='img'  borderRadius='lg' />
         <Stack mt='6' spacing='3'>
          <Heading size='md' fontFamily={"fonts.heading"} color={"pink.900"}>Cooking & Food Products</Heading>
         </Stack>
      </CardBody>
     <Divider className="bg-pink-900" />
     <CardFooter>
      <ButtonGroup spacing='2'>
       <Button variant='solid' bg={"pink.900"} > Explore Service</Button>
      </ButtonGroup>
    </CardFooter>
     </Card>


           
    <Card maxW='250px' bg={"pink.100"}>
     <CardBody  >
     <Image  src='/art.jpg'  alt='img'  borderRadius='lg' />
     <Stack mt='6' spacing='3'>
       <Heading size='md' fontFamily={"fonts.heading"} color={"pink.900"}>artCraft & classes</Heading>
     </Stack>
      </CardBody>
     <Divider className="bg-pink-900" />
     <CardFooter>
      <ButtonGroup spacing='2'>
       <Button variant='solid' bg={"pink.900"} > Explore Service</Button>
      </ButtonGroup>
    </CardFooter>
     </Card>


     <Card maxW='250px' bg={"pink.100"}>
     <CardBody  >
     <Image  src='/health.jpg'  alt='img'  borderRadius='lg' />
     <Stack mt='6' spacing='3'>
       <Heading size='md' fontFamily={"fonts.heading"} color={"pink.900"}>Health Service</Heading>
     </Stack>
      </CardBody>
     <Divider className="bg-pink-900" />
     <CardFooter>
      <ButtonGroup spacing='2'>
       <Button variant='solid' bg={"pink.900"} > Explore Service</Button>
      </ButtonGroup>
    </CardFooter>
     </Card>


     <Card maxW='250px' bg={"pink.100"}>
     <CardBody  >
     <Image  src='/digital-services.jpg'  alt='img'  borderRadius='lg' />
     <Stack mt='6' spacing='3'>
       <Heading size='md' fontFamily={"fonts.heading"} color={"pink.900"}>Digital Services</Heading>
     </Stack>
      </CardBody>
     <Divider className="bg-pink-900" />
     <CardFooter>
      <ButtonGroup spacing='2'>
       <Button variant='solid' bg={"pink.900"} > Explore Service</Button>
      </ButtonGroup>
    </CardFooter>
     </Card>
     </Flex>
         </Box>
     
      </Flex>
      </>
    )
}