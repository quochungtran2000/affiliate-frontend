import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { BannerAds, ContentAds, SideBarAds } from "../components/Ads";
import CouponTabs from "../components/CouponTabs";
import { Layout } from "../components/Layout";
import SideBarCoupon from "../components/Coupon/SideBarCoupon";
import ContentCoupon from "../components/Coupon/ContentCoupon";
import ListMerchant from "../components/ListMerchant/ListMerchant";
import { getMerchants } from "../api/getMerchants";

const Home: NextPage = ({
  merchants,
}: InferGetStaticPropsType<GetStaticProps>) => {
  return (
    <Layout>
      {/* <div className="mx-auto lg:px-12 xl:px-12 md:px-8 sm:px-4"> */}
      <BannerAds />
      <div className="grid md:grid-cols-3">
        <div className="md:col-span-2 py-4 px-4 md:pl-0 md:pr-4">
          <ListMerchant merchants={merchants} />
          <ContentAds />
          <CouponTabs />
          <ContentAds />
        </div>

        <div className="gird py-4 px-4 md:pl-4 md:pr-0 relative">
          <SideBarAds />
          <div className="mb-8">
            <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
              <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
                <li className="mr-2">
                  <button className="text-sm inline-block p-4 rounded-t-lg border-b-2 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500">
                    Bài viết
                  </button>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-2 w-full mb-8">
              {Array(2)
                .fill(0)
                .map((_, index) => (
                  <SideBarCoupon key={index} />
                ))}
            </div>
            <SideBarAds />
          </div>
        </div>
      </div>
    </Layout>
  );
};
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const { data: response } = await getMerchants();
  const { data: merchants } = response;
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      merchants,
    },
  };
}

export default Home;
