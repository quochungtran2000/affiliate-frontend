import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { background, headerHeight, shadow } from "../constants";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="mx-auto lg:px-12 xl:px-12 md:px-8 sm:px-4">
        <div className="blog-ads h-64 w-full mb-4 md:mb-4 p-4">
          <div
            className={`w-full h-full flex justify-center items-center ${shadow}`}
          >
            Quảng cáo sẽ hiện ở đây
          </div>
        </div>
        <div className="grid md:grid-cols-3">
          <div className="md:col-span-2 p-4">
            <div className="mb-8">
              <div className="mb-8">
                <span className="text-2xl font-bold font-sans mb-8 border-b pb-2">
                  Nhà cung cấp nổi bật
                </span>
              </div>
              <div className="grid grid-cols-4 md:grid-cols-6 gap-4 w-full">
                {Array(10)
                  .fill(0)
                  .map((x, index) => (
                    // <div
                    //   key={index}
                    //   className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
                    // >
                    //   <div>
                    //     <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                    //       <span className="material-icons">fingerprint</span>
                    //     </span>
                    //   </div>
                    //   <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                    //     Writes Upside-Down
                    //   </h3>
                    //   <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                    //     The Zero Gravity Pen can be used to write in any
                    //     orientation, including upside-down. It even works in
                    //     outer space.
                    //   </p>
                    // </div>
                    <div
                      key={index}
                      className="bg-white dark:bg-slate-800 rounded w-full aspect-square ring-1 ring-slate-900/5 shadow-xl"
                    >
                      <span className="inline-flex items-center justify-center p-2 bg-indigo-500 shadow-lg w-full h-full">
                        <span className="material-icons text-4xl">
                          fingerprint
                        </span>
                      </span>
                      {/* <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                        Writes Upside-Down
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                        The Zero Gravity Pen can be used to write in any
                        orientation, including upside-down. It even works in
                        outer space.
                      </p> */}
                    </div>
                  ))}
              </div>
            </div>
            <div className="blog-ads h-32 w-full mb-4">
              <div
                className={`w-full h-full flex justify-center items-center ${shadow}`}
              >
                Quảng cáo sẽ hiện ở đây
              </div>
            </div>
            <div className="mb-8">
              <div className="mb-8">
                <span className="text-2xl font-bold font-sans mb-8 border-b pb-2">
                  Mã khuyễn mãi
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {Array(10)
                  .fill(0)
                  .map((x, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
                    >
                      <div>
                        <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                          <span className="material-icons">fingerprint</span>
                        </span>
                      </div>
                      <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                        Writes Upside-Down
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                        The Zero Gravity Pen can be used to write in any
                        orientation, including upside-down. It even works in
                        outer space.
                      </p>
                    </div>
                  ))}
              </div>
            </div>
            <div className="blog-ads h-32 w-full mb-4">
              <div
                className={`w-full h-full flex justify-center items-center ${shadow}`}
              >
                Quảng cáo sẽ hiện ở đây
              </div>
            </div>
          </div>

          <div className="gird p-4 relative">
            {/* <div className={`blog-ads h-32 w-full mb-8 sticky top-[51px] z-10`}>
              <div
                className={`w-full h-full flex justify-center items-center ${shadow} ${background}`}
              >
                Quảng cáo sẽ hiện ở đây
              </div>
            </div> */}
            <div className={`blog-ads h-32 w-full mb-8`}>
              <div
                className={`w-full h-full flex justify-center items-center ${shadow} ${background}`}
              >
                Quảng cáo sẽ hiện ở đây
              </div>
            </div>
            <div className="mb-8">
              <div className="mb-8">
                <span className="text-2xl font-bold font-sans mb-8 border-b pb-2">
                  Mã khuyễn mãi
                </span>
              </div>
              <div className="grid grid-cols-1 gap-4 w-full">
                {Array(5)
                  .fill(0)
                  .map((x, index) => (
                    <a href="#" className={`w-full hover:bg-gray-50 ${shadow}`}>
                      <div className="grid grid-cols-6 p-5 gap-y-2">
                        <div>
                          <img
                            src="https://picsum.photos/seed/2/200/200"
                            className="max-w-16 max-h-16"
                          />
                        </div>

                        <div className="col-span-5 md:col-span-4 ml-4">
                          <p className="text-sky-500 font-bold text-xs">
                            7+ SPOTS LEFT
                          </p>

                          <p className="text-gray-600 font-bold">
                            [Beginner] Light Discussion
                          </p>

                          <p className="text-gray-400">
                            Fri, Mar 11 . 8:00 - 9:30 AM
                          </p>

                          <p className="text-gray-400"> Beginner speakers </p>
                        </div>

                        <div className="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
                          <p className="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit">
                            FREE
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
              </div>
              <div className={`blog-ads h-32 w-full mb-8`}>
                <div
                  className={`w-full h-full flex justify-center items-center ${shadow} ${background}`}
                >
                  Quảng cáo sẽ hiện ở đây
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
