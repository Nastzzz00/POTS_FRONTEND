import { Instance } from "mobx-state-tree"
import { ItemModelBase } from "./ItemModel.base"

/* The TypeScript type of an instance of ItemModel */
export interface ItemModelType extends Instance<typeof ItemModel.Type> {}

/* A graphql query fragment builders for ItemModel */
export { selectFromItem, itemModelPrimitives, ItemModelSelector } from "./ItemModel.base"

/**
 * ItemModel
 */
export const ItemModel = ItemModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
