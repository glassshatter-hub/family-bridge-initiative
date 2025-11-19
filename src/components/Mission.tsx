import flagsImage from "@/assets/flags-unity.jpg";

const Mission = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Korean Families Advocates (KFA) supports Korean immigrant families whose children are 
              involved with child-serving systems because of cultural misunderstandings of parenting 
              practices and child socialization.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We work to promote equitable treatment of families by bridging cultural gaps and 
              fostering mutual understanding between families and professionals.
            </p>
          </div>
          <div className="relative">
            <img 
              src={flagsImage} 
              alt="Korean and American flags representing cultural unity" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
