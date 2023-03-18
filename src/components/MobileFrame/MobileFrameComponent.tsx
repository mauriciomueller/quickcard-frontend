import { BsQrCode } from 'react-icons/bs'
import { useFormQRGeneratorContext } from '../../context/FormQRGeneratorContext'
import LogoComponent from '../Logo'
import { AiOutlineInfoCircle } from 'react-icons/ai';


export const MobileFrameComponent = () => {

	const { formData } = useFormQRGeneratorContext()
	
	return (
		<div className="-mx-4 h-[750px] px-9 sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
			<div className="relative aspect-[366/729] mx-auto max-w-[366px]">
				<div className="absolute inset-y-[calc(1/729*100%)] right-[calc(5/729*100%)] left-[calc(7/729*100%)] rounded-[calc(58/366*100%)/calc(58/729*100%)] shadow-2xl"></div>
				<div className="absolute top-[calc(23/729*100%)] left-[calc(23/366*100%)] grid h-[calc(686/729*100%)] w-[calc(318/366*100%)] transform grid-cols-1 overflow-hidden bg-gray-900 pt-[calc(23/318*100%)]">
					<div className="flex flex-col">
						<div className="flex justify-center px-4 pt-6 text-white">
							<LogoComponent />
						</div>
						<div className="mt-8 flex-auto rounded-t-2xl bg-white">
							<div className="p-4">

								<div className="pt-3 text-center">
										
											<div className="rounded-xl bg-blue-100 border border-blue-500  text-blue-700 px-4 py-3" role="alert">
  											<p className="text-sm flex items-center gap-2"><AiOutlineInfoCircle />This is only your QuickCard preview.</p>
											</div>											
											
											<h2 className="text-2xl md:text-3xl mt-8 text-gray-900 font-bold mb-0 md:mb-5 pl-2 pr-2">
												{(formData && formData?.username) ? formData.username : 'Mauricio Mueller'}
											</h2>

											<p className="text-primary-500 text-2xl sm:text-3xl font-bold pt-5 md:pt-10 mb-0 md:mb-2">Scan Me</p>
											<p className="text-8xl sm:text-9xl text-center w-100">
												<BsQrCode className="inline" />
											</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<svg
					viewBox="0 0 366 729"
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 h-full w-full fill-gray-100"
				>
					<path
						fill="#F2F2F2"
						fillRule="evenodd"
						clipRule="evenodd"
						d="M300.092 1c41.22 0 63.223 21.99 63.223 63.213V184.94c-.173.184-.329.476-.458.851.188-.282.404-.547.647-.791.844-.073 2.496.257 2.496 2.157V268.719c-.406 2.023-2.605 2.023-2.605 2.023a7.119 7.119 0 0 1-.08-.102v394.462c0 41.213-22.001 63.212-63.223 63.212h-95.074c-.881-.468-2.474-.795-4.323-.838l-33.704-.005-.049.001h-.231l-.141-.001c-2.028 0-3.798.339-4.745.843H66.751c-41.223 0-63.223-21.995-63.223-63.208V287.739c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 284.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-16.289c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 214.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-26.041a2.26 2.26 0 0 0 .093-.236l-.064-.01a3.337 3.337 0 0 1-.72-.12l-.166-.028A2 2 0 0 1 1 135.62v-24.611a2 2 0 0 1 1.671-1.973l.857-.143v-44.68C3.528 22.99 25.53 1 66.75 1h233.341ZM3.952 234.516a5.481 5.481 0 0 0-.229-.278c.082.071.159.163.228.278Zm89.99-206.304A4.213 4.213 0 0 0 89.727 24H56.864C38.714 24 24 38.708 24 56.852v618.296C24 693.292 38.714 708 56.864 708h250.272c18.15 0 32.864-14.708 32.864-32.852V56.852C340 38.708 325.286 24 307.136 24h-32.864a4.212 4.212 0 0 0-4.213 4.212v2.527c0 10.235-8.3 18.532-18.539 18.532H112.48c-10.239 0-18.539-8.297-18.539-18.532v-2.527Z"
					></path>
					<rect x="154" y="29" width="56" height="5" rx="2.5" fill="#D4D4D4"></rect>
				</svg>
				<img
					alt=""
					src="/img/mobile.svg"
					width="366"
					height="729"
					decoding="async"
					data-nimg="1"
					className="pointer-events-none absolute inset-0 h-full w-full"
					style={{ color: 'transparent' }}
				/>
			</div>
		</div>
	)
}
