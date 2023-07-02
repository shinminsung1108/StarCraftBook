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
    "https://i.namu.wiki/i/dBfkYm0hrmUONjVBWB_v2VF5xFZBS6MC08KLdw5pLK6k2hoIPO4amyWdQ7rDHTGRWvW_voaVgsWVlnlBuyZCkw.webp",
    "https://i.namu.wiki/i/iqYTMR_kMi8jEazo1214yhv13WssGwP5JrZZ8tOVJVtcwQ-CHDoOqwagiWal0UAzGK9Qg5RHjBcok47-0Li4oQ.webp",
    "https://i.namu.wiki/i/BPo0j27WYeICHyfjTdUpcPofsjVdbDj37T9RYm-P8KdfVXXz0u84VxRjH-MmDd9A1bwZiUDdbm669aY7oDVKCw.webp"
  ]

  const raceLink = [
    "/react-10CB/protoss",
    "/terran",
    "/zerg",
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
                <Button variant="primary" href={raceLink[idx]}>바로가기</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default RaceCard;