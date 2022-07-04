import React from "react";
import {Col, Container, Row, Button, Image, Card} from "react-bootstrap";
import ProfilePic from "../assets/ProfilePic.jpg";
import Resume from "../assets/File/taeyoon_resume.docx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGithub} from "@fortawesome/free-brands-svg-icons";
import {faBlog, faDownload, faTasks, faPhone, faUser, faMailBulk} from "@fortawesome/free-solid-svg-icons";
import "./font.css"



const About = () => {
    return(
        <section id="about">
            <br/>
            <br/>
            <Container className="aboutCard" style={{marginBottom:'25vh'}}>
                <div>
                    <br/>
                    <br/>
                    <div className="text-center">
                        <h1> <FontAwesomeIcon icon={faTasks} style={{marginRight:'.5rem'}}/> <u> Introduce </u> </h1>
                    </div>
                    <Row className="pt-2">
                        <Col className="justify-content-start" xl={4} lg={5} md={12} sm={12}>
                            <div style={{paddingTop:'2rem',paddingBottom:'0.5rem'}} >
                                <Image alt="portfolio" src={ProfilePic} width={250} height={250} loading="lazy" roundedCircle/>
                            </div>
                        </Col>
                        <Col className="justify-content-start" xl={8} lg={7} md={12} sm={12}>
                            <br/>
                            <Card border="light">
                                <Card.Body>
                                    <Card.Title style={{marginBottom:'3.5rem'}}>
                                    
                                        <div><FontAwesomeIcon icon={faUser} style={{marginRight:'.5rem'}}/><span style={{fontSize:'30px'}}>김태윤</span></div>
                                        <div><FontAwesomeIcon icon={faMailBulk} style={{marginRight:'.5rem'}}/><span style={{fontSize:'30px'}}>kim6095t@naver.com</span></div>
                                        <div><FontAwesomeIcon icon={faPhone} style={{marginRight:'.5rem'}}/><span style={{fontSize:'30px'}}>010-4001-6095</span></div>
                                    </Card.Title>
                                    <Card.Text className="mb-8 leading-relaxed" style={{minHeight:'150px', fontSize:'20px'}}>
                                        국립부경대학교 It융합응용공학과 졸업(18.03~22.02)
                                        <br/>
                                        CCNA, 정보처리기능사, 정보기기운용기능사, 네트워크관리사 2급 소지
                                        <br/>
                                        Unity, Arduino, React, ReactNative, Express등 풍부한 기술스택 보유
                                        <br/>
                                        네트워크 통신병, 현장실습을 통한 경험을 바탕으로 예비창업 도전(22.02~06)
                                    </Card.Text>
                                    <div>
                                        <Row>
                                            <Col xl={4} lg={4} md={4} sm={12}>
                                                <Button variant="outline-dark" className="responsiveBtn" href="https://github.com/kim6095t" style={{textAlign:'center'}}><FontAwesomeIcon icon={faGithub} style={{marginRight:'.5rem'}}/>깃허브로 이동</Button>
                                            </Col>
                                            <Col xl={4} lg={4} md={4} sm={12}>
                                                <Button variant="outline-dark" className="responsiveBtn" href="https://blog.naver.com/kim6095t" style={{textAlign:'center'}}><FontAwesomeIcon icon={faBlog} style={{marginRight:'.5rem'}}/> 블로그로 이동 </Button>
                                            </Col>
                                            <Col xl={4} lg={4} md={4} sm={12}>
                                                <Button variant="outline-dark" className="responsiveBtn" href={Resume} download="taeyoon_resume.docx">
                                                    <FontAwesomeIcon icon={faDownload} style={{marginRight:'.5rem'}}/>
                                                    이력서 다운로드
                                                </Button>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
};

export default About;