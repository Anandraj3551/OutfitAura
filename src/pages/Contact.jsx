import { useState } from "react";
import Title from "../components/Title";
import {
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Loader2,
} from "lucide-react";

const Contact = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("General Inquiry");

  const faqData = [
    {
      question: "What are your shipping policies?",
      answer:
        "We offer free standard shipping on all orders over $50. Standard shipping typically takes 3-5 business days. Express shipping is available for an additional fee and delivers within 1-2 business days.",
    },
    {
      question: "How do I return or exchange an item?",
      answer:
        "Returns and exchanges are accepted within 30 days of purchase. Items must be unworn with original tags attached. Simply fill out the return form in your order confirmation email or contact our customer service team.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or through the carrier's website.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Shop Pay. All transactions are secured using industry-standard encryption.",
    },
    {
      question: "How do I find the right size?",
      answer:
        "Check our detailed size guide for measurements of all our items. If you're between sizes, we recommend sizing up. Our customer service team is happy to help with specific sizing questions.",
    },
  ];

  const categories = [
    "General Inquiry",
    "Order Status",
    "Returns & Exchanges",
    "Technical Support",
    "Feedback",
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    orderNumber: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white lg:pl-16 lg:pr-16 ">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-white py-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-indigo-50 opacity-50" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <Title text1="CONTACT" text2="US" />
          <p className="text-gray-600 text-center mt-6 max-w-2xl mx-auto text-lg">
            We{`'`}re here to help! Reach out through any of our support
            channels or check our FAQ section below.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <Clock className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <h3 className="font-semibold">24/7 Support</h3>
              <p className="text-sm text-gray-500">Always here for you</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <MessageCircle className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <h3 className="font-semibold">Live Chat</h3>
              <p className="text-sm text-gray-500">Quick responses</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <Mail className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <h3 className="font-semibold">Email Support</h3>
              <p className="text-sm text-gray-500">Detailed assistance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information & FAQ */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold mb-8 flex items-center">
                <Phone className="w-6 h-6 mr-3 text-orange-500" />
                Get in Touch
              </h2>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="group flex items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-orange-200 transition-all duration-300">
                  <Mail className="w-6 h-6 text-orange-500 mr-4 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="font-medium text-gray-900">Email Us</h3>
                    <p className="text-orange-500 hover:text-orange-600 cursor-pointer">
                      support@outfitaura.com
                    </p>
                  </div>
                </div>

                <div className="group flex items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-orange-200 transition-all duration-300">
                  <Phone className="w-6 h-6 text-orange-500 mr-4 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="font-medium text-gray-900">Call Us</h3>
                    <p className="text-orange-500">0-000-000-0000</p>
                  </div>
                </div>

                <div className="group flex items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-orange-200 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-orange-500 mr-4 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="font-medium text-gray-900">Visit Us</h3>
                    <p className="text-gray-600">
                      OUTFITAURA International Pvt. Ltd., 3398, Bagichi Acchi ji
                      Bara Hindu Rao, Near Filmistan Cinema, New Delhi 110006,
                      New Delhi, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-8 flex items-center">
                <MessageCircle className="w-6 h-6 mr-3 text-orange-500" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 hover:border-orange-200 transition-all duration-300"
                  >
                    <button
                      className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                      onClick={() => toggleQuestion(index)}
                    >
                      <span className="font-medium text-gray-900">
                        {faq.question}
                      </span>
                      {openQuestion === index ? (
                        <ChevronUp className="w-5 h-5 text-orange-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-orange-500" />
                      )}
                    </button>
                    {openQuestion === index && (
                      <div className="px-6 py-4 bg-gray-50 rounded-b-xl">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-semibold mb-8 flex items-center">
              <Send className="w-6 h-6 mr-3 text-orange-500" />
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Category Selection */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    className={`p-2 text-sm rounded-lg border transition-all duration-200 ${
                      selectedCategory === category
                        ? "bg-orange-50 border-orange-200 text-orange-600"
                        : "border-gray-200 text-gray-600 hover:border-orange-200"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    placeholder="Anand Kumar"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    placeholder="outfitaura@gmail.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="orderNumber"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Order Number (Optional)
                  </label>
                  <input
                    type="text"
                    id="orderNumber"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    value={formData.orderNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, orderNumber: e.target.value })
                    }
                    placeholder="#ORDER-1234"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    placeholder="How can we help you today?"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-600 text-white py-4 px-6 rounded-lg hover:bg-orange-700 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
