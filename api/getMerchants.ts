import axios, { AxiosResponse } from "axios";

export type Merchant = {
  id: string;
  key: string;
  active: boolean;
  display_name: string;
  type: "coupon" | "coupon_hot";
  merchant_id: string;
  logo: string;
  path: string;
  target: "_self" | "_blank";
};

type PaingMerchantResponse = {
  total: number;
  data: Merchant[];
};

export const getMerchants = (): Promise<
  AxiosResponse<PaingMerchantResponse>
> => {
  const url = "https://api.hunghamhoc.com/api/v1/affiliate/merchant";
  return axios.get(url);
};
