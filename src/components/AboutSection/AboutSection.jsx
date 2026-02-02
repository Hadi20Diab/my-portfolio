"use client"
import './AboutSection.scss'
import { FiPenTool, FiCode, FiSettings } from 'react-icons/fi'

export default function AboutSection() {
    return (
        <section className="aboutSection">
            <div className="aboutContainer">
                <div className="aboutHeader">
                    <div className="titleBox">
                        <h2>ABOUT ME</h2>
                    </div>
                    <p className="aboutDescription">
                        Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est.
                    </p>
                    <a href="#" className="exploreButton">
                        EXPLORE
                    </a>
                </div>

                <div className="decorativeDivider">
                    <div className="dividerLine"></div>
                    <div className="dividerPattern"></div>
                    <div className="dividerLine"></div>
                </div>

                <div className="servicesGrid">
                    <div className="serviceCard">
                        <div className="serviceIcon" aria-hidden>
                            <FiPenTool />
                        </div>
                        <h3>DESIGN</h3>
                        <p>
                            I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.
                        </p>
                    </div>
                    <div className="serviceCard">
                        <div className="serviceIcon" aria-hidden>
                            <FiCode />
                        </div>
                        <h3>DEVELOPMENT</h3>
                        <p>
                            I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.
                        </p>
                    </div>
                    <div className="serviceCard">
                        <div className="serviceIcon" aria-hidden>
                            <FiSettings />
                        </div>
                        <h3>MAINTENANCE</h3>
                        <p>
                            I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.
                        </p>
                    </div>
                </div>

                <div className="bottomDivider">
                    <div className="dividerLine"></div>
                    <div className="dividerPattern"></div>
                    <div className="dividerLine"></div>
                </div>
            </div>
        </section>
    )
}
