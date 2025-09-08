import type { Route } from "../+types/home";
import { ImageModal } from "~/components/ImageModal";

// Import your images (replace with actual paths)
import actionDesktop1 from "../../assets/images/action1desk.png";
import actionMobile1 from "../../assets/images/action1mob.png";
import actionDesktop2 from "../../assets/images/action2desk.png";
import actionMobile2 from "../../assets/images/action2mob.png";
import actionDesktop3 from "../../assets/images/action3desk.png";
import actionMobile3 from "../../assets/images/action3mob.png";
import actionDesktop4 from "../../assets/images/action4desk.png";
import actionMobile4 from "../../assets/images/action4mob.png";
import actionDesktop5 from "../../assets/images/action5desk.png";
import actionMobile5 from "../../assets/images/action5mob.png";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Incident Reporting Action Process" },
        { name: "description", content: "Step-by-step guide for the Incident Reporting Action process in Suraksha 2.0." },
    ];
}

export default function IncidentReportingAction() {
    return (
        <>
            <section className="reporting-action-guide">
                <h2>Incident Reporting Action Process</h2>
                <p>
                    This guide explains the workflow and actions available at each stage of the incident reporting process,
                    from initial submission through supervisor review to safety officer resolution.
                </p>

                {/* Initial Submission */}
                <div className="step">
                    <h3>1. Employee Submits Incident Report</h3>
                    <p>
                        The employee completes the incident report form with all required details and images,
                        then submits the report. The report is automatically routed to their direct supervisor.
                    </p>
                    <div className="note">
                        <p><strong>Note:</strong> Once submitted, the employee can track the report status but cannot edit it further unless it's returned for reconsideration.</p>
                    </div>
                </div>

                {/* Supervisor Review */}
                <div className="step">
                    <h3>2. Supervisor Receives Report</h3>
                    <p>
                        The supervisor sees the incident report in their "Pending Actions" dashboard with two options:
                    </p>
                    <ul>
                        <li>✅ <strong>Accept:</strong> Proceed with the report for further processing</li>
                        <li>↩️ <strong>Reconsider:</strong> Return the report to the employee for additional information or corrections</li>
                    </ul>
                    <div className="image-row">
                        <div className="image-container desktop">
                            <ImageModal thumbnail={actionDesktop1} alt="Supervisor Review Options - Desktop" />
                            <p className="image-caption"><em>Figure 1.1: Supervisor Review Options - Desktop</em></p>
                        </div>
                        <div className="image-container mobile">
                            <ImageModal thumbnail={actionMobile1} alt="Supervisor Review Options - Mobile" />
                            <p className="image-caption"><em>Figure 1.2: Supervisor Review Options - Mobile</em></p>
                        </div>
                    </div>
                </div>

                {/* Reconsider Path */}
                <div className="step">
                    <h3>2a. Supervisor Selects "Reconsider"</h3>
                    <p>
                        If the supervisor chooses "Reconsider," the report is returned to the original employee
                        who submitted it. The report appears in the employee's "Drafts" section where they can
                        edit and resubmit it.
                    </p>
                    <div className="warning">
                        <p><strong>Note:</strong> The supervisor must provide comments explaining why the report is being returned.</p>
                    </div>
                </div>

                {/* Accept Path - Low Risk */}
                <div className="step">
                    <h3>2b. Supervisor Selects "Accept" - Low Risk (Below 9)</h3>
                    <p>
                        For incidents with a risk index below 9, the supervisor must complete:
                    </p>
                    <ol>
                        <li>Treatment information</li>
                        <li>Root cause analysis</li>
                    </ol>
                    <p>After completing these sections, the supervisor submits the report to the safety officer.</p>
                    <div className="image-row">
                        <div className="image-container desktop">
                            <ImageModal thumbnail={actionDesktop2} alt="Low Risk Treatment Form - Desktop" />
                            <p className="image-caption"><em>Figure 2.1: Low Risk Treatment Form - Desktop</em></p>
                        </div>
                        <div className="image-container mobile">
                            <ImageModal thumbnail={actionMobile2} alt="Low Risk Treatment Form - Mobile" />
                            <p className="image-caption"><em>Figure 2.2: Low Risk Treatment Form - Mobile</em></p>
                        </div>
                    </div>
                </div>

                {/* Accept Path - Medium/High Risk */}
                <div className="step">
                    <h3>2c. Supervisor Selects "Accept" - Medium/High Risk (9 or Above)</h3>
                    <p>
                        For incidents with a risk index of 9 or above, the supervisor must:
                    </p>
                    <ol>
                        <li>Create at least one CAPA (Corrective Action Preventive Action) form</li>
                        <li>Assign at least one task to another supervisor (can assign multiple tasks)</li>
                        <li>Complete treatment information</li>
                        <li>Complete root cause analysis</li>
                    </ol>
                    <div className="warning">
                        <p><strong>Requirement:</strong> Minimum of one CAPA and one assigned task is mandatory before submission.</p>
                    </div>
                    <div className="image-row">
                        <div className="image-container desktop">
                            <ImageModal thumbnail={actionDesktop3} alt="CAPA Form - Desktop" />
                            <p className="image-caption"><em>Figure 3.1: CAPA Form - Desktop</em></p>
                        </div>
                        <div className="image-container mobile">
                            <ImageModal thumbnail={actionMobile3} alt="CAPA Form - Mobile" />
                            <p className="image-caption"><em>Figure 3.2: CAPA Form - Mobile</em></p>
                        </div>
                    </div>
                </div>

                {/* Safety Officer Review */}
                <div className="step">
                    <h3>3. Safety Officer Receives Report</h3>
                    <p>
                        After supervisor submission, the report appears in the assigned safety officer's "To Do" list
                        with three options:
                    </p>
                    <ul>
                        <li>✅ <strong>Accept:</strong> Proceed with closing the incident</li>
                        <li>❌ <strong>Reject:</strong> Close the incident without further action</li>
                        <li>↩️ <strong>Reconsider:</strong> Return the report to the original employee</li>
                        <li>🔀 <strong>Reassign:</strong> Assign the report to another safety officer</li>
                    </ul>
                    <div className="image-row">
                        <div className="image-container desktop">
                            <ImageModal thumbnail={actionDesktop4} alt="Safety Officer Options - Desktop" />
                            <p className="image-caption"><em>Figure 4.1: Safety Officer Options - Desktop</em></p>
                        </div>
                        <div className="image-container mobile">
                            <ImageModal thumbnail={actionMobile4} alt="Safety Officer Options - Mobile" />
                            <p className="image-caption"><em>Figure 4.2: Safety Officer Options - Mobile</em></p>
                        </div>
                    </div>
                </div>

                {/* Safety Officer Actions */}
                <div className="step">
                    <h3>4. Safety Officer Action Paths</h3>
                    
                    <div className="sub-step">
                        <h4>4a. Accept Option</h4>
                        <p>If the safety officer selects "Accept":</p>
                        <ol>
                            <li>They can create CAPA tasks if needed</li>
                            <li>Must complete:
                                <ul>
                                    <li>Contributing cause factors</li>
                                    <li>Considering cause factors</li>
                                    <li>Hazard identification</li>
                                    <li>Comments</li>
                                </ul>
                            </li>
                            <li>A popup appears for category classification and division selection</li>
                            <li>After confirmation, they can close the incident report</li>
                        </ol>
                    </div>

                    <div className="sub-step">
                        <h4>4b. Reject Option</h4>
                        <p>If the safety officer selects "Reject":</p>
                        <ol>
                            <li>The incident is automatically closed</li>
                            <li className="warning">All CAPA tasks must be closed before rejection is possible</li>
                        </ol>
                    </div>

                    <div className="sub-step">
                        <h4>4c. Reconsider Option</h4>
                        <p>If the safety officer selects "Reconsider":</p>
                        <ol>
                            <li>The report is returned to the original employee's draft list</li>
                            <li>The employee can edit and resubmit the report</li>
                            <li>The process restarts from the beginning</li>
                        </ol>
                    </div>

                    <div className="sub-step">
                        <h4>4d. Reassign Option</h4>
                        <p>If the safety officer selects "Reassign":</p>
                        <ol>
                            <li>A dropdown appears with all available safety officers</li>
                            <li>They can select another safety officer at the same level</li>
                            <li>The report is transferred to the selected officer's todo list</li>
                        </ol>
                    </div>

                    <div className="image-row">
                        <div className="image-container desktop">
                            <ImageModal thumbnail={actionDesktop5} alt="Safety Officer Actions - Desktop" />
                            <p className="image-caption"><em>Figure 5.1: Safety Officer Actions - Desktop</em></p>
                        </div>
                        <div className="image-container mobile">
                            <ImageModal thumbnail={actionMobile5} alt="Safety Officer Actions - Mobile" />
                            <p className="image-caption"><em>Figure 5.2: Safety Officer Actions - Mobile</em></p>
                        </div>
                    </div>
                </div>

                {/* Final Resolution */}
                <div className="step">
                    <h3>5. Incident Closure</h3>
                    <p>
                        Once all actions are completed and the safety officer accepts or rejects the report,
                        the incident is officially closed in the system. Closed incidents are archived and
                        available for reporting and analysis.
                    </p>
                    <div className="note">
                        <p><strong>Note:</strong> Only safety officers have the authority to permanently close incidents.</p>
                    </div>
                </div>
            </section>
        </>
    );
}