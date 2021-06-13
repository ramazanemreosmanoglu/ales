import HeadSection from "../components/HeadSection"; // Header
import NavbarAles from "../components/NavbarAles";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <HeadSection title="ALES Test"/>
      <NavbarAles/>

      <main className="center">
        <Container>
          <h1>Soru cozmeye baslamak icin bolum secin:</h1>

          <Row>
            <Col>
              <Link href="/sozel">
                <div className="bolum">
                  Sozel
                </div>
              </Link>
            </Col>

            <Col>
              <Link href="/sayisal">
                <div className="bolum" onClick={() => console.log("hello")}>
                  Sayisal
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  )
}
