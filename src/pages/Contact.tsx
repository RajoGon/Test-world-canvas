
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="bg-white py-12">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            Have questions about our products or interested in placing a bulk order?
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-medium text-gray-900 mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="bg-sage-50 p-8 rounded-lg">
            <h2 className="text-2xl font-medium text-gray-900 mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-sage-600 mb-2">Address</h3>
                <address className="not-italic text-gray-600">
                  Ativa World Exports Ltd.<br />
                  123 Sustainable Way<br />
                  Mumbai, Maharashtra 400001<br />
                  India
                </address>
              </div>

              <div>
                <h3 className="font-medium text-sage-600 mb-2">Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:info@ativaworld.com" className="hover:text-sage-500 transition-colors">
                    info@ativaworld.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-medium text-sage-600 mb-2">Phone</h3>
                <p className="text-gray-600">
                  <a href="tel:+919876543210" className="hover:text-sage-500 transition-colors">
                    +91 9876 543 210
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-medium text-sage-600 mb-2">Business Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                  Saturday: 10:00 AM - 4:00 PM IST<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Map Placeholder</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                What is the minimum order quantity?
              </h3>
              <p className="text-gray-600">
                Minimum order quantities vary by product. Please contact us with specific 
                product inquiries and we'll provide all the details you need.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Do you ship internationally?
              </h3>
              <p className="text-gray-600">
                Yes, we ship to businesses worldwide and can work with your preferred 
                shipping method or freight forwarder.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Can products be customized?
              </h3>
              <p className="text-gray-600">
                We offer customization options for many of our products, including 
                custom sizes, colors, and branding. Contact us for details.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept bank transfers, letters of credit, and major credit cards. 
                Payment terms can be discussed based on order size and history.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
