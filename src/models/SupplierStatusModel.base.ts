/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * SupplierStatusBase
 * auto generated base class for the model SupplierStatusModel.
 */
export const SupplierStatusModelBase = ModelBase
  .named('SupplierStatus')
  .props({
    __typename: types.optional(types.literal("SupplierStatus"), "SupplierStatus"),
    id: types.identifier,
    status: types.union(types.undefined, types.string),
    dateCreated: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class SupplierStatusModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get status() { return this.__attr(`status`) }
  get dateCreated() { return this.__attr(`dateCreated`) }
}
export function selectFromSupplierStatus() {
  return new SupplierStatusModelSelector()
}

export const supplierStatusModelPrimitives = selectFromSupplierStatus().status.dateCreated
