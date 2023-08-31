import { Badge } from "../Atoms/badge";

interface Text {
  text: string;
  className: string;
}

export function BadgeGenre({ text, className }: Text) {
  return <Badge className={className}>{text}</Badge>;
}
