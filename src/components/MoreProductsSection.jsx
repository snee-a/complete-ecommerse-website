import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import {
  Typography,
  Box,
  Link,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const categoriesToShow = [
  "smartphones",
  "laptops",
  "fragrances",
  "furniture",
  "womens-dresses",
];
// ...your imports remain unchanged

const MoreProductsSection = () => {
  const [categoryProducts, setCategoryProducts] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const allCategoryData = {};
        for (const category of categoriesToShow) {
          const res = await axios.get(
            `https://dummyjson.com/products/category/${category}?limit=4`
          );
          allCategoryData[category] = res.data.products;
        }
        setCategoryProducts(allCategoryData);
      } catch (err) {
        console.error("Error fetching category products:", err);
      }
    };

    fetchCategoryProducts();
  }, []);

  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchTerm(query);
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    try {
      const res = await axios.get(
        `https://dummyjson.com/products/search?q=${query}`
      );
      setSearchResults(res.data.products);
    } catch (err) {
      console.error("Error searching products:", err);
    }
  };

  return (
    <Box
      sx={{
        padding: "60px 10px",
        backgroundColor: "#000",
        overflowX: "hidden",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 4,
          textAlign: "center",
          color: "#fff",
        }}
      >
        More Products
      </Typography>

      <Box sx={{ maxWidth: "500px", mx: "auto", mb: 6 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          InputProps={{
            sx: {
              backgroundColor: "#fff",
              borderRadius: 2,
            },
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box sx={{ maxWidth: "1400px", margin: "0 auto" }}>
        {searchResults.length > 0 ? (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: 2,
            }}
          >
            {searchResults.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id} // ✅ FIXED: pass id
                image={product.thumbnail}
                title={product.title}
                description={product.description}
                small
              />
            ))}
          </Box>
        ) : (
          categoriesToShow.map((category) => (
            <Box key={category} sx={{ mb: 8 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  px: 1,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: 600,
                    color: "#fff",
                  }}
                >
                  Shop {category.replace("-", " ")}
                </Typography>
                <Link
                  href={`/category/${category}`}
                  underline="hover"
                  sx={{ fontSize: 14, fontWeight: 500, color: "#ccc" }}
                >
                  View More Products →
                </Link>
              </Box>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "repeat(1, 1fr)",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)",
                    lg: "repeat(4, 1fr)",
                  },
                  gap: 2,
                  mt: 2,
                }}
              >
                {(categoryProducts[category] || []).map((product) => (
                  <ProductCard
  key={product.id}
  id={product.id}
  image={product.thumbnail}
  title={product.title}
  description={product.description}
  price={product.price}
  small
/>

                ))}
              </Box>
            </Box>
          ))
        )}
      </Box>
    </Box>
  );
};

export default MoreProductsSection;
