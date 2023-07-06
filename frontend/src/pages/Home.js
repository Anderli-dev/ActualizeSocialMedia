import React from "react";
import {GiPlasticDuck} from "react-icons/gi";
import {Button} from "react-bootstrap";
import {ImArrowRight} from "react-icons/im";

export function Home(){
    return(
        <div>
            <div>
                <div className="d-flex">
                    <div className="w-50 d-flex flex-column justify-content-around me-5">
                        <div>
                            <h1 style={{fontSize: "3vw"}}>Actualizer Social Media.</h1>
                            <h2>Unleash the Power of Your Social Media!</h2>
                            <p>Are you tired of feeling overwhelmed by the sheer volume of data you have to actualize on social media? Say goodbye to the chaos and embrace the true potential of your online presence with ActualizerSocialMedia!</p>
                        </div>
                        <div>
                            <Button variant="primary" size="lg" className="rounded-pill d-flex justify-content-between" style={{width: "30%", backgroundColor:"#fd7e14", borderColor:"#fd7e14"}}>
                                <p className="m-0">Get started</p>
                                <div className="align-self-center">
                                    <ImArrowRight style={{marginTop:"-4px"}} size="1.3em" color="#D500F9"/>
                                </div>
                            </Button>
                        </div>
                    </div>

                    <div className="w-50">
                        <GiPlasticDuck size="30em" color="#D500F9"/>
                    </div>
                </div>
            </div>
        </div>
    )
}