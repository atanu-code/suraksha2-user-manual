import type { Route } from "../+types/home";

import rootMob from "../../assets/images/root-mob.png";
import rootDesktop from "../../assets/images/root-desktop.png";
import fpMob from "../../assets/images/fp-m.png";
import fpDesktop from "../../assets/images/fp-d.png";
import loginD from "../../assets/images/login-d.png";
import loginM from "../../assets/images/login-m.png";
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
                <h2>Logging In</h2>
                <p>Access Suraksha 2.0 quickly and securely using your registered Email or User ID with your password.</p>

                <div className="login-steps">
                    <div className="step">
                        <h3>1. Open the App</h3>
                        <p>Launch Suraksha 2.0 in your browser or tap the installed PWA icon on Android/iOS. Then Click on Login</p>
                        <div className="image-row">
                            <div className="image-container desktop">
                                <div className="image-wrapper">
                                    <ImageModal thumbnail={rootDesktop} alt="Figure 3: Landing Screen - Desktop" />
                                </div>
                                <p className="image-caption"><em>Figure 3: Landing Screen - Desktop</em></p>
                            </div>
                            <div className="image-container mobile">
                                <div className="image-wrapper">
                                    <ImageModal thumbnail={rootMob} alt="Figure 4: Landing Screen - Mobile" />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="step">
                        <h3>2. Enter Your Details</h3>
                        <p>Type your <strong>Email</strong> or <strong>User ID</strong> in the first field and your password in the second.</p>
                        <div className="image-row">
                            <div className="image-container desktop">
                                <div className="image-wrapper">
                                    <ImageModal thumbnail={loginD} alt="Figure 5: Login Screen - Desktop" />
                                </div>
                                <p className="image-caption"><em>Figure 5: Login Screen - Desktop</em></p>
                            </div>
                            <div className="image-container mobile">
                                <div className="image-wrapper">
                                    <ImageModal thumbnail={loginM} alt="Figure 6: Login Screen - Mobile" />
                                </div>
                                <p className="image-caption"><em>Figure 6: Login Screen - Mobile</em></p>
                            </div>
                        </div>
                    </div>

                    <div className="step">
                        <h3>3. Sign In</h3>
                        <p>Click <strong>Login</strong> to access your dashboard. You will be redirected based on your role permissions.</p>
                    </div>

                    <div className="step">
                        <h3>4. Forgot Password?</h3>
                        <p>Click the <em>Forgot Password</em> link to reset it, or contact your administrator for account recovery.</p>
                        <div className="image-row">
                            <div className="image-container desktop">
                                <div className="image-wrapper">
                                    <ImageModal thumbnail={fpDesktop} alt="Figure 7: Landing Screen - Desktop" />
                                </div>
                                <p className="image-caption"><em>Figure 7: Landing Screen - Desktop</em></p>
                            </div>
                            <div className="image-container mobile">
                                <div className="image-wrapper">
                                    <ImageModal thumbnail={fpMob} alt="Figure 8: Landing Screen - Mobile" />
                                </div>
                                <p className="image-caption"><em>Figure 8: Landing Screen - Mobile</em></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
