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
