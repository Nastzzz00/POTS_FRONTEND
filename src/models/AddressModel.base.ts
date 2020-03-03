/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * AddressBase
 * auto generated base class for the model AddressModel.
 */
export const AddressModelBase = ModelBase
  .named('Address')
  .props({
    __typename: types.optional(types.literal("Address"), "Address"),
    id: types.identifier,
    building_name: types.union(types.undefined, types.string),
    street: types.union(types.undefined, types.string),
    city: types.union(types.undefined, types.string),
    state: types.union(types.undefined, types.string),
    zip_code: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class AddressModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get building_name() { return this.__attr(`building_name`) }
  get street() { return this.__attr(`street`) }
  get city() { return this.__attr(`city`) }
  get state() { return this.__attr(`state`) }
  get zip_code() { return this.__attr(`zip_code`) }
}
export function selectFromAddress() {
  return new AddressModelSelector()
}

export const addressModelPrimitives = selectFromAddress().building_name.street.city.state.zip_code
