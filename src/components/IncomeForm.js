import React, {useRef} from 'react';
import { Container, Row, Col } from 'react-bootstrap'


function IncomeForm({income, setIncome}) {

    const desc = useRef('');
    const date = useRef(null);
    const price = useRef('')

    const AddIncome = e => {
        e.preventDefault();
        
        let d = date.current.value.split("-");
        let newD = new Date(d[0], d[1], d[2]);

        setIncome([...income, {
            "desc": desc.current.value,
            "price": price.current.value,
            "date": newD.getTime()
        }]);

        desc.current.value ="";
        price.current.value = "";
        date.current.value = null;
    }


  return (
   <Container>
       <Row>

           <form className='income-form' onSubmit={AddIncome}>
                <div className='form-inner'>
                <Col lg={12} md={8} sm={12} xs={12}>
                <input className='myinput' type="text" name="desc" id="desc"
                placeholder='Income Description...' 
                ref={desc}
                />

                <input className='myinput' type="number" name="price" id="price"
                placeholder='Price...'
                ref={price}
                 />

                <input className='myinput' type="date" name="date" id="date"
                placeholder='Income Date...'
                ref={date}
                 />

                <input className='myinput' type="submit" name="date" value="Add Income"/>
                </Col>

                </div>
           </form>
           

       </Row>
   </Container>
  )
}

export default IncomeForm