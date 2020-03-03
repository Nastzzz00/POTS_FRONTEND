/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AddressModel, AddressModelType } from "./AddressModel"
import { AddressModelSelector } from "./AddressModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  address: AddressModelType;
}

/**
 * SupplierBase
 * auto generated base class for the model SupplierModel.
 */
export const SupplierModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Supplier')
  .props({
    __typename: types.optional(types.literal("Supplier"), "Supplier"),
    id: types.identifier,
    externalID: types.union(types.undefined, types.string),
    name: types.union(types.undefined, types.string),
    address: types.union(types.undefined, MSTGQLRef(types.late((): any => AddressModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class SupplierModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get externalID() { return this.__attr(`externalID`) }
  get name() { return this.__attr(`name`) }
  address(builder?: string | AddressModelSelector | ((selector: AddressModelSelector) => AddressModelSelector)) { return this.__child(`address`, AddressModelSelector, builder) }
}
export function selectFromSupplier() {
  return new SupplierModelSelector()
}

export const supplierModelPrimitives = selectFromSupplier().externalID.name
