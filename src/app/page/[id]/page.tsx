import AllBlogPostsSection from '@components/AllBlogPostsSection';
import Banner from '@components/Banner';
import RecentBlogPostsSection from '@components/RecentBlogPostsSection';
import { getTotalNumberOfPages } from '@utils/postUtils';
import type { Metadata } from 'next';

type Params = {
  id: string;
};

type Props = {
  params: Params;
};

export const metadata: Metadata = {

};

export default function Page({ params }: Props) {
  const pageNumber = parseInt(params.id);
  const totalPages = getTotalNumberOfPages();

  return (
    <main>
      <Banner />
      {pageNumber == 1 && <RecentBlogPostsSection />}
      <AllBlogPostsSection pageNumber={pageNumber} totalPages={totalPages} />
    </main>
  );
}

export const generateStaticParams = (): Params[] => {
  const numberOfPages = getTotalNumberOfPages();

  return Array.from({ length: numberOfPages }, (x, i) => i + 1).map((x) => {
    return { id: x.toString() };
  });
};
