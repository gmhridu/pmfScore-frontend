import { PMFFormData, ScoreResponse } from "@/types";
import { useGenerateScore } from "@/utils/api/useGenerateScore";
import PMForm from "@/components/PMForm";
import { Toaster } from "sonner";
import ThemeToggle from "@/components/ThemeToggle";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const { mutate, isPending } = useGenerateScore<PMFFormData, ScoreResponse>();
  const navigate = useNavigate();

  const handleSubmit = async (formData: PMFFormData) => {
    try {
      mutate(formData, {
        onSuccess: (data) => {
          navigate(`/${data?.data._id}`);
        },
        onError: (error) => {
          console.error("Error scoring PMF:", error);
        },
      });
    } catch (error) {
      console.error("Error scoring PMF:", error);
    }
  };

  return (
    <main className="min-h-screen pb-12">
      <header className="border-b">
        <div className="pmf-container flex justify-between items-center py-4">
          <h1 className="text-xl font-bold text-primary">PMF Score Compass</h1>
          <ThemeToggle />
        </div>
      </header>

      <div className="pmf-container mt-8">
        <PMForm onSubmit={handleSubmit} isLoading={isPending} />
      </div>

      <Toaster position="top-center" />
    </main>
  );
};

export default Home;
