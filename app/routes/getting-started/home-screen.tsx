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

export default function HomeScreen() {
    return (
        <>
            <section className="login-guide">
                <h2>Home Screen</h2>
                <p>When you log in to Suraksha 2.0 for the first time, you are prompted to verify your account details. This ensures all your information and roles are correct before using the app.</p>

                <div className="login-steps">

                </div>
            </section>


        </>
    );
}
