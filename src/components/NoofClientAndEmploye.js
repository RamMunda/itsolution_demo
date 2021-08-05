import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import '../css/noofclient_contributor.css';
export default function NoofClientAndEmploye() {
    return (
        <div className="NoofClientAndEmploye_wrapper">
            <div className="NoofClientAndEmploye_content">
                <h1>We Always Try To Understand Users Expectation</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="numericalform_contributor">
                <div className="downloads">
                    <h1>180K</h1>
                    <p>Downloaded</p>
                </div>
                <div className="feedbacks">
                    <h1>180K</h1>
                    <p>Feedback</p>
                </div>
                <div className="workers">
                    <h1>500K</h1>
                    <p>Workers</p>
                </div>
                <div className="contributors">
                    <h1>70K</h1>
                    <p>Contributors</p>
                </div>
            </div>
            <div className="question_and_contact">
                <div calss="any_question">
                    <h1>Have any question about us?</h1>
                    <p>Don't hesitate to contact us</p>
                </div>
                <Router>
                    <Link className="login" to="login">Contacts</Link>
                </Router>
            </div>
        </div>
    )
}
