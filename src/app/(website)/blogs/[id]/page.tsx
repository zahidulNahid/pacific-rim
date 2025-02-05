import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import BlogCommets from "./_components/blogCommets";
import BlogDetails from "./_components/blogDetails";
import BlogSidebar from "./_components/blogSidebar";

const Page = ({ }: { params: { id: string } }) => {
  return <div>
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-600 mb-2">Our Latest News From Blogs</h2>
        <div className="font-bold">
          <h3 className="text-xl text-green-600">Blog</h3>
          <div className='mt-[-10px]'>
            <SectionHeading heading={''} subheading={''} />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <BlogDetails />
          <BlogCommets />
        </div>
        <div className="md:w-1/3">
          <BlogSidebar />
        </div>
      </div>
    </div>
  </div>;
};

export default Page;
