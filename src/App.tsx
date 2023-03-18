import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { GenerateQuickCard } from './pages/GenerateQuickCard'
import { ShowUserQuickCard } from './pages/ShowUserQuickCard'
import './App.css'

function App() {
	return (
		<main className="flex h-full flex-col">
			<Routes>
				<Route path="/" element={<Navigate to="/generate" replace />} />
				<Route path="/generate" Component={GenerateQuickCard} />
				<Route path="/:slug" Component={ShowUserQuickCard} />
			</Routes>
		</main>
	)
}

export default App
