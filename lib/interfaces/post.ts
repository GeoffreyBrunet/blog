export interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
}

export interface PostPropsList {
  posts: Array<PostItemProps>;
}
