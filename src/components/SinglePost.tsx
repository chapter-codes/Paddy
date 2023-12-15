type Props={
	post:post
}

export default function SinglePost({post}:Props){
	return (

			<div className=" py-4 px-4" >
			{/*<Link href={'posts/'+ post.id}>*/}
			<p className=" text-lg font-bold text underline text-center py-4">
				{post.title} 
			</p>
				
			{/*</Link>*/}
			<p className="py-1">{post.author}</p>
			<p className="text-xs font-bold">{post.date}</p>
			<p className="text-bases py-6 font-sans">{post.content}</p>

		</div>
	)
}