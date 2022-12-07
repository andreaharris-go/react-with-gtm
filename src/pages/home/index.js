import AppRouter from '../../components/appRouter'
import {Link} from "react-router-dom";

export default function Home() {
	return (
		<>
			<AppRouter />
			<main className="main-area overflow-hidden">
        <h1>React with GTM</h1>
        <div><h2>Home</h2></div>
        <div><h2 className="text-blue-400 hover:font-bold"><Link to="/product">Go to Product</Link></h2></div>
			</main>
		</>
	)
}
