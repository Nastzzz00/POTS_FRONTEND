import { Instance } from "mobx-state-tree"
import { SupplierModelBase } from "./SupplierModel.base"

/* The TypeScript type of an instance of SupplierModel */
export interface SupplierModelType extends Instance<typeof SupplierModel.Type> {}

/* A graphql query fragment builders for SupplierModel */
export { selectFromSupplier, supplierModelPrimitives, SupplierModelSelector } from "./SupplierModel.base"

/**
 * SupplierModel
 */
export const SupplierModel = SupplierModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
