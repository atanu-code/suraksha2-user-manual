import type { Route } from "../+types/home";

import observationDesktop from "../../assets/images/obs1.jpg";
import observationMobile from "../../assets/images/obs1mob.png";
import observationDesktop1 from "../../assets/images/unsafedesk.png";
import observationMobile2 from "../../assets/images/unsafemob.png";
import observationDesktop3 from "../../assets/images/prevsubdesk.png";
import observationMobile3 from "../../assets/images/prevsubmob.png";
import { ImageModal } from "~/components/ImageModal";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Observation Reporting" },
        { name: "description", content: "Step-by-step guide for reporting an Observation in Suraksha 2.0." },
    ];
}

export default function ObservationReporting() {
    return (
        <>
            <section className="reporting-guide">
                <h2>Observation Reporting</h2>
                <p>
                    Observations are an important part of proactive safety reporting. 
                    This allows employees to capture unsafe acts, unsafe conditions, or positive observations in real time.
                </p>

                {/* Acknowledge Section */}
                <div className="acknowledge">
                    <h3>Acknowledgement</h3>
                    <p>
                        Whenever an employee reports an observation, the acknowledgement step is shown first. 
                        The reporter must confirm that the observation is submitted in good faith and the details are accurate.
                    </p>
                    <div className="acknowledge-box">
                        <p><strong>Observation Acknowledgement</strong></p>
                        <p>
                            By clicking <em>“Start Observation”</em>, you confirm the info is accurate and in good faith. 
                            Observations support safety and improvement. Identity may be shared for follow-up. 
                            False reports or misuse may lead to action. No retaliation for honest reporting.
                        </p>
                        <div className="code-block">
                        Note: Images provided must be real, and the reporting location must match the acknowledged location.
                    </div>
                     <div className="note">
                    <p> This legal agreement ensures all reports are submitted responsibly and helps maintain the integrity of our safety reporting system.</p>
                </div></div>
                </div>
                 <div className="image-row">
                            <div className="image-container desktop">
                                <div className="image-wrapper">
                                    <ImageModal thumbnail={observationDesktop} alt="Figure 11: Observation Preview - Desktop" />
                                </div>
                                <p className="image-caption"><em>Figure 1.1: Observation acknowledgement - Desktop</em></p>
                            </div>
                            <div className="image-container mobile">
                                <div className="image-wrapper">
                                    <ImageModal thumbnail={observationMobile} alt="Figure 12: Observation Preview - Mobile" />
                                </div>
                                <p className="image-caption"><em>Figure 1.2: Observation acknowledgement - Mobile</em></p>
                            </div>
                        </div>

                <div className="reporting-steps">
                    {/* Step 1 */}
                    <div className="step">
                        <h3>1. Observer Details</h3>
                        <p>
                            Choose whether you are reporting for <strong>Self</strong> or <strong>Others</strong>.
                        </p>
                        <ul>
                            <li>✔️ <strong>Self:</strong> Used when reporting from your own unit. <em>Context: Ensures personal accountability for observations.</em></li>
                            <li>✔️ <strong>Others:</strong> Select another employee's name from the dropdown list. <em>Context: Allows reporting on behalf of colleagues when appropriate.</em></li>
                        </ul>
                    </div>

                    {/* Step 2 */}
                    <div className="step">
                        <h3>2. Observation & Risk Details</h3>
                        <p>Select the type of observation and provide necessary details:</p>
                        <ul>
                            <li>✔️ Unsafe Act - <em>Context: Actions that violate established safety procedures.</em></li>
                            <li>✔️ Unsafe Condition - <em>Context: Physical or environmental hazards that could cause harm.</em></li>
                            <li>✔️ Safe Behavior and Practice - <em>Context: Positive safety actions worth recognizing.</em></li>
                        </ul>

                        {/* Probability Section */}
                        <div className="probability-section">
                            <div className="note">
                            <h4>Probability Levels</h4>
                            <p>When reporting unsafe acts or conditions, you must assess the probability of occurrence:</p>
                            <ul>
                                <li><strong>Rare</strong> - May occur only in exceptional circumstances. <em>Context: Unlikely to happen under normal conditions.</em></li>
                                <li><strong>Unlikely</strong> - Could occur at some time. <em>Context: Possible but not expected in the near term.</em></li>
                                <li><strong>Possible</strong> - Might occur occasionally. <em>Context: Has happened before and could happen again.</em></li>
                                <li><strong>Likely</strong> - Will probably occur in most circumstances. <em>Context: Expected to happen without intervention.</em></li>
                                <li><strong>Almost Certain</strong> - Expected to occur in most circumstances. <em>Context: Immediate risk that needs urgent attention.</em></li>
                            </ul>
                        </div></div>

                        {/* Severity Section */}
                        <div className="severity-section">
                            <div className="note">
                            <h4>Severity Levels</h4>
                            <p>When reporting unsafe acts or conditions, you must assess the potential severity of consequences:</p>
                            <ul>
                                <li><strong>Minimal</strong> - No injuries, low financial loss. <em>Context: Minor incident with negligible impact.</em></li>
                                <li><strong>Minor</strong> - First aid treatment, medium financial loss. <em>Context: Requires basic medical attention but no lost time.</em></li>
                                <li><strong>Moderate</strong> - Medical treatment injury with lost time. <em>Context: Results in absence from work and professional medical care.</em></li>
                                <li><strong>Major</strong> - Extensive injuries, major financial loss. <em>Context: Serious harm with significant recovery time and costs.</em></li>
                                <li><strong>Catastrophic</strong> - Death, extremely high financial loss. <em>Context: Worst-case scenario with fatal or life-altering consequences.</em></li>
                            </ul>
                        </div></div>

                        <div className="warning">
                            <h4>Important Notes:</h4>
                            <ul>
                                <li>
                                    If you select <strong>Unsafe Act</strong> or <strong>Unsafe Condition</strong> → you must select 
                                    <strong> Probability</strong> and <strong>Severity</strong>, then provide description, date, time, and upload images.
                                    <p><em>Context: Probability assesses how likely the incident is to occur, while Severity evaluates potential harm consequences.</em></p>
                                </li>
                                <li>
                                    If you select <strong>Safe Behavior and Practice</strong> → you only provide description, date, time, and upload images 
                                    (no probability and severity required).
                                    <p><em>Context: Positive observations focus on recognition rather than risk assessment.</em></p>
                                </li>
                            </ul>
                            </div>
                            <div className="code-block">
                            ⚠️ At least one image is mandatory (maximum of 3). The observation date must be within the past 60 days (future dates not allowed).
                             Images provide visual evidence, and the 60-day limit ensures timely reporting of observations.
                        </div>
                    </div>
                    <div className="image-row">
                            <div className="image-container desktop">
                                <div className="image-wrapper">
                                    <ImageModal thumbnail={observationDesktop1} alt="Figure 11: Observation Preview - Desktop" />
                                </div>
                                <p className="image-caption"><em>Figure 1.1: Observation acknowledgement - Desktop</em></p>
                            </div>
                            <div className="image-container mobile">
                                <div className="image-wrapper">
                                    <ImageModal thumbnail={observationMobile2} alt="Figure 12: Observation Preview - Mobile" />
                                </div>
                                <p className="image-caption"><em>Figure 1.2: Observation acknowledgement - Mobile</em></p>
                            </div>
                        </div>

                    {/* Step 3 */}
                    <div className="step">
                        
                        <h3>3. Location Info</h3>
                        <p>
                            This section is auto-filled based on the acknowledged location from Step 0. 
                            It displays detailed information such as unit, facility, zone, region, company, and address.
                        </p>
                        <div className="warning">
                        <p> Accurate location data ensures observations are routed to the correct safety personnel for follow-up.</p>
                    </div></div>

                    {/* Step 4 */}
                    <div className="step">
                        <h3>4. Corrective Action</h3>
                        <p>
                            In this step, indicate whether corrective action was taken for the observation. 
                            Select <em>Yes</em> or <em>No</em>.
                        </p>
                        <p><em>Context: This helps safety teams prioritize responses based on whether immediate action was already taken.</em></p>
                    </div>

                    {/* Step 5 */}
                    <div className="step">
                        <h3>5. Review & Submit</h3>
                        <p>
                            This step shows a demo preview of all entered details before final submission. 
                            Verify all the information carefully, then click <strong>Submit</strong> to record the observation.
                        </p>
                        <p><em>Context: The review process ensures accuracy before the observation enters the safety management workflow.</em></p>
                        <div className="image-row">
                            <div className="image-container desktop">
                                <div className="image-wrapper">
                                    <ImageModal thumbnail={observationDesktop3} alt="Figure 11: Observation Preview - Desktop" />
                                </div>
                                <p className="image-caption"><em>Figure 11: Observation Preview - Desktop</em></p>
                            </div>
                            <div className="image-container mobile">
                                <div className="image-wrapper">
                                    <ImageModal thumbnail={observationMobile3} alt="Figure 12: Observation Preview - Mobile" />
                                </div>
                                <p className="image-caption"><em>Figure 12: Observation Preview - Mobile</em></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}