import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { backendApi } from '../services/backendApi'

function fetchUserData(slug) {
	return backendApi.get(`user-quick-card/${slug}`).then((response) => response.data)
}

export function ShowUserQuickCard() {
	const { slug } = useParams<{ slug: string }>()

	const { isLoading, error, data } = useQuery(['userQuickCard', slug], () => fetchUserData(slug))

	if (isLoading) return <p>Loading...</p>
	if (error) return <p>Error: {error.message}</p>

	return (
		<div>
			<h1>{data.username}</h1>
			<p>
				LinkedIn:{' '}
				<a href={data.linkedInUrl} target="_blank" rel="noreferrer">
					{data.linkedInUrl}
				</a>
			</p>
			<p>
				GitHub:{' '}
				<a href={data.gitHubUrl} target="_blank" rel="noreferrer">
					{data.gitHubUrl}
				</a>
			</p>
		</div>
	)
}
