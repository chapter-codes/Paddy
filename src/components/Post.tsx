import Link from 'next/link'


export default function Post({post}){
	return(
		<div className="text-center py-4" >
			{/*<Link href={'posts/'+ post.id}>*/}
			<p className=" text-lg font-bold text underline">
				<Link href={'posts/'+post.id}>{post.title}</Link>
			</p>
				
			{/*</Link>*/}
			<p className="">{post.author}</p>
			<p className="text-xs font-bold">{post.date}</p>
		</div>
		)
}