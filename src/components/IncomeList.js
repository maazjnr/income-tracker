import { Container, Row, Col } from "react-bootstrap";
import IncomeItem from "./IncomeItem";

const IncomeList = ({income, setIncome}) => {

    const removeIncome = (i) => {
        let temp = income.filter((v, index) => index != i);
        setIncome(temp);
    }

    const sortByDate = (a, b) => {
        return a.date - b.date;
    }

    return(
        <Container className="income-list">
            <Row>
                <Col>
                    {
                        income.sort(sortByDate).map((value, index) => (
                            <IncomeItem key={index} 
                            income={value} 
                            index={index} 
                            removeIncome={removeIncome}
                            />
                        ))
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default IncomeList