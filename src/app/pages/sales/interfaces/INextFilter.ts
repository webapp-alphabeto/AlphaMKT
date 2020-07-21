import { ParamsFilter } from "./ParamsFilter";

export interface INextFilter {
  hasNext: boolean;
  params: ParamsFilter;
}
