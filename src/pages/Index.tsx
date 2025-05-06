
import { Link } from "react-router-dom";
import { products } from "../data/products";

const Index = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-sage-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-sage-600 leading-tight">
                Sustainable Products <br />
                <span className="text-sage-400">for a Better World</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Ativa World connects eco-conscious businesses with premium sustainable products from India, crafted with care for people and planet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="btn-primary text-center">
                  Explore Products
                </Link>
                <Link to="/about" className="btn-outline text-center">
                  Learn About Us
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[450px] rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
                alt="Sustainable products by Ativa World"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Values</h2>
            <p className="text-gray-600">
              At Ativa World, we're committed to sustainability, ethical sourcing,
              and supporting traditional artisans while providing exceptional quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-sage-50 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-sage-500"
                >
                  <path d="M2 22a8 8 0 1 1 16 0H2z" />
                  <path d="M18 14a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1" />
                  <path d="M10 4.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Sustainable Materials</h3>
              <p className="text-gray-600">
                We carefully select renewable materials like bamboo and cork that have minimal 
                environmental impact and maximum durability.
              </p>
            </div>

            <div className="bg-sage-50 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-sage-500"
                >
                  <path d="M12 22s8-4 8-10V7l-8-5-8 5v5c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Ethical Production</h3>
              <p className="text-gray-600">
                We ensure fair wages, safe working conditions, and environmentally 
                responsible manufacturing processes across our supply chain.
              </p>
            </div>

            <div className="bg-sage-50 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-sage-500"
                >
                  <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20" />
                  <path d="M8 9h8" />
                  <path d="M8 15h8" />
                  <path d="M8 12h4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Artisan Support</h3>
              <p className="text-gray-600">
                We partner with skilled artisans throughout India, helping preserve 
                traditional crafts while creating economic opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-sage-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Featured Products</h2>
            <p className="text-gray-600">
              Discover our best-selling sustainable products, crafted with care for your business and the planet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group">
                <Link to={`/product/${product.id}`} className="block">
                  <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 group-hover:shadow-lg">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
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
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Commitment to Sustainability</h2>
              <p className="text-gray-600 mb-4">
                At Ativa World, sustainability isn't just a buzzword—it's at the core of everything we do. From sourcing renewable materials to supporting ethical production practices, we're committed to creating products that benefit both people and planet.
              </p>
              <p className="text-gray-600 mb-6">
                By choosing our products, you're supporting traditional artisans, reducing environmental impact, and bringing beautifully crafted sustainable items to your customers.
              </p>
              <Link to="/about" className="btn-outline inline-block">
                Learn More About Our Approach
              </Link>
            </div>
            <div className="order-1 md:order-2 relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843"
                alt="Sustainable manufacturing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-sage-400 py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to partner with Ativa World?</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Connect with us to bring sustainable, ethically-sourced products to your customers.
          </p>
          <Link to="/contact" className="bg-white text-sage-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors duration-300">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
