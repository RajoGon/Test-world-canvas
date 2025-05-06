
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState<string | null>(categoryFilter);

  const categories = [
    { id: "all", name: "All Products" },
    { id: "yoga", name: "Yoga Products" },
    { id: "decor", name: "Home Decor" },
    { id: "furniture", name: "Furniture" },
    { id: "accessories", name: "Accessories" },
  ];

  useEffect(() => {
    if (categoryFilter && categoryFilter !== "all") {
      setActiveCategory(categoryFilter);
      setFilteredProducts(products.filter(product => product.category === categoryFilter));
    } else {
      setActiveCategory("all");
      setFilteredProducts(products);
    }
  }, [categoryFilter]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
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
            <h3 className="text-xl text-gray-700">No products found in this category.</h3>
            <p className="text-gray-500 mt-2">Please try a different category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
