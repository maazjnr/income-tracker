import { Container, Row, Col } from "react-bootstrap"

const Header = ({totalIncome}) => {

    return(
        <Container>
            <Row>
                <Col>
                <header>
                <h1>Income Tracker</h1>
                <div className="total-income">£{totalIncome}</div>
                </header>
                </Col>
            </Row>
        </Container>
    )
}

export default Header