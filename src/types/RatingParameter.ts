export type RatingParameter = {
  id: string;
  label: string;
  value: number;
};

export type RatingParameters = {
  [id: string]: RatingParameter
}