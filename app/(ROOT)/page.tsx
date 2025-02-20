import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupCardType } from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";


export default async function Home( { searchParams }: { 
  searchParams: Promise<{ query?: string }> 
}) {

  const query = (await searchParams).query;

  const posts = await client.fetch(STARTUPS_QUERY);
  
    

  // const posts = [
  //   {
  //     _id: '1',
  //     _createdAt: new Date(),
  //     views: 120,
  //     author: { _id: 1, name:'John Doe'},
  //     description: 'This is a description of the first post.',
  //     image: `https://placehold.co/600x400/EEE/31343C?font=playfair-display&text=Yacine4real`,
  //     category: 'Tech',
  //     title: 'First Post'
  //   },
  //   {
  //     _id: '3',
  //     _createdAt: new Date(),
  //     views: 200,
  //     author: { _id: 2, name:'Alice Johnson'},
  //     description: 'This is a description of the third post.',
  //     image: `https://placehold.co/600x400/EEE/31343C?font=playfair-display&text=Yacine4real`,
  //     category: 'Health',
  //     title: 'Third Post'
  //   },
  //   {
  //     _id: '4',
  //     _createdAt: new Date(),
  //     views: 150,
  //     author: { _id: 3, name:'Bob Brown'},
  //     description: 'This is a description of the fourth post.',
  //     image: `https://placehold.co/600x400/EEE/31343C?font=playfair-display&text=Yacine4real`,
  //     category: 'Education',
  //     title: 'Fourth Post'
  //   },
  //   {
  //     _id: '5',
  //     _createdAt: new Date(),
  //     views: 95,
  //     author: { _id: 4, name:'Charlie Davis'},
  //     description: 'This is a description of the fifth post.',
  //     image: `https://placehold.co/600x400/EEE/31343C?font=playfair-display&text=Yacine4real`,
  //     category: 'Lifestyle',
  //     title: 'Fifth Post'
  //   },
  //   {
  //     _id: '2',
  //     _createdAt: new Date(),
  //     views: 85,
  //     author: { _id: 5, name:'Jane Smith'},
  //     description: 'This is a description of the second post.',
  //     image: `https://placehold.co/600x400/EEE/31343C?font=playfair-display&text=Yacine4real`,
  //     category: 'Business',
  //     title: 'Second Post'
  //   }
  // ];
  
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
