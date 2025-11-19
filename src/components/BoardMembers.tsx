import { Card, CardContent } from "@/components/ui/card";

const BoardMembers = () => {
  const placeholderMembers = [
    { name: "Board Member Name", role: "Position Title" },
    { name: "Board Member Name", role: "Position Title" },
    { name: "Board Member Name", role: "Position Title" },
    { name: "Board Member Name", role: "Position Title" },
    { name: "Board Member Name", role: "Position Title" },
    { name: "Board Member Name", role: "Position Title" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Our Board</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dedicated leaders committed to serving our community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {placeholderMembers.map((member, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold text-center mb-1">{member.name}</h3>
                <p className="text-muted-foreground text-center text-sm">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardMembers;
