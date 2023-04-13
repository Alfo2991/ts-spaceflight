import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import News from "../interfaces/News";

interface SingleArtProps {
  news: News;
}

const SingleArt = ({ news }: SingleArtProps) => {
  const navigate = useNavigate();

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={news.imageUrl} />
      <Card.Body>
        <Card.Title>{news.title}</Card.Title>
        <Card.Text>{news.summary}</Card.Text>
        <Card.Text>{new Date(news.publishedAt).toLocaleTimeString("en-US")}</Card.Text>
        <Button variant="primary" onClick={() => navigate("/article/" + news.id)}>
          Read article
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SingleArt;