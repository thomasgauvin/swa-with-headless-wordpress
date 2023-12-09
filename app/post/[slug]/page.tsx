import { BlogPost } from '@/app/components/blogpost';
import { Post } from '@/app/lib/types';

const wordpressUrl = process.env.WORDPRESS_URL;

export default async function BlogPage({ params }: { params: { slug: string } }) {  
    // Fetch the blog post data based on the slug (you may use an API or other method)
    const response = await fetch(`${wordpressUrl}/wp-json/wp/v2/posts/?slug=${params.slug}&_embed`);
    const post: Post = (await response.json())[0];

    return (
      <div>
        <BlogPost post={post} />
      </div>
    );
};