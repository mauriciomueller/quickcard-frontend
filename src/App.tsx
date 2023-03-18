import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { GenerateQuickCard } from './pages/GenerateQuickCard'
import { ShowUserQuickCard } from './pages/ShowUserQuickCard'


function App() {
	return (
		<main className="flex h-full flex-col">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navigate to="/generate" replace />} />
					<Route path="/generate" Component={GenerateQuickCard} />
					<Route path="/:slug" Component={ShowUserQuickCard} />
				</Routes>
			</BrowserRouter>
		</main>
	)
}

export default App
