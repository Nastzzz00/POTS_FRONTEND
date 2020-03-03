/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * ItemBase
 * auto generated base class for the model ItemModel.
 */
export const ItemModelBase = ModelBase
  .named('Item')
  .props({
    __typename: types.optional(types.literal("Item"), "Item"),
    id: types.identifier,
    itemNo: types.union(types.undefined, types.string),
    description: types.union(types.undefined, types.string),
    quantity: types.union(types.undefined, types.number),
    uom: types.union(types.undefined, types.string),
    price: types.union(types.undefined, types.number),
    currency: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ItemModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get itemNo() { return this.__attr(`itemNo`) }
  get description() { return this.__attr(`description`) }
  get quantity() { return this.__attr(`quantity`) }
  get uom() { return this.__attr(`uom`) }
  get price() { return this.__attr(`price`) }
  get currency() { return this.__attr(`currency`) }
}
export function selectFromItem() {
  return new ItemModelSelector()
}

export const itemModelPrimitives = selectFromItem().itemNo.description.quantity.uom.price.currency
