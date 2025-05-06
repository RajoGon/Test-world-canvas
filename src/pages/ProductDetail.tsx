
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ImageGallery from "../components/ImageGallery";
import { products, Product } from "../data/products";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Find the current product
    const foundProduct = products.find((p) => p.id === id);
    
    if (foundProduct) {
      setProduct(foundProduct);
      
      // Find related products (same category but not the same product)
      const related = products
        .filter((p) => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 3);
      
      setRelatedProducts(related);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-medium text-gray-900">Product not found</h2>
        <p className="text-gray-600 mt-2">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Link to="/products" className="btn-primary mt-6 inline-block">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white py-12">
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center text-sm">
            <li>
              <Link to="/" className="text-gray-500 hover:text-sage-600">Home</Link>
            </li>
            <li className="mx-2 text-gray-400">/</li>
            <li>
              <Link to="/products" className="text-gray-500 hover:text-sage-600">Products</Link>
            </li>
            <li className="mx-2 text-gray-400">/</li>
            <li className="text-sage-600 font-medium">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <ImageGallery images={product.images} alt={product.name} />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            
            <div className="flex items-center">
              <span className="text-2xl font-bold text-sage-600">
                {product.currency} {product.price.toFixed(2)}
              </span>
              {!product.inStock && (
                <span className="ml-4 rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-700">
                  Out of Stock
                </span>
              )}
            </div>

            <div className="border-t border-b border-gray-200 py-4">
              <p className="text-gray-700">{product.description}</p>
            </div>

            {/* Materials */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Materials</h3>
              <div className="flex flex-wrap gap-2">
                {product.materials.map((material, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-sage-50 px-3 py-1 text-sm font-medium text-sage-700"
                  >
                    {material}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Features</h3>
              <ul className="list-disc pl-5 space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sustainability Info */}
            <div className="bg-sage-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-700">{product.sustainabilityInfo}</p>
            </div>

            {/* Contact for bulk orders */}
            <div className="pt-4 border-t border-gray-200">
              <Link
                to="/contact"
                className="btn-primary inline-block w-full text-center"
              >
                Contact for Bulk Orders
              </Link>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="group">
                  <Link to={`/product/${relatedProduct.id}`} className="block">
                    <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 group-hover:shadow-lg">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={relatedProduct.images[0]}
                          alt={relatedProduct.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <div className="mb-2 flex items-center justify-between">
                          <h3 className="font-medium text-gray-900 group-hover:text-sage-500 transition-colors">
                            {relatedProduct.name}
                          </h3>
                          <span className="text-sage-600 font-medium">
                            {relatedProduct.currency} {relatedProduct.price.toFixed(2)}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {relatedProduct.shortDescription}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
