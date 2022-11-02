import axios, { AxiosResponse } from "axios";

export type Coupon = {
  aff_link: string;
  aff_link_campaign_tag?: null;
  banner: [];
  campaign: string;
  campaign_id: string;
  campaign_name: string;
  categories?: {
    category_name: string;
    category_name_show: string;
    category_no: string;
  }[];
  coin_cap?: number;
  coin_percentage?: number;
  content: string;
  coupons?: {
    coupon_code: string;
    coupon_desc: string;
  }[];
  discount_percentage: number;
  discount_value: number;
  domain: string;
  end_time: string;
  id: string;
  image: string;
  is_hot: string;
  keyword: string[];
  link: string;
  max_value: number;
  merchant: string;
  min_spend: number;
  name: string;
  prior_type: number;
  remain: number;
  remain_true: false;
  shop_id: number;
  start_time: string;
  status: boolean;
  time_left: string;
};

export type PaingCouponResponse = {
  total: number;
  data: Coupon[];
};

export const getCoupons = (): Promise<AxiosResponse<PaingCouponResponse>> => {
  const url = "https://api.hunghamhoc.com/api/v1/affiliate/coupon?keyword=Giảm tiền";
  return axios.get(url);
};
