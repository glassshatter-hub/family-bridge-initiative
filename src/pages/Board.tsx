import Navigation from "@/components/Navigation";
import BoardMembers from "@/components/BoardMembers";
import Footer from "@/components/Footer";

const BoardPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <BoardMembers />
      <Footer />
    </div>
  );
};

export default BoardPage;
