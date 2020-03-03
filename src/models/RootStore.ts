import { Instance } from 'mobx-state-tree'
import { RootStoreBase } from './RootStore.base'
import { PURCHASEORDER_FRAGMENT } from '../helpers'

export interface RootStoreType extends Instance<typeof RootStore.Type> {}

export const RootStore = RootStoreBase.views(self => {
  return {
    vPurchaseOrders() {
      const po: any = self.purchaseorders.values()
      return [...po]
    },
    vSuppliers() {
      return [self.suppliers.values()]
    },
    vAddresses() {
      return [self.addresss.values()]
    },
    vSupplierStatuses() {
      return [self.supplierstatuss.values()]
    },
    vItems() {
      return [self.items.values()]
    },
  }
}).actions(self => ({
  afterCreate() {
    self.queryAllPurchaseOrders({}, PURCHASEORDER_FRAGMENT)
    // self.queryAllSuppliers({});
    // self.queryAllAddresss({});
    // self.queryAllSupplierStatus({});
    // self.queryAllItems({});
  },
  requestPurchaseOrders() {
    const poq = self.queryAllPurchaseOrders({}, PURCHASEORDER_FRAGMENT)

    return poq
    // return self.queryAllPurchaseOrders({}, PURCHASEORDER_FRAGMENT)
  },
  // requestSuppliers() {
  // 	return self.queryAllSuppliers({});
  // },
  // requestAddresses() {
  // 	return self.queryAllAddresss({});
  // },
  // requestSupplierStatuses() {
  // 	return self.queryAllSupplierStatus({});
  // },
  // requestItems() {
  // 	return self.queryAllItems({});
  // },
}))
