import { db } from "~/server/db";

const mockURLS = [
  "https://utfs.io/f/cfbf5b10-1d26-4432-88a8-d5dbddd0893d-kda7e9.png",
  "https://utfs.io/f/5f760604-6cb1-494d-b85a-9d9c3f305589-6vaon7.png",
  "https://utfs.io/f/03498369-903c-4409-98e1-c6ece0ecb8b3-z6a2hx.jpg",
  "https://utfs.io/f/7407577e-701c-4945-bbc7-52526bd18153-nm33wo.png",
];

const mockImages = mockURLS.map((url, index) => ({ id: index + 1, url: url }));

export default async function HomePage() {
  const allPosts = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap gap-10">
        {allPosts.map((post) => (
          <div key={post.id} className="w-48 p-2">
            <div className="w-full">{post.name}</div>
          </div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48 p-2">
            <img src={image.url} className="w-full" alt="gallery" />
          </div>
        ))}
      </div>
      <div>Hello gallery in progress</div>
    </main>
  );
}
