const apiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/custom/v1/posts`;

export async function getPosts(categorySlug, quantity = 999) {
    const response = await fetch(`${apiUrl}?category=${categorySlug}&quantity=${quantity}`);
    const data = await response.json();
    
    return data; 
}

export async function getPost(slug, categorySlug) {
    const posts = await getPosts(categorySlug);
    const post = posts.find((insight) => insight.slug === slug);
    return post;
}
