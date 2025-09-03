import type { Route } from "../+types/home";


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Purpose Suraksha 2.0.0" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Purpose() {
    return (
        <>

            <h1>Purpose of Suraksha 2.0</h1>

            <p>
                Suraksha 2.0 ensures that every workplace safety incident, observation, or safety walk finding is reported, reviewed,
                approved, and acted upon efficiently. The system enforces a clear workflow — from the reporting employee to the
                supervisor, then to the safety officer for approval — with built-in escalation mechanisms for timely response.
            </p>

            <div className="note">
                <strong>Why It Matters:</strong> Structured reporting, approval, and escalation workflows prevent oversight,
                ensure corrective actions are taken, and maintain compliance with safety regulations.
            </div>

            <h3>How the Process Works</h3>

            <ol className="step-list">
                <li>
                    <strong>Incident Reported</strong><br />
                    Any employee logs an incident, unsafe condition, or observation via the app.
                </li>
                <li>
                    <strong>Supervisor Review</strong><br />
                    The assigned supervisor validates the report and adds remarks if required. If not addressed within the expected
                    timeframe, the report is automatically escalated.
                </li>
                <li>
                    <strong>Safety Officer Approval</strong><br />
                    The safety officer reviews, approves, and initiates corrective or preventive actions. Pending approvals can
                    also trigger escalations to higher authorities.
                </li>
                <li>
                    <strong>Escalation</strong><br />
                    Unattended or rejected reports escalate to higher-level supervisors or EHS managers to ensure timely resolution.
                </li>
            </ol>

            <div className="warning">
                <strong>Important:</strong> Prompt reporting, review, and approval at every stage are critical. Escalation ensures
                no report is left unresolved, maintaining workplace safety and compliance.
            </div>

        </>
    );
}
