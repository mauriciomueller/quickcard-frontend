import { Button, Skeleton } from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

type FooterSocialButtonsProps = {
	linkedinUrl: string
  githubUrl: string
	isLoading: boolean
}

export const FooterSocialButtonsComponent: React.FC<FooterSocialButtonsProps> = ({ linkedinUrl, githubUrl, isLoading }) => {
	return (
		<div className="fixed bottom-0 left-0 right-0 bg-gray-900 py-4 bg-opacity-75 backdrop-filter backdrop-blur-md">
			<div className="flex justify-center items-center space-x-4">
				<Skeleton isLoaded={!isLoading}>
					<Button
						leftIcon={<FaGithub />}
						colorScheme="gray"
						onClick={() => window.open(githubUrl, '_blank')}
					>
						GitHub
					</Button>
				</Skeleton>
				<Skeleton isLoaded={!isLoading}>
					<Button
						leftIcon={<FaLinkedin />}
						colorScheme="blue"
						onClick={() => window.open(linkedinUrl, '_blank')}
					>
						LinkedIn
					</Button>
				</Skeleton>
			</div>
		</div>
	)
}
