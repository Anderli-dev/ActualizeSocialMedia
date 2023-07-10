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
                            <h1 style={{fontSize: "3vw"}}>ActualizerSocialMedia.</h1>
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

            {/*
            ---------------------
            WARNING!!!
            Bottom Text just for fill change in future
            ---------------------
            */}
            <div className="d-flex flex-column align-items-center mt-5">
                <div className="d-flex w-50 mb-4">
                    <div style={{backgroundColor:"#EA80FC", height:"5px"}} className="flex-fill align-self-center"/>
                    <p className="fs-2 m-0 mx-3">Why us?</p>
                    <div style={{backgroundColor:"#EA80FC", height:"5px"}} className="flex-fill align-self-center"/>
                </div>

                <div className="d-flex flex-wrap">
                    <div className="col-md-6 my-3" style={{padding: "0 20px 0 20px", borderLeft: "3px solid #fd7e14"}}>
                        <p className="h4">📈 Unlock Actionable Insights</p>
                        <p>ActualizerSocialMedia is a groundbreaking platform that dives deep into your social media data to extract meaningful insights and valuable trends. Gain a comprehensive understanding of your audience, their preferences, and engagement patterns to make informed decisions and drive your online strategy forward.</p>
                    </div>
                    <div className="col-md-6 my-3" style={{padding: "0 20px 0 20px", borderLeft: "3px solid #fd7e14"}}>
                        <p className="h4">🔍 Analyze Every Aspect</p>
                        <p>From post performance to audience demographics, ActualizerSocialMedia empowers you with a holistic view of your social media presence. Uncover which content resonates the most, identify peak engagement times, and fine-tune your messaging for maximum impact. Harness the power of data to optimize your online performance!</p>
                    </div>
                    <div className="col-md-6 my-3" style={{padding: "0 20px 0 20px", borderLeft: "3px solid #fd7e14"}}>
                        <p className="h4">🚀 Stay One Step Ahead</p>
                        <p>With ActualizerSocialMedia, you can track your competitors' performance and benchmark your success against industry leaders. Identify untapped opportunities, spot emerging trends, and adapt your strategies to maintain a competitive edge. Never miss a beat in the ever-evolving social media landscape.</p>
                    </div>
                    <div className="col-md-6 my-3" style={{padding: "0 20px 0 20px", borderLeft: "3px solid #fd7e14"}}>
                        <p className="h4">🎯 Streamline Your Workflow</p>
                        <p>Spend less time juggling multiple platforms and tools. ActualizerSocialMedia integrates with major social media platforms, consolidating your data in one centralized hub. Save valuable time by managing, analyzing, and optimizing your social media presence all in one place.</p>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column align-items-center mt-5" style={{marginBottom: "100px"}}>
                <p className="h1 mb-4" >Unleash Your True Potential! 🚀</p>
                <Button size={"lg"} className="d-flex rounded-pill">
                    <p className="m-0">Start free</p>
                    <div className="align-self-center ms-3">
                        <ImArrowRight style={{marginTop:"-4px"}} size="1.3em"/>
                    </div>
                </Button>
            </div>

        </div>
    )
}