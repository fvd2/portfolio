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
			<div className="max-w-7xl mx-auto">
				<About />
				<ProjectOverview />
			</div>
			<Footer />
		</div>
	)
}

export default App
