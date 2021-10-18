import { useState } from 'react'
import Contact from './Contact'
import Footer from './Footer'
import NavBar from './NavBar'
import About from './About'
import ProjectOverview from './ProjectOverview'

const App = () => {
	const [openForm, setOpenForm] = useState(false)

	return (
		<div className="bg-gray-100">
			<Contact open={openForm} setOpen={setOpenForm} />
			<NavBar setOpenForm={setOpenForm} />
			<main className="max-w-7xl mx-auto">
				<About />
				<ProjectOverview />
			</main>
			<Footer />
		</div>
	)
}

export default App
