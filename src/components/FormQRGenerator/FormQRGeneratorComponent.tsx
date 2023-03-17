import {
	FormControl,
	FormErrorMessage,
	Input,
	InputGroup,
	InputLeftAddon,
	Stack,
	Button,
	Select,
	AlertIcon,
	Alert,
} from '@chakra-ui/react'
import { BsQrCode } from 'react-icons/bs'
import { useFormQRGeneratorContext } from '../../context/FormQRGeneratorContext'
import { useState, useRef } from 'react'
import QueryCardHtmlComponent from '../QueryCardHtml'
import { devices } from '../../constants/devices'

export const FormQRGeneratorComponent = () => {
	const {
		handleChange,
		formData,
		generateQueryCardImage,
		isLoading,
		errorsMessages,
		successMessage,
	} = useFormQRGeneratorContext()

	const [loading, setLoading] = useState(false)
	const elementRef = useRef(null)

	return (
		<>
			{successMessage && (
				<Alert className="rounded-md" status="success" variant="left-accent">
					<AlertIcon />
					Your QueryCard Image was generated with success!
				</Alert>
			)}

			{errorsMessages && errorsMessages.alert && (
				<Alert className="rounded-md" status="error" variant="left-accent">
					<AlertIcon />
					There was an error processing your request!
				</Alert>
			)}

			<form
				onSubmit={(e) => {
					e.preventDefault()
					generateQueryCardImage(formData, elementRef)
				}}
			>
				<Stack spacing={4}>
					<FormControl isInvalid={!!errorsMessages.username}>
						<InputGroup>
							<InputLeftAddon>
								<label htmlFor="username">Name</label>
							</InputLeftAddon>
							<Input
								isRequired
								onChange={handleChange}
								id="username"
								name="username"
								type="input"
								placeholder="ex.: Mauricio Mueller Zaccarias"
								aria-labelledby="name-label"
								maxLength={50}
							/>
						</InputGroup>

						<FormErrorMessage>{errorsMessages.username}</FormErrorMessage>
					</FormControl>

					<FormControl isInvalid={!!errorsMessages.linkedInUrl}>
						<InputGroup>
							<InputLeftAddon>
								<label htmlFor="linkedInUrl">LinkedIn</label>
							</InputLeftAddon>
							<Input
								isRequired
								onChange={handleChange}
								id="linkedInUrl"
								name="linkedInUrl"
								type="input"
								placeholder="ex.: https://linkedin.com/in/mauriciomueller/"
								aria-labelledby="linkedInUrl-label"
								maxLength={150}
							/>
						</InputGroup>

						<FormErrorMessage>{errorsMessages.linkedInUrl}</FormErrorMessage>
					</FormControl>

					<FormControl isInvalid={!!errorsMessages.gitHubUrl}>
						<InputGroup>
							<InputLeftAddon>
								<label htmlFor="gitHubUrl">Github URL</label>
							</InputLeftAddon>
							<Input
								isRequired
								onChange={handleChange}
								id="gitHubUrl"
								name="gitHubUrl"
								type="input"
								placeholder="ex.: https://github.com/mauriciomueller/"
								aria-labelledby="gitHubUrl-label"
								maxLength={150}
							/>
						</InputGroup>

						<FormErrorMessage>{errorsMessages.gitHubUrl}</FormErrorMessage>
					</FormControl>
					<FormControl>
						<Select
							isRequired
							id="deviceId"
							name="deviceId"
							onChange={handleChange}
							placeholder="Select your mobile device"
						>
							{Object.entries(devices).map(([key, device]) => {
								return (
									<option key={key} value={key}>
										{device.name} ({device.width}x{device.height})
									</option>
								)
							})}
						</Select>
					</FormControl>
					<Stack direction="row" spacing={4}>
						<Button
							type="submit"
							leftIcon={<BsQrCode />}
							colorScheme="pink"
							variant="solid"
							isLoading={isLoading}
							loadingText="Generating your Query Card"
							spinnerPlacement="start"
						>
							Generate your QueryCard
						</Button>
					</Stack>
				</Stack>
			</form>

			<div className="h-0 overflow-hidden">
				<QueryCardHtmlComponent />
			</div>
		</>
	)
}
