const TechnologySpecs = () => {
  const specifications = [
    {
      category: "AI Capabilities",
      items: [
        { label: "Body Length Analysis", value: "99.2% Accuracy" },
        { label: "Height at Withers", value: "98.8% Accuracy" },
        { label: "Chest Width Measurement", value: "97.5% Accuracy" },
        { label: "Rump Angle Assessment", value: "96.3% Accuracy" },
      ]
    },
    {
      category: "Performance Metrics",
      items: [
        { label: "Processing Speed", value: "< 3 seconds" },
        { label: "Image Resolution", value: "4K+ Support" },
        { label: "Classification Accuracy", value: "95%+ Average" },
        { label: "Data Reliability", value: "99.9% Uptime" },
      ]
    },
    {
      category: "Integration Features",
      items: [
        { label: "BPA Compatibility", value: "Native API" },
        { label: "Mobile Support", value: "iOS & Android" },
        { label: "Offline Mode", value: "Full Capability" },
        { label: "Data Sync", value: "Real-time" },
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Technical Specifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge technology designed for precision, reliability, and ease of use in field conditions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {specifications.map((spec, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-card border">
                <h3 className="text-2xl font-bold mb-6 text-primary">{spec.category}</h3>
                <div className="space-y-4">
                  {spec.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-center py-3 border-b border-border/50 last:border-0">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="font-semibold text-foreground">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-3xl font-bold mb-6 text-primary">Key Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong>Standardization:</strong> Eliminates observer bias and human error
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong>Efficiency:</strong> 10x faster than manual classification
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong>Scalability:</strong> Process thousands of animals per day
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong>Accuracy:</strong> Consistent 95%+ classification accuracy
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-card rounded-2xl p-8 shadow-card border">
              <h3 className="text-3xl font-bold mb-6 text-secondary">Mission Alignment</h3>
              <p className="text-muted-foreground mb-6">
                Gopalan AI directly supports the Rashtriya Gokul Mission objectives by providing:
              </p>
              <div className="space-y-3">
                <div className="bg-background/50 rounded-lg p-4">
                  <strong className="text-foreground">Enhanced Breeding Programs:</strong>
                  <span className="text-muted-foreground ml-2">
                    Accurate identification of elite breeding stock
                  </span>
                </div>
                <div className="bg-background/50 rounded-lg p-4">
                  <strong className="text-foreground">Scientific Validation:</strong>
                  <span className="text-muted-foreground ml-2">
                    Reliable data for genetic improvement initiatives
                  </span>
                </div>
                <div className="bg-background/50 rounded-lg p-4">
                  <strong className="text-foreground">National Impact:</strong>
                  <span className="text-muted-foreground ml-2">
                    Scalable solution for nationwide implementation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySpecs;