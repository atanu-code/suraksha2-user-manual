import type { Route } from "../+types/home";


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Who Should Use" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function SystemRequirements() {
    return (
        <>

            <h2>System Requirements</h2>

            <p>Ensure your device meets the following requirements for smooth use of Suraksha 2.0. The application is available via browser and can be installed as a Progressive Web App (PWA) for Android and iOS.</p>

            <ol className="step-list">
                <li>
                    <strong>Supported Platforms</strong><br />
                    Windows 10+, macOS 10.14+, Android 9+, iOS 13+.
                </li>
                <li>
                    <strong>Minimum Hardware</strong><br />
                    4GB RAM (8GB recommended), 2GB free storage space, and stable broadband or 4G/5G internet connection.
                </li>
                <li>
                    <strong>Browser Requirements</strong><br />
                    Latest version of Chrome, Edge, or Safari. For PWA installation, use Chrome on Android and Safari on iOS.
                </li>
                <li>
                    <strong>PWA Installation</strong><br />
                    Install Suraksha 2.0 as a PWA for faster load times, offline draft reporting, and home-screen launch.
                    <em>Tip:</em> Enable notifications, storage, and camera permissions for the best experience.
                </li>
            </ol>

            <div className="warning">
                <strong>Important:</strong> Using outdated browsers or unsupported operating systems may cause limited functionality or security issues.
            </div>


        </>
    );
}
