import { Link } from 'react-router-dom'

export default function Nav01() {
	return (
		<div className="bg-teal-10 h-full shadow-lg">
			<div className="pl-10">
				<ul className="space-y-8 pt-10">
					<li className="flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
						<Link to="/">Home</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}
