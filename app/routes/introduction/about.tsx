import type { Route } from "../+types/home";
import rootMob from "../../assets/images/root-mob.png";
import rootDesktop from "../../assets/images/root-desktop.png";
import { ImageModal } from "~/components/ImageModal";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "About Suraksha 2.0.0" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function About() {
    return (
        <>
            <h1>Welcome to Suraksha 2.0 Documentation</h1>

            <p>
                This comprehensive guide will help you get started with Suraksha 2.0 — your all-in-one platform for reporting
                safety incidents, observations, and conducting safety walks. Whether you're a first-time user or looking to explore
                advanced reporting features, you'll find everything you need here.
            </p>

            <div className="note">
                <strong>New to Suraksha 2.0?</strong> Start with our <a href="#quickstart">Quick Start Guide</a> to begin reporting
                in minutes.
            </div>

            <div className="image-row">
                <div className="image-container desktop">
                    <div className="image-wrapper">
                        <ImageModal thumbnail={rootDesktop} alt="Figure 1: Landing Screen - Desktop" />
                    </div>
                    <p className="image-caption"><em>Figure 1: Landing Screen - Desktop</em></p>
                </div>
                <div className="image-container mobile">
                    <div className="image-wrapper">
                        <ImageModal thumbnail={rootMob} alt="Figure 2: Landing Screen - Mobile" />
                    </div>
                    <p className="image-caption"><em>Figure 2: Landing Screen - Mobile</em></p>
                </div>
            </div>


            <h2>What is Suraksha 2.0?</h2>

            <p>
                Suraksha 2.0 is an enterprise safety reporting and management system designed to ensure workplace safety and
                compliance. It empowers employees and safety officers to quickly report hazards, track observations, and take
                corrective actions — all from a single, user-friendly interface.
            </p>

            <h3>Key Features</h3>

            <table>
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>Description</th>
                        <th>Access</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Incident Reporting</td>
                        <td>Log incidents, near-misses, and unsafe conditions with mandatory evidence uploads</td>
                        <td>All Users</td>
                    </tr>
                    <tr>
                        <td>Safety Walk</td>
                        <td>Conduct and record safety inspections with predefined checklists</td>
                        <td>Safety Officers</td>
                    </tr>
                    <tr>
                        <td>Real-Time Tracking</td>
                        <td>Monitor report status from submission to closure</td>
                        <td>All Users</td>
                    </tr>
                    <tr>
                        <td>Analytics Dashboard</td>
                        <td>View trends, hotspots, and compliance status in real-time</td>
                        <td>Admin & Safety Officers</td>
                    </tr>
                    <tr>
                        <td>Role-Based Access</td>
                        <td>Custom permissions for EHS Officers, Admins, and Employees</td>
                        <td>All Users</td>
                    </tr>
                </tbody>
            </table>

            <h2>Getting Started</h2>

            <p>Follow these simple steps to set up your Suraksha 2.0 account:</p>

            <ol className="step-list">
                <li>
                    <strong>Login to the System</strong><br />
                    Use your company credentials or provided access details.
                </li>
                <li>
                    <strong>Verify Your Profile</strong><br />
                    Update your contact details and department information.
                </li>
                <li>
                    <strong>Understand Your Role</strong><br />
                    Learn what features are available for your role (Employee, Safety Officer, Admin).
                </li>
                <li>
                    <strong>Start Reporting</strong><br />
                    Submit your first incident, observation, or safety walk entry.
                </li>
            </ol>

            <h3>Installation Requirements</h3>

            <div className="code-block">
    // Minimum system requirements
                Operating System: Android 8+, iOS 13+, or Web Browser (Chrome/Edge/Firefox latest)
                RAM: 2GB minimum, 4GB recommended
                Storage: 200MB available space (for mobile app)
                Internet: Broadband or 4G+ connection required
            </div>

            <div className="warning">
                <strong>Important:</strong> Always update Suraksha 2.0 to the latest version for improved features, security, and bug fixes.
            </div>

            <h2>Need Help?</h2>

            <p>If you encounter any issues or have questions, our support team is ready to assist:</p>

            <ul>
                <li>📧 Email us at <strong>atanu.das@acceleronsolutions.io</strong></li>
                <li>💬 Live chat available during working hours</li>
                <li>📞 Call our helpdesk at <strong>+91 33 6644 2041</strong></li>
                <li>🎥 Watch our <a href="#">training videos</a></li>
            </ul>

            <p>
                Ready to explore more? Check out our <a href="#dashboard">Dashboard Guide</a> or dive into the
                <a href="#role-based-access">Role-Based Access Manual</a> for detailed user permissions.
            </p>

        </>
    );
}
