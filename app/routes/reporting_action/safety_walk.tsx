import type { Route } from "../+types/home";
import { ImageModal } from "~/components/ImageModal";

// Import your images (replace with actual paths)
import safetyWalkDesktop1 from "../../assets/images/sw1.png";
import safetyWalkMobile1 from "../../assets/images/sw1mob.png";
import safetyWalkDesktop2 from "../../assets/images/sw2.png";
import safetyWalkMobile2 from "../../assets/images/sw2mob.png";
import safetyWalkDesktop3 from "../../assets/images/sw3.png";
import safetyWalkMobile3 from "../../assets/images/sw3mob.png";
import capaDesktop from "../../assets/images/capa.png";
import capaMobile from "../../assets/images/capamob.png";
import SAFETYWALK1 from "../../assets/images/SAFE1.png";
import SAFETYWALK1MOB from "../../assets/images/SAFE1MOB.png";
import SAFETYWALK5 from "../../assets/images/SAFETYWALK5.png";
import SAFETYWALK5MOB from "../../assets/images/SAFETYWALK5MOB.png";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Safety Walk Process" },
    {
      name: "description",
      content:
        "Learn about the Safety Walk process and how to report safety observations in Suraksha 2.0.",
    },
  ];
}

export default function SafetyWalkProcess() {
  return (
    <>
      <section>
        <h2>Safety Walk Process</h2>
        <p>
          A Safety Walk is a proactive approach to identify and address potential 
          hazards in the workplace before they lead to incidents. It involves 
          regularly walking through work areas to observe conditions, behaviors, 
          and practices that could impact safety.
        </p>
        <p>
          Through Safety Walks, employees and management work together to 
          maintain a safe working environment by identifying risks, implementing 
          immediate corrections when possible, and tracking longer-term solutions.
        </p>

        {/* Initial Submission */}
        <div>
          <h3>1. Employee Submits Safety Walk Observation</h3>
          <p>
            Any employee can report safety observations during their Safety Walk by 
            filling out the Safety Walk form with details about the location, 
            potential hazard, and suggested improvements.
          </p>
          <div className="note">
            <p>
              <strong>Note:</strong> Safety Walk reports are automatically closed 
              upon submission. The primary purpose is documentation and awareness 
              rather than formal investigation.
            </p>
          </div>
        </div>

        {/* Safety Walk Form */}
        <div>
          <h3>2. Safety Walk Form Submission</h3>
          <p>
            When submitting a Safety Walk observation, employees provide:
          </p>
          <div className="warning">
          <ul>
            <li>Location of observation</li>
            <li>Description of the safety concern or positive observation</li>
            <li>Category of observation (e.g., housekeeping, equipment safety, PPE)</li>
            <li>Photos if applicable</li>
            <li>Assessment of risk level</li>
            <li>Whether follow-up actions are needed</li>
          </ul></div>
          <div>
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
        </div>

        {/* Automatic Closure */}
        <div>
          <h3>3. Automatic Closure Process</h3>
          <p>
            Unlike incident reports, Safety Walk observations are automatically 
            closed upon submission. They are immediately moved to the "Closed" 
            status and become visible in the Safety Walk archive for future reference.
          </p>
          <div className="note">
            <p>
              <strong>Note:</strong> No supervisor or safety officer approval is 
              required for Safety Walk reports. The focus is on documentation and 
              awareness rather than formal investigation processes.
            </p>
          </div>
          <div>
            <div>
              <ImageModal
                thumbnail={safetyWalkDesktop2}
                alt="Safety Walk Archive - Desktop"
              />
              <p>
                <em>Figure 2.1: Safety Walk Archive - Desktop</em>
              </p>
            </div>
            <div>
              <ImageModal
                thumbnail={safetyWalkMobile2}
                alt="Safety Walk Archive - Mobile"
              />
              <p>
                <em>Figure 2.2: Safety Walk Archive - Mobile</em>
              </p>
            </div>
          </div>
        </div>

        {/* Follow-up Actions */}
        <div>
          <h3>4. Follow-up Actions and CAPA Generation</h3>
          <p>
            If the reporter indicates that follow-up actions are needed by selecting "Yes" 
            for the follow-up question, the system automatically generates a CAPA 
            (Corrective and Preventive Action) form linked to the Safety Walk observation.
          </p>
          <div className="warning">
            <p>
              <strong>Important:</strong> The CAPA form is generated for tracking purposes 
              only. No actions will appear in the Safety Walk list, and the original 
              Safety Walk observation remains closed.
            </p>
          </div>
          <div>
           <div className="image-row">
            <div className="image-container desktop">
              <div className="image-wrapper">
                <ImageModal
                  thumbnail={SAFETYWALK5}
                  alt="Figure 11: Observation Preview - Desktop"
                />
              </div>
              <p className="image-caption">
                <em>Figure 6.1: preview and submit - Desktop</em>
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
                <em>Figure 6.2:preview and submit - Mobile</em>
              </p>
            </div>
          </div>
          </div>
        </div>

        {/* CAPA Form Visibility */}
        <div>
          <h3>5. CAPA Form Visibility and Tracking</h3>
          <p>
            Generated CAPA forms are visible to all authorized users in the CAPA section 
            of the application. These forms can be assigned, tracked, and managed 
            separately from the original Safety Walk observation.
          </p>
          <div className="note">
            <p>
              <strong>Note:</strong> While everyone can view the CAPA forms, only 
              authorized personnel can edit or update the CAPA status and assignments.
            </p>
          </div>
          <div>
            
          </div>
        </div>

        {/* Benefits */}
        <div>
          <h3>6. Benefits of the Safety Walk Process</h3>
          <div className="note">
          <ul>
            <li>Encourages proactive safety awareness among all employees</li>
            <li>Simplifies reporting without bureaucratic hurdles</li>
            <li>Creates a searchable database of safety observations</li>
            <li>Identifies trends and common issues across the organization</li>
            <li>Documents positive safety practices for recognition</li>
            <li>Generates CAPAs only when truly needed for follow-up</li>
          </ul></div>
        </div>
      </section>
    </>
  );
}