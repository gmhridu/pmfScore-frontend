import { BlockScore } from "@/types";

export const    formatBlockScoresForChart = (blockScores: BlockScore) => {
  const labels = [
    "Problem",
    "Audience",
    "Alternatives",
    "Unique Value",
    "Solution",
    "Channels",
    "Revenue",
    "Timing",
  ];

  const data = [
    blockScores?.problem,
    blockScores?.audience,
    blockScores?.alternatives,
    blockScores?.unique_value,
    blockScores?.solution,
    blockScores?.channels,
    blockScores?.revenue,
    blockScores?.timing,
  ];

  return { labels, data };
};
