import './App.css'
import LogoComponent from './components/Logo'
import FormQRGeneratorComponent from './components/FormQRGenerator'
import MainBannerComponent from './components/MainBanner'

function App() {
	return (
		<main className="flex h-full flex-col">
			<div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
						<div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
							<h1 className="mb-20">
								<LogoComponent />
							</h1>
							
							<h2 className="font-sans text-6xl font-medium tracking-tight text-gray-900">
								Simplify your virtual card queries.
							</h2>

							<p className="mt-6 text-lg text-gray-600 mb-10">
								Easily create and share virtual card QRcodes that efficiently
								redirect to the owner&lsquo;s page.
							</p>
							
							<FormQRGeneratorComponent />
						</div>
						<div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
							<MainBannerComponent />
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default App
