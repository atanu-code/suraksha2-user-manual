import type { Route } from "../+types/home";

import firstTimeMobile from "../../assets/images/fls-m.png";
import firstTimeDesktop from "../../assets/images/fls-d.png";
import { ImageModal } from "~/components/ImageModal";
export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Who Should Use" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function LoggingIn() {
    return (
        <>
            <section className="login-guide">
                <h2>First-Time Login Setup</h2>
                <p>When you log in to Suraksha 2.0 for the first time, you are prompted to verify your account details. This ensures all your information and roles are correct before using the app.</p>

                <div className="login-steps">
                    <div className="step">
                        <h3>1. First-Time Setup Page</h3>
                        <p>After entering your credentials and logging in, the <strong>First-Time Setup</strong> screen will appear automatically for first-time users.</p>
                        <div className="image-row">
                            <div className="image-container desktop">
                                <div className="image-wrapper">
                                    <ImageModal thumbnail={firstTimeDesktop} alt="Figure 9: First-Time Setup - Desktop" />
                                </div>
                                <p className="image-caption"><em>Figure 9: First-Time Setup - Desktop</em></p>
                            </div>
                            <div className="image-container mobile">
                                <div className="image-wrapper">
                                    <ImageModal thumbnail={firstTimeMobile} alt="Figure 10: First-Time Setup - Mobile" />
                                </div>
                                <p className="image-caption"><em>Figure 10: First-Time Setup - Mobile</em></p>
                            </div>
                        </div>
                    </div>

                    <div className="step">
                        <h3>2. Review Your Details</h3>
                        <p>The page displays your account information including:</p>
                        <ul>
                            <li>✔️ Designation</li>
                            <li>✔️ Email</li>
                            <li>✔️ Phone</li>
                            <li>✔️ Department</li>
                            <li>✔️ Job Function</li>
                            <li>✔️ Role(s) and assigned units</li>
                        </ul>
                        <p>Carefully verify that all information is accurate.</p>
                    </div>

                    <div className="step">
                        <h3>3. Confirm or Skip</h3>
                        <p>You have two options:</p>
                        <ul>
                            <li>✅ <strong>Confirm:</strong> Click <em>Confirm</em> to save your details. This screen will not appear again unless an admin triggers it.</li>
                            <li>✅ <strong>Skip:</strong> Click <em>Skip</em> to bypass confirmation. You will be prompted again on the next login.</li>
                        </ul>
                    </div>

                    <div className="step">
                        <h3>4. Admin Re-trigger</h3>
                        <p>Administrators can force the First-Time Setup page to appear for a user if their data needs to be updated or corrected.</p>
                    </div>
                </div>
            </section>


        </>
    );
}
