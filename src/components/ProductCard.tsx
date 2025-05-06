
import { Link } from "react-router-dom";
import { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 group-hover:shadow-lg">
          <div className="relative h-64 overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {!product.inStock && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-800">
                  Out of Stock
                </span>
              </div>
            )}
          </div>
          <div className="p-5">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-medium text-gray-900 group-hover:text-sage-500 transition-colors">
                {product.name}
              </h3>
              <span className="text-sage-600 font-medium">
                {product.currency} {product.price.toFixed(2)}
              </span>
            </div>
            <p className="text-sm text-gray-600 line-clamp-2">{product.shortDescription}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.materials.map((material, index) => (
                <span
                  key={index}
                  className="rounded-full bg-sage-50 px-2 py-1 text-xs font-medium text-sage-700"
                >
                  {material}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
