import { Card, CardBody, CardFooter, CardHeader } from "../app/components/ui/Card";
import { Button } from "../app/components/ui/Button";
import { Badge } from "../app/components/ui/Badge";

type Props = {
  title: string;
  description: string;
  onOpen: () => void;
};

export function LessonCard({ title, description, onOpen }: Props) {
  return (
    <Card>
      <CardHeader>
        <h2 className="font-display text-xl tracking-tight text-text">{title}</h2>
        <Badge variant="accent">New</Badge>
      </CardHeader>
      <CardBody>
        <p className="text-sm text-text-muted">{description}</p>
      </CardBody>
      <CardFooter>
        <Button size="sm" variant="secondary" onClick={onOpen}>
          Open lesson
        </Button>
      </CardFooter>
    </Card>
  );
}