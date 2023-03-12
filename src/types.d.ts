export type Nullable<T> = T | undefined | null;
export type Roles = "stud" | "admin" | "staff";

export interface ResponseListQueryResult {
  id: number;
  title: string;
  subtitle: string;
  created_at: string;
  avg_answer: number;
}
