import React,{useState} from "react";
import {Container, Card, Row, Col, CardImg} from "react-bootstrap";
import {allProjects} from "../store/store";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTasks} from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
    const [isShown, setIsShown] = useState({active:false,id:""});
    const changeBackground = (id) => {
        setIsShown({active: true,id:id});

    }
    const initialBackground = (id) => {
        setIsShown({active: false,id:id});
    }
    return(
        <section id="projects" className="mt-5">
            <Container>
                <div className="text-center">
                    <h1> <FontAwesomeIcon icon={faTasks} style={{marginRight:'.5rem'}}/> <u> Projects </u> </h1>
                </div>
                <div className="col-xl-10 col-lg-12 col-md-6 mx-auto pt-5">
                    <Row>
                        {
                            allProjects.map((project) => (
                                <Col key={project.id} >
                                    <div style={{height:"220px",width:"420px"}}>
                                        <div key={project.image} onMouseOver={() =>changeBackground(project.id)} onMouseLeave={() => initialBackground(project.id)}>
                                            {isShown.active && isShown.id === project.id ?
                                                (<Card border="primary" style={{background:"#323232",height:"220px",width:'420px',textAlign:'center',color:"white"}}>
                                                    <Card.Title style={{marginTop:'1rem'}}> {project.title} </Card.Title>
                                                    <Card.Body>{project.description}</Card.Body>
                                                    <Card.Footer> <Card.Link href={project.link}> Project Link </Card.Link> </Card.Footer>
                                                    <Card.Text> {project.subtitle} </Card.Text>
                                                </Card>) :
                                                (<Card border="primary">
                                                    <CardImg src={project.image} style={{height:"220px",width:"420px"}} alt="projectImg"/>
                                                </Card>)}
                                        </div>
                                    </div>
                                    <br/>
                                </Col>
                            ))
                        }
                    </Row>
                </div>
                <br/>
            </Container>
            <br/>
        </section>
    )
}

export default Projects;