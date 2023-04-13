import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import News from "../interfaces/News";

const Home = () => {
  const [articles, setArticles] = useState<News[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await fetch("https://api.spaceflightnewsapi.net/v4/articles");
      if (response.ok) {
        const data: News[] = await response.json();
        setArticles(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-3">
      <Row>
        {loading ? (
          <Col className="text-center">
            <Spinner variant="info" animation="border" />
          </Col>
        ) : Array.isArray(articles) && articles.length > 0 ? (
          articles.map((article) => (
            <Col key={article.id} xs={12} md={6} lg={4}>
              <Link to={`/article/${article.id}`} style={{ textDecoration: "none" }}>
                <Card className="mb-4">
                  <Card.Img variant="top" src={article.imageUrl} />
                  <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Published at: {new Date(article.publishedAt).toLocaleDateString("en-US")}
                    </Card.Subtitle>
                    <Card.Text>{article.summary}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))
        ) : (
          <Col className="text-center">
            <p>No articles found</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Home;