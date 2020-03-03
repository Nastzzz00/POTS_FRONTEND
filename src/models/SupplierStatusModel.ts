import { Instance } from "mobx-state-tree"
import { SupplierStatusModelBase } from "./SupplierStatusModel.base"

/* The TypeScript type of an instance of SupplierStatusModel */
export interface SupplierStatusModelType extends Instance<typeof SupplierStatusModel.Type> {}

/* A graphql query fragment builders for SupplierStatusModel */
export { selectFromSupplierStatus, supplierStatusModelPrimitives, SupplierStatusModelSelector } from "./SupplierStatusModel.base"

/**
 * SupplierStatusModel
 */
export const SupplierStatusModel = SupplierStatusModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
