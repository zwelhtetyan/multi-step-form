const pricingObj = {
  monthly: '',
  yearly: '',
};

export type PricingObjKey = keyof typeof pricingObj;

export interface PricingObj {
  monthly: number;
  yearly: number;
}

export interface AddOns {
  title: string;
  price: number;
}

export interface ErrorState {
  name: string;
  email: string;
  phoneNumber: string;
}
