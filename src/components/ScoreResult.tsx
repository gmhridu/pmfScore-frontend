import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BlockList from "./BlockList";
import { ExternalLink, Loader, RefreshCw } from "lucide-react";
import { formatBlockScoresForChart } from "@/utils/type";
import RadarChart from "./RedarChart";
import { useGetSingleScore } from "@/utils/api/useGetSingleScore";
import { useNavigate, useParams } from "react-router-dom";
import { useConfirm } from "@/hooks/useConfirm";
import { toast } from "sonner";

const ScoreResult = () => {
  const { data: scoreData, isLoading } = useGetSingleScore();
  const params = useParams();
  const { id } = params;

  const fullInviteLink = `${window.location.origin}/${id}`;

  const [ShareDialog, confirmOpen] = useConfirm(
    "Share you score",
    "Use the share link to share to your score.",
    fullInviteLink,
    () => {
      handleCopyInviteLink();
    },
    "default"
  );

  const handleCopyInviteLink = () => {
    navigator.clipboard
      .writeText(fullInviteLink)
      .then(() => toast.success("Invite link copied to clipboard!"));
  };

  const { labels, data } = formatBlockScoresForChart(
    scoreData?.data?.block_scores
  );
  const navigate = useNavigate();

  // Function to determine score color
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600 dark:text-green-400";
    if (score >= 60) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };

  const onReset = () => {
    navigate("/");
  };

  if (!scoreData?.data) return;

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader className="animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="pmf-container">
      <ShareDialog />
      <Card className="pmf-card mb-6">
        <div className="text-center mb-6">
          <div className="relative">
            <h2 className="text-2xl font-bold mb-2">Your PMF Score</h2>
            <Button
              className="absolute right-0 top-0 cursor-pointer"
              onClick={confirmOpen}
            >
              <ExternalLink />
              <span>Share</span>
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-5xl font-bold my-4 flex items-baseline">
              <span className={getScoreColor(scoreData?.data?.pmf_score)}>
                {scoreData?.data?.pmf_score}
              </span>
              <span className="text-xl text-muted-foreground">/100</span>
            </div>
          </div>
          <div className="text-sm text-muted-foreground max-w-2xl mx-auto bg-muted/50 p-4 rounded-lg">
            {scoreData?.data?.summary}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4 text-center">
            Score Breakdown
          </h3>
          <RadarChart labels={labels} data={data} />
        </div>

        <BlockList blockScores={scoreData?.data?.block_scores} />

        <div className="mt-6 text-center">
          <Button onClick={onReset} className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Start Over
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ScoreResult;
