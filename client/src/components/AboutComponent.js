import React, {Component} from 'react';
import { Card,CardBody,CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';
class About extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md m-2">
                        <Card>
                            <CardImg src="../img/mentor1.jpg" alt="John Doe" style={{height:"300px"}}/>
                            <CardBody className="text-center">
                                <CardTitle>John Doe</CardTitle>
                                <CardSubtitle>Machine Learning Expert</CardSubtitle>
                                <CardText>He has worked in this field for 10 years.<br/><em>Students Helped: 2458</em></CardText>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="col-12 col-md m-2">
                        <Card>
                            <CardImg src="/assets/mentor1.jpg" width = "100%" alt="John Doe" style={{height:"300px"}}  />
                            <CardBody className="text-center">
                                <CardTitle>Andrew John</CardTitle>
                                <CardSubtitle>UI/UX Designer</CardSubtitle>
                                <CardText>With over hundreds of prublished articles and professional websites, he is the best top voted mentor in this field.<br/><em>Students Helped: 5021</em></CardText>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="col-12 col-md m-2">
                        <Card>
                            <CardImg src="/assets/mentor1.jpg" alt="John Doe" style={{height:"300px"}} />
                            <CardBody className="text-center">
                                <CardTitle>Mathew James</CardTitle>
                                <CardSubtitle>Android Developer</CardSubtitle>
                                <CardText>From designing top rated apps to mentoring blooming young devs, he is the top voted mentor for android dev.<br/><em>Students Helped: 3069</em></CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;