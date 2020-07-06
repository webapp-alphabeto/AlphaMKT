import { VirtualStockGroupByReference } from "./VirtualStockGroupByReference";

export interface VirtualStockGroupView {
  collection: string;
  map: string;
  references: VirtualStockGroupByReference[];
}

