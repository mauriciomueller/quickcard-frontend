import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react'

export const QuickCardProfileErrorComponent = () => {
	return (
		<div className="w-full h-screen bg-gradient-to-br from-blue-500 via-violet-500 to-primary-500 overflow-x-hidden p-8">
			<div className="max-w-2xl mx-auto">
				<Alert
					status="error"
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
					textAlign="center"
					height="200px"
					className="bg-gray-900 rounded-3xl p-12 text-white bg-opacity-75 backdrop-filter backdrop-blur-md text-white"
					>
					<AlertIcon boxSize="40px" mr={0} />
	
					<AlertTitle mt={4} mb={1} fontSize="lg">
						We are very sorry for that!
					</AlertTitle>
				
					<AlertDescription maxWidth="sm">
						<p>Oh no! Something went wrong while loading this user QuickCard profile. Please try again later.</p>
					</AlertDescription>
	
				</Alert>
			</div>
		</div>
	)
}