import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Skeleton, SkeletonText, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';
import FooterSocialButtonsComponent from '../../components/FooterSocialButtons';
import { backendApi } from '../../services/backendApi';
import { QuickCardProfileErrorComponent } from './QuickCardProfileErrorComponent';

function fetchUserData(slug) {
  return backendApi.get(`user-quick-card/${slug}`).then((response) => response.data);
}

export const QuickCardProfileComponent = () => {
  const { slug } = useParams<{ slug: string }>();

  const { isLoading, error, data } = useQuery(['userQuickCard', slug], () => fetchUserData(slug));

  if (error) {
    return <QuickCardProfileErrorComponent />
  }

  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-500 via-violet-500 to-primary-500 overflow-x-hidden p-8">
			<div className="max-w-4xl mx-auto">
				<h1 className="font-sans text-5xl md:text-6xl font-medium tracking-tight text-white text-center p-12 mb-4">
					Hello, my name is
					
					<Skeleton height="60px" isLoaded={!isLoading}>
						<span className="text-gray-900 block">{data?.result.username}</span>
					</Skeleton>					
				</h1>

				<section className="bg-gray-900 rounded-3xl p-12 text-white pb-8 mb-12 bg-opacity-75 backdrop-filter backdrop-blur-md">
					<h2 className="font-sans text-5xl md:text-6xl font-medium tracking-tight mb-6">
						<Skeleton isLoaded={!isLoading}>My History</Skeleton>
					</h2>
					<SkeletonText mt="4" noOfLines={10} spacing="4" lineHeight="1.5" isLoaded={!isLoading}>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod lacus eget purus vestibulum, a porttitor sapien vestibulum.</p>
						<p>Nullam eget mauris sed lorem malesuada fermentum. Suspendisse potenti. In convallis dapibus tellus, sed consequat metus sollicitudin vel. Nunc id turpis velit. Sed fermentum luctus malesuada. Duis nec lorem vel mi mollis commodo. Donec euismod, purus sed auctor commodo, lacus quam scelerisque nibh, nec convallis elit elit non risus. Vivamus malesuada libero in metus rhoncus cursus. Maecenas id lacus at sapien malesuada tincidunt. Integer quis mi id lectus commodo ullamcorper vitae nec tortor. Aenean tincidunt mollis dui, eu sagittis lectus vestibulum in.</p>
						<p>Etiam semper commodo nisl, sed posuere justo blandit sit amet. In commodo tellus ac massa tempor laoreet. Nulla malesuada purus sapien, eget tristique augue efficitur sit amet.</p>
						<p>Etiam semper commodo nisl, sed posuere justo blandit sit amet. In commodo tellus ac massa tempor laoreet. Nulla malesuada purus sapien, eget tristique augue efficitur sit amet.</p>
					</SkeletonText>
				</section>
			</div>
      
			
				<FooterSocialButtonsComponent
					linkedinUrl={data?.result.linkedin_url}
					githubUrl={data?.result.github_url}
					isLoading={isLoading}
				/>
    </div>
  );
};