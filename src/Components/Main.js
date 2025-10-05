import React from "react";
import { useState , useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router";

function Main(){
     const [data , setdata] = useState([])
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then((responce)=>{setdata(responce.data)})
    .catch((error)=>{setdata(error)})
     } )
    return(
      <Row>
     {
      data.map((item)=>{
        return <> 
        <Link to='/cart'>Cart</Link>
        <Col xs={12} sm={6} md={4} className = 'mb-3'>
        <Card style={{ width: '200px' }}>
      <Card.Img style={{width: "200px", height: "200px"}} variant="top" src={item.image}/>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
Category : {item.category}
        </Card.Text>
        <Link to={`/detail/${item.id}`}>Detail</Link>
    </Card.Body>
    </Card>
       </Col>
        </>

      })
    }
    </Row>
     );
}



export default Main;