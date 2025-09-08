import type { Route } from "../+types/home";
import { ImageModal } from "~/components/ImageModal";

// Import your images (replace with actual paths)
import actionDesktop1 from "../../assets/images/1a.png";
import actionMobile1 from "../../assets/images/1amob.png";
import actionDesktop2 from "../../assets/images/2a.png";
import actionMobile2 from "../../assets/images/2amob.png";
import actionDesktop3 from "../../assets/images/3a.png";
import actionMobile3 from "../../assets/images/3amob.png";
import actionDesktop4 from "../../assets/images/sf1a.png";
import actionMobile4 from "../../assets/images/sf1amob.png";
import actionDesktop4a from "../../assets/images/sf2a.png";
import actionMobile4a from "../../assets/images/sf2amob.png";
import actionDesktop5 from "../../assets/images/sf3amob.png";
import actionMobile5 from "../../assets/images/sf3a.png";
import actionDesktop5a from "../../assets/images/5a.png";
import actionMobile5amob from "../../assets/images/5amob.png";
import reconsi from "../../assets/images/reconsi.png";
import reconsimob from "../../assets/images/reconsimob.png";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Incident Reporting Action Process" },
    {
      name: "description",
      content:
        "Step-by-step guide for the Incident Reporting Action process in Suraksha 2.0.",
    },
  ];
}

export default function IncidentReportingAction() {
  return (
    <>
      <section className="reporting-action-guide">
        <h2>Incident Reporting Action Process</h2>
        <p>
          This Process is telling your supervisor quickly if any accident,
          mistake, or unsafe thing happens at work. You should give clear
          details like what happened, when, and where. The company will check
          the problem and take steps so that it does not happen again.
        </p>

        {/* Initial Submission */}

        <div className="step-list">
          <h3>1. Employee Submits Incident Report</h3>
          <p>
            If any accident or unsafe thing happens, the employee must tell it
            immediately by filling the incident report form or informing the
            supervisor with all details.
          </p>
          <div className="note">
            <p>
              <strong>Note:</strong> After submitting, the employee can only
              check the status of the report. They cannot make changes unless
              the report is sent back to them for correction.
            </p>
          </div>
        </div>

        {/* Supervisor Review */}
        <div className="step">
          <h3>2. Supervisor Receives Report</h3>
          <div className="code-block">
            The supervisor will see the incident report in their dashboard under
            “Pending Actions.” From there, they can decide what to do next. If
            the report looks complete and correct, the supervisor can:
          </div>
          <ul>
            <li>
              ✅ <strong>Accept:</strong>
              <div className="note">
                {" "}
                First the risk factor will be checked. If the risk factor is
                more than 9, then a CAPA (Corrective and Preventive Action) must
                be created to fix the issue and stop it from happening again.
              </div>
            </li>
            <li>
              ↩️ <strong>Reconsider:</strong>{" "}
              <div className="warning">
                {" "}
                Return the report to the employee for additional information or
                corrections
              </div>
            </li>
          </ul>
          <div className="image-row">
            <div className="image-container desktop">
              <ImageModal
                thumbnail={actionDesktop1}
                alt="Supervisor Review Options - Desktop"
              />
              <p className="image-caption">
                <em>Figure 1.1: Supervisor Review Options - Desktop</em>
              </p>
            </div>
            <div className="image-container mobile">
              <ImageModal
                thumbnail={actionMobile1}
                alt="Supervisor Review Options - Mobile"
              />
              <p className="image-caption">
                <em>Figure 1.2: Supervisor Review Options - Mobile</em>
              </p>
            </div>
          </div>
        </div>

        {/* Reconsider Path */}
        <div className="step">
          <h3>2a. Supervisor Selects "Reconsider"</h3>
          <p>
            If the supervisor chooses Reconsider, the report goes back to the
            employee who first submitted it. The report will move into the
            employee’s “Drafts” section so they can make changes and send it
            again.
          </p>
          <div className="warning">
            <p>
              <strong>Note:</strong> The supervisor must always give a short
              comment or reason for why the report is being returned.
            </p>
          </div>
          <div className="image-row">
            <div className="image-container desktop">
              <ImageModal
                thumbnail={reconsi}
                alt="CAPA Form - Desktop"
              />
              <p className="image-caption">
                <em>Figure 2.1: reconsider - Desktop</em>
              </p>
            </div>
            <div className="image-container mobile">
              <ImageModal thumbnail={reconsimob} alt="CAPA Form - Mobile" />
              <p className="image-caption">
                <em>Figure 2.2: Reconsider - Mobile</em>
              </p>
            </div>
          </div>
        </div>

        {/* Accept Path - Low Risk */}
        <div className="step">
          <h3>2b. Supervisor Selects "Accept" - Low Risk (Below 9)</h3>
          <div className="code-block">
            {" "}
            If the risk index is less than 9, the supervisor must fill in:
          </div>
          <ol>
            <div className="note">
              <li>
                Treatment Information – what was done to handle the incident.
              </li>
            </div>
            <div className="note">
              <li>Root Cause Analysis – why the incident happened.</li>
            </div>
          </ol>
          <p>
            After completing these details, the supervisor sends the report to
            the Safety Officer for review.
          </p>
          <div className="image-row">
            <div className="image-container desktop">
              <ImageModal
                thumbnail={actionDesktop2}
                alt="Low Risk Treatment Form - Desktop"
              />
              <p className="image-caption">
                <em>Figure 3.1: Low Risk Treatment Form - Desktop</em>
              </p>
            </div>
            <div className="image-container mobile">
              <ImageModal
                thumbnail={actionMobile2}
                alt="Low Risk Treatment Form - Mobile"
              />
              <p className="image-caption">
                <em>Figure 3.2: Low Risk Treatment Form - Mobile</em>
              </p>
            </div>
          </div>
        </div>

        {/* Accept Path - Medium/High Risk */}
        <div className="step">
          <h3>
            2c. Supervisor Selects "Accept" - Medium/High Risk (9 or Above)
          </h3>
          <h4>
          <strong>Condition</strong>
              <br />
              If the risk index is 9 or higher, the supervisor must do the
              following before sending the report forward:</h4>
              <div className="note">
          <ol className="step-list">
           
            <li>
              
              
              Create at least one CAPA (Corrective Action Preventive Action)
              form
            </li>
            <li>
              
              
              Assign at least one task to another supervisor (more tasks can
              also be given)
            </li>
            <li>
             
             
              Fill in treatment information – how the incident was handled
            </li>
            <li>
              
              
              Complete root cause analysis – why the incident happened
            </li>
          </ol></div>

          <div className="warning">
            <p>
              <strong>Requirement:</strong> At least one CAPA and one assigned
              task are required before the report can be submitted.
            </p>
          </div>
          <div className="image-row">
            <div className="image-container desktop">
              <ImageModal
                thumbnail={actionDesktop3}
                alt="CAPA Form - Desktop"
              />
              <p className="image-caption">
                <em>Figure 4.1: CAPA Form - Desktop</em>
              </p>
            </div>
            <div className="image-container mobile">
              <ImageModal thumbnail={actionMobile3} alt="CAPA Form - Mobile" />
              <p className="image-caption">
                <em>Figure 4.2: CAPA Form - Mobile</em>
              </p>
            </div>
          </div>
        </div>

        {/* Safety Officer Review */}
        <div className="step">
          <h3>3. Safety Officer Receives Report</h3>
          <p>
            Once the supervisor submits, the report shows up in the Safety
            Officer’s “To Do” list. The safety officer has four choices:
          </p>
          <div className="note">
          <ul>
            <li>
              ✅ <strong>Accept:</strong> ontinue and move forward to close the
              incident.
            </li>
            <li>
              ❌ <strong>Reject:</strong> Close the incident without taking
              further action.
            </li>
            <li>
              ↩️ <strong>Reconsider:</strong> Send the report back to the
              original employee for corrections.
            </li>
            <li>
              🔀 <strong>Reassign:</strong> Give the report to another safety
              officer for handling.
            </li>
          </ul>
          </div>
          <div className="image-row">
            <div className="image-container desktop">
              <ImageModal
                thumbnail={actionDesktop4}
                alt="Safety Officer Options - Desktop"
              />
              <p className="image-caption">
                <em>Figure 5.1: Safety Officer Options - Desktop</em>
              </p>
            </div>
            <div className="image-container mobile">
              <ImageModal
                thumbnail={actionMobile4}
                alt="Safety Officer Options - Mobile"
              />
              <p className="image-caption">
                <em>Figure 5.2: Safety Officer Options - Mobile</em>
              </p>
            </div>
          </div>
          <div className ="code-block">Inside Reports --pending</div>
          <div className="image-row">
            <div className="image-container desktop">
              <ImageModal
                thumbnail={actionDesktop4a}
                alt="Safety Officer Options - Desktop"
              />
              <p className="image-caption">
                <em>Figure 6.1: Safety Officer view - Desktop</em>
              </p>
            </div>
            <div className="image-container mobile">
              <ImageModal
                thumbnail={actionMobile4a}
                alt="Safety Officer Options - Mobile"
              />
              <p className="image-caption">
                <em>Figure 6.2: Safety Officer view - Mobile</em>
              </p>
            </div>
          </div>
        </div>

        {/* Safety Officer Actions */}
        <div className="step">
          <h3>4. Safety Officer Action Paths</h3>

          <ol className="step-list">
            <li>
              <strong>4a. Accept Option</strong>
              <br />
              If the safety officer chooses Accept, they must do the following
              before closing the report:
              <ol>
                <li>Add CAPA tasks if needed</li>
                <div className="note">
                  <li>
                    Fill in:
                    <ul>
                      <li>Contributing cause factors</li>
                      <li>Considering cause factors</li>
                      <li>Hazard identification</li>
                      <li>Comments</li>
                    </ul>
                  </li>
                </div>
                <li>
                  A popup will open where they must choose the incident category
                  and the division
                </li>
                <li>
                  After confirming these details, the safety officer can close
                  the incident report
                </li>
              </ol>
            </li>
            <li>
              <strong>4b. Reject Option</strong>
              <br />
              If the safety officer selects "Reject":
              <br />
              The incident is automatically closed
              <ul>
                <li className="warning">
                  Note: Any open CAPA tasks must be completed and closed before
                  rejection can happen.
                </li>
              </ul>
            </li>
            <li>
              <strong>4c. Reconsider Option</strong>
              <br />
              <div className="warning">
                If the safety officer chooses Reconsider:
              </div>
              <div className="note">
                <ol>
                  <li>The report goes back to the employee’s Drafts list</li>
                  <li>The employee can edit and resubmit the report</li>
                  <li>The whole process starts again from the beginning</li>
                </ol>
              </div>
            </li>
            <li>
              <strong>4d. Reassign Option</strong>
              <br />
              <div className="warning">
                If the safety officer chooses Reassign:
              </div>
              <div className="note">
                <ol>
                  <li>
                    A dropdown list will show all available safety officers at
                    the same level
                  </li>
                  <li>
                    The safety officer can pick another officer from the list
                  </li>
                  <li>
                    The report is then moved to the To Do list of the selected
                    officer
                  </li>
                </ol>
              </div>
            </li>
          </ol>

          <div className="image-row">
            <div className="image-container desktop">
              <ImageModal
                thumbnail={actionDesktop5}
                alt="Safety Officer Actions - Desktop"
              />
              <p className="image-caption">
                <em>Figure 7.1: Safety Officer Actions - Desktop</em>
              </p>
            </div>
            <div className="image-container mobile">
              <ImageModal
                thumbnail={actionMobile5}
                alt="Safety Officer Actions - Mobile"
              />
              <p className="image-caption">
                <em>Figure 7.2: Safety Officer Actions - Mobile</em>
              </p>
            </div>
          </div>
        </div>

        {/* Final Resolution */}
        <div className="step">
          <h3>5. Incident Closure</h3>
          <p>
            After all steps are finished and the safety officer either Accepts
            or Rejects the report, the incident is officially closed in the
            system. Closed incidents are saved in the archive and can be used
            later for reports and analysis.
          </p>
          <div className="note">
            <p>
              <strong>Note:</strong> Only the Safety Officer has the power to
              permanently close an incident.
            </p>
          </div>
          <div className="image-row">
            <div className="image-container desktop">
              <ImageModal
                thumbnail={actionDesktop5a}
                alt="Safety Officer Actions - Desktop"
              />
              <p className="image-caption">
                <em>Figure 8.1: Incident closure - Desktop</em>
              </p>
            </div>
            <div className="image-container mobile">
              <ImageModal
                thumbnail={actionMobile5amob}
                alt="Safety Officer Actions - Mobile"
              />
              <p className="image-caption">
                <em>Figure 8.2: Incident closure - Mobile</em>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
