import React from "react";
import {Col, Container, Row,Card} from "react-bootstrap";
import {allSkills} from "../store/store";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode, faFileCode} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
    return(
        <section id="skills">
            <Container className="col-xxl-6 col-xl-7 col-lg-8 col-md-10 mx-auto mt-5" style={{marginBottom:'25vh'}}>
                <div className="text-center">
                    <h1><FontAwesomeIcon icon={faFileCode} style={{marginRight:'.5rem'}}/><u> Skills </u></h1>
                </div>
                <div className="mt-5">
                    <Row>
                        {
                            allSkills.map((skill) => (
                                <Col key={skill.id}>
                                    <Card border="info" style={{width:'18rem',height:'40px',background:'#323232',color:'white',paddingTop:'.5rem'}}>
                                        <Card.Text style={{marginLeft:'.8rem', fontSize:'20px'}}><FontAwesomeIcon icon={faCode} style={{marginRight:'.5rem'}}/> {skill.name}</Card.Text>
                                    </Card>
                                    <br/>
                                </Col>
                            ))
                        }
                    </Row>
                </div>
            </Container>
            <br/>
        </section>
    )
}

export default Skills;