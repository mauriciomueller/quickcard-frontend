import { Button, Skeleton } from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export type FooterSocialButtonsPropsType = {
	linkedInUrl: string
  gitHubUrl: string
	isLoading: boolean
}

export const FooterSocialButtonsComponent: React.FC<FooterSocialButtonsPropsType> = ({ linkedInUrl, gitHubUrl, isLoading }) => {
	return (
		<div className="fixed bottom-0 left-0 right-0 bg-gray-900 py-4 bg-opacity-75 backdrop-filter backdrop-blur-md">
			<div className="flex justify-center items-center space-x-4">
				<Skeleton data-testid="gitHubSkeleton" isLoaded={!isLoading}>
					<Button
						data-testid="gitHubButton"
						leftIcon={<FaGithub />}
						colorScheme="gray"
						onClick={() => window.open(gitHubUrl, '_blank')}
					>
						GitHub
					</Button>
				</Skeleton>
				<Skeleton data-testid="linkedInSkeleton" isLoaded={!isLoading}>
					<Button
						data-testid="linkedInButton"
						leftIcon={<FaLinkedin />}
						colorScheme="blue"
						onClick={() => window.open(linkedInUrl, '_blank')}
					>
						LinkedIn
					</Button>
				</Skeleton>
			</div>
		</div>
	)
}
