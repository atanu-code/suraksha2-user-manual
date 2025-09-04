import type { Route } from "../+types/home";

import incidentDesktop from "../../assets/images/inci1desk.png";
import incidentMobile from "../../assets/images/inci1mob.png";
import incidentDesktop2 from "../../assets/images/inci2desk.png";
import incidentMobile2 from "../../assets/images/inci2mob.png";
import incidentDesktop3 from "../../assets/images/inci3desk.png";
import incidentMobile3 from "../../assets/images/inci3mob.png";
import { ImageModal } from "~/components/ImageModal";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Incident Reporting" },
        { name: "description", content: "Step-by-step guide for reporting an Incident in Suraksha 2.0." },
    ];
}

export default function IncidentReporting() {
    return (
        <>
            <section className="reporting-guide">
                <h2>Incident Reporting</h2>
                <p>
                    Incident reporting helps track and manage safety-related events across sites. 
                    Employees can report various types of incidents for timely corrective actions and prevention.
                </p>

                {/* Acknowledge Section */}
                <div className="acknowledge">
                    <h3>Acknowledgement</h3>
                    <p>
                        Whenever an employee reports an incident, the acknowledgement step is shown first. 
                        The reporter must confirm that the incident is submitted in good faith and the details are accurate.
                    </p>
                    <div className="acknowledge-box">
                        <p><strong>Incident Acknowledgement</strong></p>
                        <div className="note">
                        <p>
                            By clicking <em>“Start Incident Report”</em>, you confirm the info is accurate and in good faith. 
                            Incidents support workplace safety and improvements. False reports or misuse may lead to action. 
                            No retaliation for honest reporting.
                        </p>
                        </div>
                        <div className="warning">
                        <p><em>Note: Images provided must be real, and the reporting location must match the acknowledged location.</em></p>
                    </div></div>
                </div>
                

                <div className="reporting-steps">
                    {/* Step 1 */}
                    <div className="step">
                        <h3>1. Observer Details</h3>
                        <p>
                            Choose whether you are reporting for <strong>Self</strong> or <strong>Others</strong>.
                        </p>
                        <ul>
                            <li>✔️ <strong>Self:</strong> Used when reporting from your own unit.</li>
                            <li>✔️ <strong>Others:</strong> Select another employee’s name from the dropdown list.</li>
                        </ul>
                    </div>

                    {/* Step 2 */}
                    <div className="step">
                        
                        <h3>2. Incident & Risk Details</h3>
                        <p>Select the type of incident from the following options:</p>
                        <div className="note">
                        <ul>
                            <li>✔️ <strong>Near Miss:</strong> An event that could have caused harm but did not.</li>
                            <li>✔️ <strong>Medical Treatment:</strong> Injury requiring professional medical care.</li>
                            <li>✔️ <strong>First Aid:</strong> Minor injury treatable with basic first aid.</li>
                            <li>✔️ <strong>Recordable Injury:</strong> OSHA-recordable injury requiring documentation.</li>
                            <li>✔️ <strong>Sickness:</strong> Illness arising due to workplace conditions.</li>
                            <li>✔️ <strong>Property Damage:</strong> Damage to equipment, assets, or infrastructure.</li>
                            <li>✔️ <strong>Fire & Smoke:</strong> Fire, smoke, or related hazards.</li>
                            <li>✔️ <strong>Dangerous Occurrence:</strong> Serious incidents with high potential for harm.</li>
                            <li>✔️ <strong>Fatal:</strong> An incident resulting in loss of life.</li>
                        </ul>

                         </div>
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
                                If the incident type is <strong>Medical Treatment</strong>, <strong>First Aid</strong>, 
                                <strong>Recordable Injury</strong>, or <strong>Sickness</strong> → 
                                you must also provide:
                                <ul>
                                    <li>Status of the injured person (At Home, Hospitalized, Resumed Work, NA)</li>
                                    <li>Impacted area </li>
                                    <li>Nature of injury (select from the given list or specify “Other”)</li>
                                </ul>
                            </li>
                            
                            <li>
                                Description, Date, and Time must be entered. The date must be within the past 60 days 
                                (future dates are not allowed).
                            </li>
                            </ul>
                            <div className="code-block">
                                At least one image upload is mandatory (maximum of 3 images).</div>
                           
                        
                    </div>
                    </div>
                    <div className="image-row">
                            <div className="image-container desktop">
                                <div className="image-wrapper">
                                    <ImageModal thumbnail={incidentDesktop} alt="Figure 13: Incident Preview - Desktop" />
                                </div>
                                <p className="image-caption"><em>Figure 1.1: Incident Preview - Desktop</em></p>
                            </div>
                            <div className="image-container mobile">
                                <div className="image-wrapper">
                                    <ImageModal thumbnail={incidentMobile} alt="Figure 14: Incident Preview - Mobile" />
                                </div>
                                <p className="image-caption"><em>Figure 1.2: Incident Preview - Mobile</em></p>
                            </div>
                        </div>

                    {/* Step 3 */}
                    <div className="step">
                        <h3>3. Location Info</h3>
                        <p>
                            This section is auto-filled based on the acknowledged location from Step 0. 
                            Verify that the unit, facility, zone, region, company, and address details are correct.
                        </p>
                    </div>
                     <div className="image-row">
                            <div className="image-container desktop">
                                <div className="image-wrapper">
                                    <ImageModal thumbnail={incidentDesktop2} alt="Figure 13: Incident Preview - Desktop" />
                                </div>
                                <p className="image-caption"><em>Figure 2.1: Incident location Preview - Desktop</em></p>
                            </div>
                            <div className="image-container mobile">
                                <div className="image-wrapper">
                                    <ImageModal thumbnail={incidentMobile2} alt="Figure 14: Incident Preview - Mobile" />
                                </div>
                                <p className="image-caption"><em>Figure 2.2: Incident location Preview - Mobile</em></p>
                            </div>
                        </div>

                    {/* Step 4 */}
                    <div className="step">
                        <h3>4. Corrective Action</h3>
                        <p>
                            Indicate whether corrective action was taken for the incident. 
                            Select <em>Yes</em> or <em>No</em>. 
                        </p>
                        <div className="warning">
                        <p>
                            ⚠️ If you select <strong>Yes</strong>, you must also provide <strong>Remarks</strong> describing the corrective action taken.
                        </p></div>
                    </div>
                    <div className="image-row">
                            <div className="image-container desktop">
                                <div className="image-wrapper">
                                    <ImageModal thumbnail={incidentDesktop3} alt="Figure 13: Incident Preview - Desktop" />
                                </div>
                                <p className="image-caption"><em>Figure 3.1: Incident correction Preview - Desktop</em></p>
                            </div>
                            <div className="image-container mobile">
                                <div className="image-wrapper">
                                    <ImageModal thumbnail={incidentMobile3} alt="Figure 14: Incident Preview - Mobile" />
                                </div>
                                <p className="image-caption"><em>Figure 3.2: Incident Correction Preview - Mobile</em></p>
                            </div>
                        </div>

                    {/* Step 5 */}
                    <div className="step">
                        <h3>5. Review & Submit</h3>
                        <p>
                            This step shows a preview of all entered details before submission. 
                            Verify everything carefully, then click <strong>Submit</strong> to record the incident report.
                        </p>
                        
                    </div>
                </div>
            </section>
        </>
    );
}
