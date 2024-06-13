import React, { useState, useEffect } from 'react';
import { Container, Text, VStack, Box, Button, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import sedanImage from '../../public/images/sedan.png';
import suvImage from '../../public/images/suv.png';
import truckImage from '../../public/images/truck.png';
import coupeImage from '../../public/images/coupe.png';
import convertibleImage from '../../public/images/convertible.png';

const generateRandomCars = () => {
  const carModels = ["Sedan", "SUV", "Truck", "Coupe", "Convertible"];
  const carImages = {
    "Sedan": sedanImage,
    "SUV": suvImage,
    "Truck": truckImage,
    "Coupe": coupeImage,
    "Convertible": convertibleImage
  };
  const cars = [];

  for (let i = 0; i < 10; i++) {
    const model = carModels[Math.floor(Math.random() * carModels.length)];
    const price = Math.floor(Math.random() * 20000) + 5000;
    const profit = Math.floor(Math.random() * 5000) + 1000;
    const wildcardRating = Math.floor(Math.random() * 10) + 1;
    const image = carImages[model];
    cars.push({ model, price, profit, wildcardRating, image });
  }

  return cars;
};

const Index = () => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [hiddenCost, setHiddenCost] = useState(null);

  useEffect(() => {
    setCars(generateRandomCars());
  }, []);

  const handlePurchase = (car) => {
    setSelectedCar(car);
    const cost = Math.floor(car.wildcardRating * Math.random() * 1000);
    setHiddenCost(cost);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Vehicle Purchase System</Text>
        <Box width="100%">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Image</Th>
                <Th>Model</Th>
                <Th>Price</Th>
                <Th>Profit</Th>
                <Th>Wildcard Rating</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {cars.map((car, index) => (
                <Tr key={index}>
                  <Td><img src={car.image} alt={car.model} width="50" /></Td>
                  <Td>{car.model}</Td>
                  <Td>${car.price}</Td>
                  <Td>${car.profit}</Td>
                  <Td>{car.wildcardRating}</Td>
                  <Td>
                    <Button colorScheme="teal" onClick={() => handlePurchase(car)}>Purchase</Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
        {selectedCar && (
          <Box mt={4} p={4} borderWidth="1px" borderRadius="lg">
            <Text fontSize="lg">Selected Car: {selectedCar.model}</Text>
            <Text>Price: ${selectedCar.price}</Text>
            <Text>Profit: ${selectedCar.profit}</Text>
            <Text>Wildcard Rating: {selectedCar.wildcardRating}</Text>
            <Text>Hidden Cost: ${hiddenCost}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;