
export interface Author {
  id: string;
  name: string;
  imageUrl: string;
  bio: string;
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  publishDate: string;
  authorId: string;
}
