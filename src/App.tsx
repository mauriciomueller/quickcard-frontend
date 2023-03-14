import './App.css'
import LogoComponent from './components/Logo'
import MobileFrameComponent from './components/MobileFrame'
import FormQRGeneratorComponent from './components/FormQRGenerator'

function App() {
	return (
		<main className='flex h-full flex-col'>
			<div className='overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36'>
				<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
					<div className='lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20'>
						<div className='relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6'>
							<h1 className='mb-20'>
								<LogoComponent />
							</h1>
							<h2 className='font-sans text-6xl font-medium tracking-tight text-gray-900'>
								Simplify your virtual card queries.
							</h2>
							<p className='mt-6 text-lg text-gray-600 mb-10'>
								Easily create and share virtual card query codes that efficiently
								redirect to the owner's page.
							</p>
							
							<FormQRGeneratorComponent />
						</div>

						<MobileFrameComponent />
					</div>
				</div>
			</div>
		</main>
	)
}

export default App
