import { Users, Heart, Leaf, Shield } from "lucide-react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-rose-500" />,
      title: "Quality First",
      description:
        "We believe in creating pieces that last, using only the finest materials and craftsmanship.",
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      title: "Sustainable Fashion",
      description:
        "Committed to eco-friendly practices and sustainable sourcing of materials.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Community Driven",
      description:
        "Building a community of fashion enthusiasts who care about style and sustainability.",
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: "Trust & Transparency",
      description:
        "Open about our processes, pricing, and impact on the environment.",
    },
  ];

  const team = [
    {
      name: "OUTFIT-AURA",
      position: "Founder & CEO",
      image: assets.men,
    },
    {
      name: "OUTFIT-AURA",
      position: "Creative Director",
      image: assets.men,
    },
    {
      name: "OUTFIT-AURA",
      position: "Head of Design",
      image: assets.women,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="text-center mb-16">
        <Title text1="ABOUT" text2="US" />
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          We{`'`}re revolutionizing fashion by creating timeless pieces that
          combine style, comfort, and sustainability. Our mission is to make
          conscious fashion accessible to everyone.
        </p>
      </div>

      {/* Brand Story Section */}
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
        <div className="lg:w-1/2">
          <img
            src={assets.aboutstory}
            alt="Our Story"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
          <p className="text-gray-600 leading-relaxed">
            Founded in 2024, our brand began with a simple idea: fashion shouldn
            {`'`}t compromise our planet{`'`}s future. What started as a small
            collection of sustainable basics has grown into a comprehensive line
            of contemporary clothing, all while maintaining our commitment to
            ethical production and environmental responsibility.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Today, we{`'`}re proud to serve customers worldwide who share our
            vision of conscious consumption and timeless style. Every piece we
            create is a testament to our dedication to quality, sustainability,
            and innovative design.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
