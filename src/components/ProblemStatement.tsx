const ProblemStatement = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-foreground">
              The Challenge We're Solving
            </h2>
            <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
              Traditional Animal Type Classification faces significant accuracy and consistency challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-playfair text-2xl font-bold mb-4 text-destructive">Current Issues</h3>
                <ul className="space-y-4 font-inter text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>Human error and subjectivity in manual scoring</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>Inconsistent data quality despite trained personnel</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>Observer bias affecting scientific analysis</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>Fatigue-related measurement inaccuracies</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-card rounded-2xl p-8 shadow-card border hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-playfair text-2xl font-bold mb-4 text-primary">Mission Impact</h3>
                <p className="font-inter text-muted-foreground">
                  The Rashtriya Gokul Mission's success in conserving indigenous bovine breeds 
                  and enhancing milk productivity depends on accurate Animal Type Classification 
                  for identifying elite breeding stock.
                </p>
              </div>
            </div>
            
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20 animate-slide-in-right hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="font-playfair text-3xl font-bold mb-6 text-primary">By the Numbers</h3>
              <div className="space-y-6 font-inter">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Manual Classification Accuracy</span>
                  <span className="text-2xl font-bold text-destructive">~75%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Observer Bias Impact</span>
                  <span className="text-2xl font-bold text-destructive">±15%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Target AI Accuracy</span>
                  <span className="text-2xl font-bold text-primary">95%+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Standardization</span>
                  <span className="text-2xl font-bold text-primary">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;