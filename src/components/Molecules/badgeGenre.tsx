import { Badge } from "../Atoms/badge";

interface Text {
  text: string;
}

export function BadgeGenre({ text }: Text) {
  return <Badge>{text}</Badge>;
}
