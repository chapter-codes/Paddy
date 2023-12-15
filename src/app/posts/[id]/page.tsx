import {Metadata} from 'next'
import {getPost} from '@lib/posts'
import SinglePost from  '@comp/SinglePost'
import {notFound} from 'next/navigation'

export const metadata: Metadata= {
	title:'post',
	description:''
}

type Props={
	params:{
		id:number| string
	}
}

export default function Posts({params:{id}}:props){
	console.log(id)
	const post: post = getPost(id)
	console.log(post)

	if(!post){
		notFound()
	}
	return (
		<>
			<h1 className='text-xl text-center py-6 font-bold font-sans w-full bg-orange-500 text-white'> Post page
			</h1>
			<SinglePost post={post} />
		</>
	)

}