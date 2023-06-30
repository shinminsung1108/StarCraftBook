import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function RaceCard() {
  const raceName = ["프로토스", "테란", "저그"];
  const raceExplanation = [
    "프로토스 심시티",
    "테란 심시티",
    "저그 심시티"
  ]
  const raceImages = [
    "https://www.wolyo.co.kr/news/photo/202110/123485_82263_3829.jpg",
    "https://www.wolyo.co.kr/news/photo/202110/123485_82263_3829.jpg",
    "https://image.homeplus.kr/td/d1830283-8f60-4999-b824-8f7f24635dad"
  ]

  return (
    <Container style={{ width: "90%", marginTop: "20px"}}>
      <Row xs={1} md={3} className="g-4">
        {Array.from({ length: 3 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={raceImages[idx]} />
              <Card.Body>
                <Card.Title>{raceName[idx]}</Card.Title>
                <Card.Text>
                  {raceExplanation[idx]}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default RaceCard;