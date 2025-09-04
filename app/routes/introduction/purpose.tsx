import type { Route } from "../+types/home";

import observationDesktop from "../../assets/images/observation-d.png";
import observationMobile from "../../assets/images/observation-m.png";
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

            <h1>Observation Reporting</h1>

            <p>
                Observations are an important part of proactive safety reporting. 
                This allows employees to capture unsafe acts, unsafe conditions, or positive observations in real time.
            </p>

            <div className="note">
                <strong>Why It Matters:</strong> Structured observation reporting helps identify potential hazards before they cause incidents, 
                promotes positive safety behaviors, and creates a culture of continuous safety improvement.
            </div>

            <h3>Acknowledgement</h3>
            <p>
                Whenever an employee reports an observation, the acknowledgement step is shown first. 
                The reporter must confirm that the observation is submitted in good faith and the details are accurate.
            </p>
            
            <div className="note">
                <strong>Observation Acknowledgement:</strong> By clicking "Start Observation", you confirm the info is accurate and in good faith. 
                Observations support safety and improvement. Identity may be shared for follow-up. 
                False reports or misuse may lead to action. No retaliation for honest reporting.
                <em> Note: Images provided must be real, and the reporting location must match the acknowledged location.</em>
            </div>

            <h3>How the Observation Process Works</h3>

            <ol className="step-list">
                <li>
                    <strong>Observer Details</strong><br />
                    Choose whether reporting for <strong>Self</strong> (from your own unit) or <strong>Others</strong> (select from dropdown).
                </li>
                <li>
                    <strong>Observation & Risk Details</strong><br />
                    Select observation type: Unsafe Act, Unsafe Condition, or Safe Behavior/Practice.
                    For unsafe observations, assess Probability and Severity levels.
                </li>
                <li>
                    <strong>Location Information</strong><br />
                    Auto-filled based on your acknowledged location to ensure accurate geographical tracking.
                </li>
                <li>
                    <strong>Corrective Action</strong><br />
                    Indicate whether immediate corrective action was taken for the observation.
                </li>
                <li>
                    <strong>Review & Submit</strong><br />
                    Verify all information before final submission to the safety management system.
                </li>
            </ol>

            <h3>Probability Levels</h3>
            <p>When reporting unsafe acts or conditions, assess the probability of occurrence:</p>
            <ol className="step-list">
                <li><strong>Rare</strong> - May occur only in exceptional circumstances.</li>
                <li><strong>Unlikely</strong> - Could occur at some time.</li>
                <li><strong>Possible</strong> - Might occur occasionally.</li>
                <li><strong>Likely</strong> - Will probably occur in most circumstances.</li>
                <li><strong>Almost Certain</strong> - Expected to occur in most circumstances.</li>
            </ol>

            <h3>Severity Levels</h3>
            <p>When reporting unsafe acts or conditions, assess the potential severity of consequences:</p>
            <ol className="step-list">
                <li><strong>Minimal</strong> - No injuries, low financial loss.</li>
                <li><strong>Minor</strong> - First aid treatment, medium financial loss.</li>
                <li><strong>Moderate</strong> - Medical treatment injury with lost time.</li>
                <li><strong>Major</strong> - Extensive injuries, major financial loss.</li>
                <li><strong>Catastrophic</strong> - Death, extremely high financial loss.</li>
            </ol>

            <div className="warning">
                <strong>Important:</strong> At least one image is mandatory (maximum of 3). 
                The observation date must be within the past 60 days (future dates not allowed). 
                Prompt and accurate reporting ensures timely resolution of safety concerns.
            </div>

            <div className="image-row">
                <div className="image-container desktop">
                    <div className="image-wrapper">
                        <ImageModal thumbnail={observationDesktop} alt="Figure 11: Observation Preview - Desktop" />
                    </div>
                    <p className="image-caption"><em>Figure 1: Observation Preview - Desktop</em></p>
                </div>
                <div className="image-container mobile">
                    <div className="image-wrapper">
                        <ImageModal thumbnail={observationMobile} alt="Figure 12: Observation Preview - Mobile" />
                    </div>
                    <p className="image-caption"><em>Figure 2: Observation Preview - Mobile</em></p>
                </div>
            </div>

        </>
    );
}