
const posts=[
	{	
		id:2,
		author:'Churchill chapters',
		date:'november 22, 2023',
		title:'nextjs with typescript',
		content:'nextjs is used for serverside rendering, an alternate approach for client side renderinfg as used with React.js. Typescript on the other hand is a statically typed tool for javascript code used to writing robust code whiich compiles down to javascript.'
	},
	{	
		id:3,
		author:'Churchill chapters',
		date:'november 23, 2023',
		title:'nextjs with typescript',
		content:'nextjs is used for serverside rendering, an alternate approach for client side renderinfg as used with React.js. Typescript on the other hand is a statically typed tool for javascript code used to writing robust code whiich compiles down to javascript.'
	}


]


export function getPosts(){
	return posts.map(item=>{
		delete item.content
		return item
	})
}

export function getPost(id:numbeer| string){
	return posts.filter(post=>post.id==id)[0]
}