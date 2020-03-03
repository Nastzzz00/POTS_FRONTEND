/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ItemModel, ItemModelType } from "./ItemModel"
import { ItemModelSelector } from "./ItemModel.base"
import { SupplierModel, SupplierModelType } from "./SupplierModel"
import { SupplierModelSelector } from "./SupplierModel.base"
import { SupplierStatusModel, SupplierStatusModelType } from "./SupplierStatusModel"
import { SupplierStatusModelSelector } from "./SupplierStatusModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  supplierStatus: IObservableArray<SupplierStatusModelType>;
  supplier: SupplierModelType;
  items: IObservableArray<ItemModelType>;
}

/**
 * PurchaseOrderBase
 * auto generated base class for the model PurchaseOrderModel.
 */
export const PurchaseOrderModelBase = withTypedRefs<Refs>()(ModelBase
  .named('PurchaseOrder')
  .props({
    __typename: types.optional(types.literal("PurchaseOrder"), "PurchaseOrder"),
    id: types.identifier,
    externalID: types.union(types.undefined, types.string),
    status: types.union(types.undefined, types.string),
    supplierStatus: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => SupplierStatusModel))))),
    supplier: types.union(types.undefined, MSTGQLRef(types.late((): any => SupplierModel))),
    items: types.union(types.undefined, types.null, types.array(MSTGQLRef(types.late((): any => ItemModel)))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class PurchaseOrderModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get externalID() { return this.__attr(`externalID`) }
  get status() { return this.__attr(`status`) }
  supplierStatus(builder?: string | SupplierStatusModelSelector | ((selector: SupplierStatusModelSelector) => SupplierStatusModelSelector)) { return this.__child(`supplierStatus`, SupplierStatusModelSelector, builder) }
  supplier(builder?: string | SupplierModelSelector | ((selector: SupplierModelSelector) => SupplierModelSelector)) { return this.__child(`supplier`, SupplierModelSelector, builder) }
  items(builder?: string | ItemModelSelector | ((selector: ItemModelSelector) => ItemModelSelector)) { return this.__child(`items`, ItemModelSelector, builder) }
}
export function selectFromPurchaseOrder() {
  return new PurchaseOrderModelSelector()
}

export const purchaseOrderModelPrimitives = selectFromPurchaseOrder().externalID.status
