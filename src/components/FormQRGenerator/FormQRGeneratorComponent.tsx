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
							<label htmlFor='username'>Name</label>
						</InputLeftAddon>
						<Input
							onChange={handleChange}
							id='username'
                            name='username'
							type='input'
							placeholder='ex.: Mauricio Mueller Zaccarias'
							aria-labelledby='name-label'
                            maxLength={50}
						/>
					</InputGroup>

					<FormErrorMessage>{errorsMessages.username}</FormErrorMessage>
				</FormControl>

				<FormControl isInvalid={!!errorsMessages.linkedIn}>
					<InputGroup>
						<InputLeftAddon>
							<label htmlFor='linkedIn'>LinkedIn</label>
						</InputLeftAddon>
						<Input
							onChange={handleChange}
							id='linkedIn'
                            name='linkedIn'
							type='input'
							placeholder='ex.: https://www.linkedin.com/in/mauriciomueller/'
							aria-labelledby='linkedIn-label'
                            maxLength={150}
						/>
					</InputGroup>

					<FormErrorMessage>{errorsMessages.linkedIn}</FormErrorMessage>
				</FormControl>

				<FormControl isInvalid={!!errorsMessages.gitHub}>
					<InputGroup>
						<InputLeftAddon>
							<label htmlFor='gitHub'>Github URL</label>
						</InputLeftAddon>
						<Input
							onChange={handleChange}
							id='gitHub'
                            name='gitHub'
							type='input'
							placeholder='ex.: https://github.com/mauriciomueller/'
							aria-labelledby='gitHub-label'
                            maxLength={150}
						/>
					</InputGroup>

					<FormErrorMessage>{errorsMessages.gitHub}</FormErrorMessage>
				</FormControl>

				<Stack direction='row' spacing={4}>
					<Button
                        type="submit"
						leftIcon={<BsQrCode />}
						colorScheme='pink'
						variant='solid'
						isLoading={isLoading}
						loadingText='Generating your Query Card'
						spinnerPlacement='start'
					>
						Generate your Query Card
					</Button>
				</Stack>
			</Stack>
		</form>
	)
}
