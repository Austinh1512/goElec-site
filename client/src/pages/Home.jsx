import { Helmet } from "react-helmet"
import NavBar from "../components/NavBar"

export default function Home() {
    return (
        <>
            <Helmet>
                <title>goElec | Home</title>
            </Helmet>
            <NavBar />
            <h1 style={{color: "white"}}>Home</h1>
        </>
    )
}