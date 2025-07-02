import React from "react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "E-Ticaret Sitesi",
      category: "E-Ticaret",
      color: "from-pink-500 to-red-500",
    },
    {
      title: "Kurumsal Website",
      category: "Kurumsal",
      color: "from-blue-500 to-cyan-500",
    },
    { title: "Blog Platformu", category: "Blog", color: "from-green-500 to-teal-500" },
    {
      title: "Portföy Sitesi",
      category: "Portföy",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Portföyümüz</h2>
          <p className="text-xl text-gray-600">Son projelerimizden örnekler</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div
                className={`bg-gradient-to-br ${project.color} rounded-2xl p-8 h-64 flex items-end transform group-hover:scale-105 transition-all duration-300`}
              >
                <div className="text-white">
                  <span className="text-sm opacity-75">{project.category}</span>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
