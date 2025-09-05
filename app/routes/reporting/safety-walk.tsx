import { ImageModal } from "~/components/ImageModal";
import safetyWalkAcknowledge from "../../assets/images/safetywalk-acknowledge.png";
import siteInformation from "../../assets/images/site-information.png";
import observerSay from "../../assets/images/observer-say.png";
import improvementAction from "../../assets/images/improvement-action.png";
import selfAssessment from "../../assets/images/self-assessment.png";
import safetyWalkReview from "../../assets/images/safetywalk-review.png";
import SAFETYWALK5 from "../../assets/images/SAFE5DESK.png";
import SAFETYWALK5MOB from "../../assets/images/SAFE5MOB.png";
import SAFETYWALK1 from "../../assets/images/SAFE1.png";
import SAFETYWALK1MOB from "../../assets/images/SAFE1MOB.png";
import SAFETYWALK2 from "../../assets/images/SAFE2DES.png";
import SAFETYWALK2MOB from "../../assets/images/SAFE2MOB.png";
import SAFETYWALK3 from "../../assets/images/SAFE3DESK.png";
import SAFETYWALK3MOB from "../../assets/images/SAFE3MOB.png";
import SAFETYWALK4 from "../../assets/images/SAFE4DESK.png";
import SAFETYWALK4MOB from "../../assets/images/SAFE4MOB.png";


export function meta() {
  return [
    { title: "Safety Walk Reporting Guide" },
    {
      name: "description",
      content:
        "Learn how to conduct and report safety walks in the Suraksha mining safety app.",
    },
  ];
}

export default function SafetyWalkReporting() {
  return (
    <>
      <section className="reporting-guide">
        <h2>Safety Walk Reporting</h2>
        <div className="code-block">
          The Safety Walk Reporting feature allows employees to systematically
          document safety observations during planned walkthroughs. This process
          helps identify potential hazards, recognize safe practices, and engage
          workers in safety discussions.
        </div>

        <div className="reporting-steps">
          <div className="step">
            <h2>Acknowledgement</h2>
            <p>
              Before starting a safety walk report, you must acknowledge that
              you understand the importance of accurate and truthful reporting.
            </p>
            <div className="warning">
            <p>By clicking "Start Safety Walk", you confirm that:</p></div>
            <div className="note">
            <ul>
              <li>
                ✔️ All information provided is accurate and reported in good
                faith
              </li>
              <li>✔️ You are reporting from your actual location</li>
              <li>✔️ Any images uploaded are real and unaltered</li>
              <li>✔️ Your identity may be shared for follow-up purposes</li>
              <li>
                ✔️ False reports or misuse may lead to disciplinary action
              </li>
              <li>✔️ There will be no retaliation for honest reporting</li>
            </ul></div>
          </div>

          <div className="step">
            <h2>Step 1: Site Information</h2>
            <p>
              This section captures details about the safety walk location and
              timing.
            </p>
            <div className="image-row"></div>
            <p>The following information is required:</p>
            <div className="note">
            <ul>
              <li>
                ✅ <strong>Unit Details:</strong> Pre-filled based on your
                current location and check-in data
              </li>
              <li>
                ✅ <strong>Safety Walk Date:</strong> Select the date when the
                safety walk was conducted (only accepts dates from the past 60
                days, including current date)
              </li>
              <li>
                ✅ <strong>Start Time:</strong> The time when the safety walk
                began
              </li>
              <li>
                ✅ <strong>End Time:</strong> The time when the safety walk
                concluded
              </li>
              <li>
                ✅ <strong>Image Upload:</strong> At least one image is
                mandatory (maximum of 3 images can be uploaded)
              </li>
            </ul>
            </div>
            <div className="warning">
            <p>
              <em>
                Note: Future dates are not accepted. Only previous 60 days and
                current date are allowed.
              </em>
            </p>
            </div>
          </div>
          <div className="image-row">
            <div className="image-container desktop">
              <div className="image-wrapper">
                <ImageModal
                  thumbnail={SAFETYWALK1}
                  alt="Figure 11: Observation Preview - Desktop"
                />
              </div>
              <p className="image-caption">
                <em>Figure 1.1: site info - Desktop</em>
              </p>
            </div>
            <div className="image-container mobile">
              <div className="image-wrapper">
                <ImageModal
                  thumbnail={SAFETYWALK1MOB}
                  alt="Figure 12: Observation Preview - Mobile"
                />
              </div>
              <p className="image-caption">
                <em>Figure 1.2:site info - Mobile</em>
              </p>
            </div>
          </div>
</div>
          <div className="step">
            <h2>Step 2: Observer Say</h2>
            <p>
              This section focuses on engaging with workers to understand their
              perspective on safety practices and challenges.
            </p>

            <p>
              You must answer the following questions to capture valuable safety
              insights:
            </p>
            <div className="note">
              <ul>
                <li>
                  ✅ <strong>Can you help me to understand your task?</strong> *
                  <p>
                    <em>
                      Document the worker's description of their primary
                      responsibilities
                    </em>
                  </p>
                </li>
                <li>
                  ✅{" "}
                  <strong>
                    What's one thing your team does that makes your job safer,
                    that we should share with others?
                  </strong>{" "}
                  *
                  <p>
                    <em>
                      Identify positive safety practices that could be
                      implemented elsewhere
                    </em>
                  </p>
                </li>
                <li>
                  ✅{" "}
                  <strong>
                    What daily challenges do you address in your job that could
                    impact safety?
                  </strong>{" "}
                  *
                  <p>
                    <em>
                      Note recurring issues that workers face which might
                      compromise safety
                    </em>
                  </p>
                </li>
                <li>
                  ✅{" "}
                  <strong>
                    Is there a way to make a mistake that could cause a serious
                    injury in your job? What keeps you from being seriously
                    hurt? Is there more we can do?
                  </strong>{" "}
                  *
                  <p>
                    <em>
                      Identify potential high-risk scenarios and existing
                      safeguards
                    </em>
                  </p>
                </li>
                <li>
                  ✅{" "}
                  <strong>
                    If I was doing this job for the first time, what would you
                    want me to know to stay safe?
                  </strong>{" "}
                  *
                  <p>
                    <em>
                      Capture essential safety knowledge from experienced
                      workers
                    </em>
                  </p>
                </li>
              </ul>
            </div>
            <p>
              <em>* Denotes mandatory questions that must be answered</em>
            </p>
          </div>
          <div className="image-row">
            <div className="image-container desktop">
              <div className="image-wrapper">
                <ImageModal
                  thumbnail={SAFETYWALK2}
                  alt="Figure 11: Observation Preview - Desktop"
                />
              </div>
              <p className="image-caption">
                <em>Figure 2.1: observersay - Desktop</em>
              </p>
            </div>
            <div className="image-container mobile">
              <div className="image-wrapper">
                <ImageModal
                  thumbnail={SAFETYWALK2MOB}
                  alt="Figure 2.1: Observer say - Mobile"
                />
              </div>
              <p className="image-caption">
                <em>Figure 2.2:Observer Say - Mobile</em>
              </p>
            </div>
          </div>

          <div className="step">
            <h2>Step 3: Improvement Action</h2>
            <p>
              This section documents whether follow-up actions are required
              based on the safety walk findings.
            </p>
            <div className="image-row"></div>
            <p>You need to address the following:</p>
            <div className="note">
              <ul>
                <li>
                  ✅ <strong>Are follow up actions required?</strong> *
                  <p>
                    Select Yes or No to indicate whether any corrective or
                    improvement actions are needed based on your observations
                  </p>
                </li>

                <li>
                  ✅ <strong>Remarks:</strong> *
                  <p>
                    Provide detailed comments explaining the nature of required
                    actions, whether you selected Yes or No
                  </p>
                </li>
              </ul>
            </div>
            <p>
              This information helps safety personnel prioritize and track
              necessary improvements identified during the safety walk.
            </p>
            <p>
              <em>* Denotes mandatory fields that must be completed</em>
            </p>
          </div>
          <div className="image-row">
            <div className="image-container desktop">
              <div className="image-wrapper">
                <ImageModal
                  thumbnail={SAFETYWALK3}
                  alt="Figure 11: Observation Preview - Desktop"
                />
              </div>
              <p className="image-caption">
                <em>Figure 3.1: remarks - Desktop</em>
              </p>
            </div>
            <div className="image-container mobile">
              <div className="image-wrapper">
                <ImageModal
                  thumbnail={SAFETYWALK3MOB}
                  alt="Figure 12: Observation Preview - Mobile"
                />
              </div>
              <p className="image-caption">
                <em>Figure 3.2:remarks - Mobile</em>
              </p>
            </div>
          </div>

          <div className="step">
            <h2>Step 4: Self Assessment</h2>
            <div className="code-block">
              This section evaluates the quality and effectiveness of the safety
              walk interaction.
            </div>
            <div className="warning">
           
            <p>
              You must answer the following questions about how you conducted
              the safety walk:
            </p>
            </div>
            <div className="note">
            <ul>
              <li>
                ✅ <strong>Did you have a discussion with people?</strong> *
                <p>
                  Indicate whether you engaged in safety conversations with
                  workers
                </p>
              </li>
              <li>
                ✅ <strong>Did you give positive recognition?</strong> *
                <p>
                  Note if you acknowledged and praised safe behaviors observed
                </p>
              </li>
              <li>
                ✅ <strong>Did you pre-plan the safety interaction?</strong> *
                <p>
                  Indicate whether you prepared for the safety walk in advance
                </p>
              </li>
              <li>
                
                ✅{" "}
                <strong>
                  Did you assess the risk & hazards of the work people were
                  doing?
                </strong>{" "}
                *
                <p>
                  Document if you evaluated potential dangers in the work
                  environment
                </p>
              </li>
              <li>
                ✅{" "}
                <strong>
                  Have you discussed follow up actions with people listed as
                  responsible?
                </strong>{" "}
                *
                <p>
                  Note whether you communicated necessary actions to responsible
                  personnel
                </p>
              </li>
              <li>
                ✅ <strong>Did you engage people in problem solving?</strong> *
                <p>
                  Indicate if you involved workers in developing solutions to
                  safety issues
                </p>
              </li>
              <li>
                ✅ <strong>Safety Walk conducted by team:</strong> *
                <p>
                  Select team members from a dropdown of workers who report to
                  your unit
                </p>
              </li>
            </ul>
            <p>
              <em>* Denotes mandatory questions that must be answered</em>
            </p>
          </div>
          <div className="image-row">
            <div className="image-container desktop">
              <div className="image-wrapper">
                <ImageModal
                  thumbnail={SAFETYWALK4}
                  alt="Figure 11: Observation Preview - Desktop"
                />
              </div>
              <p className="image-caption">
                <em>Figure 4.1: self assesment - Desktop</em>
              </p>
            </div>
            <div className="image-container mobile">
              <div className="image-wrapper">
                <ImageModal
                  thumbnail={SAFETYWALK4MOB}
                  alt="Figure 12: Observation Preview - Mobile"
                />
              </div>
              <p className="image-caption">
                <em>Figure 4.2:self assesment - Mobile</em>
              </p>
            </div>
          </div>

          <div className="step">
            <h2>Step 5: Preview & Submit</h2>
            <p>
              The final step allows you to review all information before
              submitting the safety walk report.
            </p>

            <p>
              The review screen displays a comprehensive summary of all
              information provided, including:
            </p>
            <div className="note">
              <ul>
                <li>✅ Site information and timing details</li>
                <li>✅ Responses to all Observer Say questions</li>
                <li>✅ Improvement action decisions and remarks</li>
                <li>✅ Self-assessment responses</li>
                <li>✅ Team members involved in the safety walk</li>
                <li>✅ Uploaded images from the safety walk</li>
              </ul>
            </div>
            <div className="warning">
              <p>
                Carefully review all details to ensure accuracy and
                completeness. Once submitted, the safety walk report will be
                sent to the appropriate safety personnel for review and action
                tracking.
              </p>
              <p>
                Click "Submit" to complete the safety walk reporting process.
              </p>
            </div>
          </div>
          <div className="image-row">
            <div className="image-container desktop">
              <div className="image-wrapper">
                <ImageModal
                  thumbnail={SAFETYWALK5}
                  alt="Figure 11: Observation Preview - Desktop"
                />
              </div>
              <p className="image-caption">
                <em>Figure 5.1: preview and submit - Desktop</em>
              </p>
            </div>
            <div className="image-container mobile">
              <div className="image-wrapper">
                <ImageModal
                  thumbnail={SAFETYWALK5MOB}
                  alt="Figure 12: Observation Preview - Mobile"
                />
              </div>
              <p className="image-caption">
                <em>Figure 5.2:preview and submit - Mobile</em>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
