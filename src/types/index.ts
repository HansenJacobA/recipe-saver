export interface NavBarLinkNameAndUrl {
  linkName: string;
  url: string;
}

export interface Rule {
  rule?: string;
  timesUsed?: number;
  timesUsedPercentage?: number;
  ruleReviewed?: boolean;
}

export interface Strategy {
  rules?: Rule[];
}

export interface Lesson {
  lesson: string;
  upVotes: number;
  downVotes: number;
  createdAt: string;
}

export interface Profile {
  strategy?: Strategy;
  strategiesUsedPercentage?: number;
  strategyReviewed?: boolean;
  numStrategyReviews?: number;
  dateLastStrategyReview?: string;
  notes?: string[];
  lessons?: Lesson[];
  topThreeLessons?: Lesson[];
}
