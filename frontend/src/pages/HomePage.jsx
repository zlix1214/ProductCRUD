import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ChakraLink } from  "@chakra-ui/react";

import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products", products);

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"25"}
          fontWeight={"semi-bold"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
          textAlign={"center"}
        >
          Welcome to add, edit, or delete your own products,<br/> but
          please avoid adding inappropriate items. Thank you XD
        </Text>
        <Text
          fontSize={{ base: "8", sm: "15" }}
          textTransform={"uppercase"}
          textAlign={"center"}
        >
          You can get image from{" "}
          <ChakraLink
            href="https://unsplash.com/"
            target="_blank"
            rel="noopener noreferrer"
            color="blue.500"
            fontWeight="semi-bold"
            textDecoration="underline"
            _hover={{ color: "blue.700" }}
          >
            Unsplash
          </ChakraLink>
        </Text>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
          w={"full"}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

        {products.length === 0 && (
          <Text
            fontSize="xl"
            textAlign={"center"}
            fontWeight="bold"
            color="gray.500"
          >
            No products found 😢{" "}
            <Link to={"/create"}>
              <Text
                as="span"
                color="blue.500"
                _hover={{ textDecoration: "underline" }}
              >
                Create a product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
};
export default HomePage;
