import { Button } from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

type FooterSocialButtonsProps = {
	linkedinUrl: string;
  githubUrl: string;
}

export const FooterSocialButtonsComponent: React.FC<FooterSocialButtonsProps> = ({ linkedinUrl, githubUrl }) => {
	return (
		<div className="fixed bottom-0 left-0 right-0 bg-gray-900 py-4 bg-opacity-75 backdrop-filter backdrop-blur-md">
			<div className="flex justify-center items-center space-x-4">
				<Button
					leftIcon={<FaGithub />}
					colorScheme="gray"
					onClick={() => window.open(githubUrl, '_blank')}
				>
					GitHub
				</Button>
				<Button
					leftIcon={<FaLinkedin />}
					colorScheme="blue"
					onClick={() => window.open(linkedinUrl, '_blank')}
				>
					LinkedIn
				</Button>
			</div>
		</div>
	)
}
