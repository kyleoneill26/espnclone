import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Flex, Heading, Link, Text, Image } from "@chakra-ui/react";
import './NewNewsPage.css'; // Ensure this import is correct

const NewNewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {git 
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=f2de8af011ec472fb9c1de564a1494d8');
        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Box>Loading...</Box>;
  if (error) return <Box>Error: {error}</Box>;

return (
    <Flex direction="column" align="center" justify="center" m="4">
      <Heading as="h1" size="xl" mb="4" className="heading">Latest News</Heading>
      {articles.map((article, index) => (
        <Box key={index} className="news-item">
          <Image 
          style={{ width: "290px", height: "164px" }}
            className="imagenews" 
            src={article.urlToImage ? article.urlToImage : 'data:image/png;base64,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'} 
            alt={article.title} 
            
          />
          <Box className="news-content">
            <Heading fontSize="xl">{article.title}</Heading>
            <Text mt={2}>{article.description}</Text>
            <Link color="teal.500" href={article.url} isExternal mt={2}>
              Read more
            </Link>
          </Box>
        </Box>
      ))}
    </Flex>
  );
};

export default NewNewsPage;
