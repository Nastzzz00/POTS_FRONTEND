import { Instance } from "mobx-state-tree"
import { PurchaseOrderModelBase } from "./PurchaseOrderModel.base"

/* The TypeScript type of an instance of PurchaseOrderModel */
export interface PurchaseOrderModelType extends Instance<typeof PurchaseOrderModel.Type> {}

/* A graphql query fragment builders for PurchaseOrderModel */
export { selectFromPurchaseOrder, purchaseOrderModelPrimitives, PurchaseOrderModelSelector } from "./PurchaseOrderModel.base"

/**
 * PurchaseOrderModel
 */
export const PurchaseOrderModel = PurchaseOrderModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
