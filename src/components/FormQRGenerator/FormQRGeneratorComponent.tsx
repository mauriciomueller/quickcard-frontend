import {
	FormControl,
	FormErrorMessage,
	Input,
	InputGroup,
	InputLeftAddon,
	Stack,
	Button,
} from '@chakra-ui/react'
import { BsQrCode } from 'react-icons/bs'
import { useFormQRGeneratorContext } from '../../context/FormQRGeneratorContext'

export const FormQRGeneratorComponent = () => {
	const { handleChange, formData, generateQueryCard, isLoading, errorsMessages, successMessage } =
		useFormQRGeneratorContext()

	return (
		<form onSubmit={generateQueryCard}>
			<Stack spacing={4}>
				<FormControl isInvalid={!!errorsMessages.username}>
					<InputGroup>
						<InputLeftAddon>
							<label htmlFor="username">Name</label>
						</InputLeftAddon>
						<Input
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

				<FormControl isInvalid={!!errorsMessages.linkedIn}>
					<InputGroup>
						<InputLeftAddon>
							<label htmlFor="linkedInUrl">LinkedIn</label>
						</InputLeftAddon>
						<Input
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
	)
}
