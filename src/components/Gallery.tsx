import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import News from "../interfaces/News";
import Heading from "./Heading";
import SingleArt from "./SingleArt";

const Gallery = () => {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch("https://api.spaceflightnewsapi.net/v3/articles");
      if (response.ok) {
        const data: News[] = await response.json();
        setNews(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Heading />
      <Row className="row-cols-3">
        {news.map((n) => (
          <Col key={n.id} className="my-3">
            <SingleArt news={n} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;