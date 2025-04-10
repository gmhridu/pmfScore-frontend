export interface PMFFormData {
  problem: string;
  audience: string;
  alternatives: string;
  unique_value: string;
  solution: string;
  channels: string;
  revenue: string;
  timing: string;
}

export interface BlockScore {
  problem: number;
  audience: number;
  alternatives: number;
  unique_value: number;
  solution: number;
  channels: number;
  revenue: number;
  timing: number;
}

export interface ScoreResponse {
  data: {
    _id: string;
    pmf_score: number;
    summary: string;
    block_scores: BlockScore;
  };
}
