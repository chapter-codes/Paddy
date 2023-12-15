import {Metadata} from 'next'
import {getPosts} from '@lib/posts'
import Post from  '@comp/Post'

export const metadata: Metadata= {
	title:'posts',
	description:''
}

export default function Posts(){
	const posts= getPosts()
	// console.log(posts)
	return (
		<>
			<h1 className='text-xl text-center py-6 font-bold font-sans w-full bg-orange-500 text-white'> Posts pages
			</h1>
			{
				posts.map(post=> <Post key={post.id} post={post} />)
			}
		</>
	)

}