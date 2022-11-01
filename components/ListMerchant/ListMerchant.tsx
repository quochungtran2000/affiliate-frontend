import Link from "next/link";
import { Merchant } from "../../api/getMerchants";

type ListMerchantProps = {
  merchants: Merchant[];
};

export default function ListMerchant({ merchants }: ListMerchantProps) {
  return (
    <div className="mb-8">
      <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
        <ul className="flex flex-wrap -mb-px text-xs sm:text-sm font-medium text-center">
          <li className="mr-2" role="presentation">
            <button className="inline-block p-2 sm:p-4 rounded-t-lg border-b-2 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500">
              Nhà cung cấp nổi bật
            </button>
          </li>
        </ul>
      </div>
      {/* <div className="mb-8">
        <span className="text-base font-medium mb-8 border-b pb-2">
          Nhà cung cấp nổi bật
        </span>
      </div> */}
      <div className="grid grid-cols-4 md:grid-cols-6 gap-4 w-full">
        {merchants.map((merchant, index) => (
          <div
            key={index}
            // className="bg-white dark:bg-slate-800 rounded w-full aspect-square ring-1 ring-slate-900/5 shadow-xl"
            className="bg-white dark:bg-slate-800 rounded w-full ring-1 ring-slate-900/5 shadow-xl"
          >
            <span className="inline-flex justify-center bg-indigo-500 shadow-lg w-full h-full">
              {/* <span className="material-icons text-4xl">fingerprint</span> */}
              <Link href={merchant.path} passHref>
                <a rel="noopener noreferrer" target={merchant.target}>
                  <img
                    src={merchant.logo}
                    alt={merchant.display_name}
                    className="w-full h-full ring-1 "
                  />
                </a>
              </Link>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
