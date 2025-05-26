const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || 'https://your-wordpress-site.com/wp-json/wp/v2';

export interface Post {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
}

export interface TeamMember {
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    role: string;
    image: string;
    description: string;
  };
}

export interface Testimonial {
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    quote: string;
    author: string;
    role: string;
    image: string;
  };
}

async function fetchAPI(endpoint: string) {
  const res = await fetch(`${WORDPRESS_API_URL}${endpoint}`);
  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json;
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  const data = await fetchAPI('/team-members');
  return data;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const data = await fetchAPI('/testimonials');
  return data;
}

export async function getPageBySlug(slug: string): Promise<Post> {
  const data = await fetchAPI(`/pages?slug=${slug}`);
  return data[0];
} 