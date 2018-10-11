import { account_name, asset } from "./eosio";
export type _symbol = string;

// Transfer Terms & Conditions
// I, {{from}}, certify the following to be true to the best of my knowledge:
//    1. I certify that {{quantity}} is not the proceeds of fraudulent or violent activities.
//    2. I certify that, to the best of my knowledge, {{to}} is not supporting initiation of violence against others.
//    3. I have disclosed any contractual terms & conditions with respect to {{quantity}} to {{to}}.
// I understand that funds transfers are not reversible after the {{transaction.delay}} seconds or other delay as configured by {{from}}'s permissions.
// If this action fails to be irreversibly confirmed after receiving goods or services from '{{to}}', I agree to either return the goods or services or resend {{quantity}} in a timely manner.
export interface ITransfer {
  account: "eosio.token";
  name: "transfer";
  data: {
    from: account_name;
    to: account_name;
    quantity: asset;
    memo: string;
  };
}

export interface ICreate {
  account: "eosio.token";
  name: "create";
  data: {
    issuer: account_name;
    maximum_supply: asset;
  };
}

export interface IIssue {
  account: "eosio.token";
  name: "issue";
  data: {
    to: account_name;
    quantity: asset;
    memo: string;
  };
}

export interface IRetire {
  account: "eosio.token";
  name: "retire";
  data: {
    quantity: asset;
    memo: string;
  };
}

export interface IClose {
  account: "eosio.token";
  name: "close";
  data: {
    owner: account_name;
    symbol: _symbol;
  };
}
