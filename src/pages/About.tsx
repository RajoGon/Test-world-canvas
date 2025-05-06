
import { Link } from "react-router-dom";
import TeamMemberCard from "../components/TeamMember";
import { teamMembers } from "../data/team";

const About = () => {
  return (
    <div className="bg-white py-12">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Ativa World</h1>
          <p className="text-lg text-gray-600">
            Connecting global businesses with sustainable products from India,
            crafted with care for people and planet.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Ativa World was founded in 2018 with a vision to bridge the gap between 
              India's skilled artisans and sustainable manufacturers and the global market. 
              Our founder, Rajiv Sharma, saw an opportunity to showcase India's rich craft 
              traditions and sustainable manufacturing capabilities to the world while 
              creating economic opportunities for local communities.
            </p>
            <p className="text-gray-600 mb-4">
              Starting with a small collection of handcrafted home goods, we've grown to 
              offer a diverse range of sustainable products across multiple categories. 
              Throughout our growth, we've remained committed to our core values of 
              sustainability, quality, and ethical business practices.
            </p>
            <p className="text-gray-600">
              Today, we're proud to partner with businesses across the globe who share 
              our vision for a more sustainable future, providing them with beautiful, 
              eco-friendly products their customers will love.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
              alt="Ativa World team working with artisans"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-sage-50 p-8 rounded-lg mb-20">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
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
                  <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c-4.97 0-9-4.03-9-9m9 9a9 9 0 0 0 9-9m-9 0a9 9 0 0 0-9 9m0 0a9 9 0 0 1 9-9" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to minimizing environmental impact through sustainable 
                materials, responsible production, and eco-friendly packaging.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
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
                  <path d="M14.5 2v17M2 17l12.5 5V2L2 7Z"/>
                  <path d="M22 7v10"/>
                  <path d="M22 12H14"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality, ensuring each product meets the highest 
                standards of craftsmanship, durability, and design.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
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
                  <path d="M17 6.1H3"/>
                  <path d="M21 12.1H3"/>
                  <path d="M15.1 18H3"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Transparency</h3>
              <p className="text-gray-600">
                We believe in honest, open communication with our partners and customers 
                about our materials, production methods, and business practices.
              </p>
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-sage-400 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Partner With Us</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Ready to bring sustainable, ethically-sourced products to your customers?
          </p>
          <Link to="/contact" className="bg-white text-sage-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors duration-300">
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
