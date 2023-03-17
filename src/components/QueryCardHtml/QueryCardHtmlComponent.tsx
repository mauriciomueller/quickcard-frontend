import { useFormQRGeneratorContext } from '../../context/FormQRGeneratorContext'
import { useEffect, useRef, useState } from 'react'
import { getDeviceDimensions } from '../../services/getDeviceDimensions'

export const QueryCardHtmlComponent = () => {
	const { formData, userQueryCodeImage, setElementRef } = useFormQRGeneratorContext()

	useEffect(() => {
		setElementRef(elementRef)
	}, [userQueryCodeImage])

	useEffect(() => {
		if(formData.deviceId) {
			const dimensions = getDeviceDimensions(formData.deviceId);
			if (dimensions) {
				setWidth(dimensions.width + 'px');
				setHeight(dimensions.height + 'px');
			}
		}
		
	}, [formData])

	const elementRef = useRef(null)
	
	const [width, setWidth] = useState('400px')
	const [height, setHeight] = useState('600px')

	return (
		<div
			ref={elementRef}
			style={{
				width: width,
				height: height,
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
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					borderTopLeftRadius: '20px',
					borderTopRightRadius: '20px',
					padding: '60px 60px'
				}}
			>
				<div style={{ 
					fontFamily: 'sans-serif', 
					fontSize: '2rem',
					fontWeight: 'bold',
					marginBottom: '40px',
					lineHeight: '2.2rem',
					textAlign: 'center',
					}}>
					{formData && formData?.username}
				</div>
				<div style={{ 
					fontFamily: 'sans-serif', 
					fontSize: '2rem',
					fontWeight: 'bold',
					color: 'rgb(213 63 140)',
					marginBottom: '20px',
					}}>
					Scan Me
				</div>
				<div>
					{userQueryCodeImage && <img src={userQueryCodeImage} alt="QR code" />}
				</div>
			</div>
		</div>
	)
}
