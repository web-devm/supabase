import supabase from "@/lib/supabase";

export default async function Home() {


  

  const { data } = await supabase
    .from("users")
    .select("*");




  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {data && (
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl font-bold text-center">
            Hello, {data[1].user_name}!
          </h1>
          <p className="text-lg text-center">
            Welcome to the Next.js app with Supabase integration!
          </p>
        </div>
      )}
    </div>
  );
}
