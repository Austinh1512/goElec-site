import { Helmet } from "react-helmet"
import HeroBanner from "../components/HeroBanner"

export default function Home() {
    return (
        <>
            <Helmet>
                <title>goElec | Home</title>
            </Helmet>
            <HeroBanner />
        </>
    )
}