// Types for all variables

// Type for children component
export interface ChildrenProps {
  children: React.ReactNode;
}

// Type of InputProps extended from React.InputHTMLAttributes
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

// Types for headerTitle Props
export type headerTitleProps = {
  headertitle: string;
  description: string;
};

// Types for button component
export type buttonVariantsTypes = {
  variant: {
    default: string;
    outline: string;
    secondary: string;
  };
  size: {
    default: string;
    sm: string;
    lg: string;
  };
};

// Type for query of API
export type queryType = {
  query: any;
};

// Types for searceSlice
export interface searchType {
  status: string;
  loading: boolean;
  data: never[];
  error: string | null | undefined;
}

// autocomplate types
export type resultsFetching = {
  results: Array<{
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }>;
  value: string;
};
