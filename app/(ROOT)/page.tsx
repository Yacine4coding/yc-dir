import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home( { searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query;

  const posts = [
    {
      _id: '1',
      _createdAt: '01/01/2023',
      views: 120,
      author: 'John Doe',
      description: 'This is a description of the first post.',
      image: 'https://via.placeholder.com/150',
      category: 'Tech',
      title: 'First Post'
    },
    {
      _id: '2',
      _createdAt: '15/02/2023',
      views: 85,
      author: 'Jane Smith',
      description: 'This is a description of the second post.',
      image: 'https://via.placeholder.com/150',
      category: 'Business',
      title: 'Second Post'
    },
    {
      _id: '3',
      _createdAt: '10/03/2023',
      views: 200,
      author: 'Alice Johnson',
      description: 'This is a description of the third post.',
      image: 'https://via.placeholder.com/150',
      category: 'Health',
      title: 'Third Post'
    },
    {
      _id: '4',
      _createdAt: '25/04/2023',
      views: 150,
      author: 'Bob Brown',
      description: 'This is a description of the fourth post.',
      image: 'https://via.placeholder.com/150',
      category: 'Education',
      title: 'Fourth Post'
    },
    {
      _id: '5',
      _createdAt: '30/05/2023',
      views: 95,
      author: 'Charlie Davis',
      description: 'This is a description of the fifth post.',
      image: 'https://via.placeholder.com/150',
      category: 'Lifestyle',
      title: 'Fifth Post'
    }
  ];
  
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect with Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : 'All Startups'}
        </p>

        <ul className="mt-7 card_grid">
          {posts.length > 0 ? (
            posts.map((post: StartupCardType) =>(
              <StartupCard key={post?._id} post={post} />
            ))
          ):(
            <p className="no-results">No startups found!</p>
          )}
        </ul>
      </section>
    </>
  );
}
