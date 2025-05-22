
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, Filter, Tag } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { products } from "../data/products";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState<string | null>(categoryFilter);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "yoga", name: "Yoga Products" },
    { id: "decor", name: "Home Decor" },
    { id: "furniture", name: "Furniture" },
    { id: "accessories", name: "Accessories" },
  ];

  const allTags = Array.from(
    new Set(products.flatMap((product) => product.materials))
  ).sort();

  useEffect(() => {
    let filtered = products;

    // Apply category filter
    if (categoryFilter && categoryFilter !== "all") {
      filtered = filtered.filter(product => product.category === categoryFilter);
    }

    // Apply search query filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        product =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.materials.some(material => material.toLowerCase().includes(query))
      );
    }

    setFilteredProducts(filtered);
  }, [categoryFilter, searchQuery]);

  useEffect(() => {
    if (categoryFilter && categoryFilter !== "all") {
      setActiveCategory(categoryFilter);
    } else {
      setActiveCategory("all");
    }
  }, [categoryFilter]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    
    if (category === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const handleTagClick = (tag: string) => {
    setSearchQuery(tag);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="bg-white py-12">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-lg text-gray-600">
            Discover our range of sustainable products, crafted with care for your business and the planet.
          </p>
        </div>

        {/* Search and Tags Section */}
        <div className="mb-8">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search products by name, description, or material..."
              className="pl-10"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <Tag className="h-4 w-4 mr-2 text-sage-600" />
              <h3 className="text-sm font-medium text-gray-700">Product Materials:</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className={`cursor-pointer transition-colors hover:bg-sage-100 ${
                    searchQuery.toLowerCase() === tag.toLowerCase() ? 'bg-sage-100 border-sage-500' : ''
                  }`}
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          {searchQuery && (
            <div className="flex items-center mb-6">
              <span className="text-sm text-gray-600 mr-2">Filtering by:</span>
              <Badge className="bg-sage-400">
                {searchQuery}
                <button 
                  className="ml-2 hover:text-sage-100" 
                  onClick={() => setSearchQuery("")}
                >
                  ×
                </button>
              </Badge>
            </div>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-sage-400 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl text-gray-700">No products found.</h3>
            <p className="text-gray-500 mt-2">Try a different search or category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
