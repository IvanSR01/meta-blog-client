import { Post } from './post.interface'

export interface Tag {
	id: number
	name: string
	viewCount: number
	posts: Post[]
}
