import { useFormQRGeneratorContext } from '../../context/FormQRGeneratorContext'
import { useEffect, useRef } from 'react'

export const QueryCardHtmlComponent = () => {
	const { formData, userQueryCodeImage, setElementRef } = useFormQRGeneratorContext()

	useEffect(() => {
		setElementRef(elementRef)
	}, [userQueryCodeImage])

	const elementRef = useRef(null)

	return (
		<div
			ref={elementRef}
			style={{
				width: '400px',
				height: '600px',
				overflow: 'hidden',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				backgroundColor: 'rgb(17 24 39)',
			}}
		>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					padding: '20px 0',
				}}
			>
				<img
					style={{
						width: '40px',
						height: '40px',
						marginRight: '10px',
						marginTop: '0px',
						display: 'inline',
					}}
					src="/img/query-card-logo.svg"
					alt="QueryCard logo"
				/>

				<p
					style={{
						fontFamily: 'sans-serif',
						fontWeight: 'bold',
						fontSize: '34px',
						lineHeight: '38px',
						paddingTop: '-38px',
						marginTop: '-38px',
						color: 'white',
					}}
				>
					QueryCard
				</p>
			</div>
			<div
				style={{
					backgroundColor: 'white',
					width: '400px',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					borderTopLeftRadius: '20px',
					borderTopRightRadius: '20px',
				}}
			>
				<div style={{ fontFamily: 'sans-serif', fontSize: '1rem' }}>
					{formData && formData?.username}
				</div>
				{userQueryCodeImage && <img src={userQueryCodeImage} alt="QR code" />}
			</div>
		</div>
	)
}
