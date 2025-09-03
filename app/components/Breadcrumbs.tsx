import { Link, useLocation } from "react-router";


export default function Breadcrumbs() {
    const location = useLocation();
    const paths = location.pathname.split("/").filter(Boolean);

    return (
        // <nav className="text-sm text-gray-500 mb-4">
        //     <Link to="/">Home</Link>
        //     {paths.map((segment, i) => {
        //         const url = "/" + paths.slice(0, i + 1).join("/");
        //         return (
        //             <span key={url}>
        //                 {" / "}
        //                 <Link to={url} className="capitalize">{segment}</Link>
        //             </span>
        //         );
        //     })}
        // </nav>
        <div className="breadcrumb">
            <a href="#">Home</a>
            <span>›</span>
            <a href="#">Getting Started</a>
            <span>›</span>
            <span>Overview</span>
        </div>
    );
}
