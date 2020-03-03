export const data = [
  {
    itemno: "00001",
    desc: "Blue Paint",
    qty: 10,
    uom: "liters",
    price: "PHP 200",
    amount: "PHP 2,000"
  },
  {
    itemno: "00002",
    desc: "Matte Black Paint",
    qty: 20,
    uom: "liters",
    price: "PHP 250",
    amount: "PHP 5,000"
  },
  {
    itemno: "00003",
    desc: "Red Paint",
    qty: 500,
    uom: "gallons",
    price: "PHP 250",
    amount: "PHP 125,000"
  },
  {
    itemno: "00004",
    desc: "Acrylic Spray Paint(White)",
    qty: 5,
    uom: "cans",
    price: "PHP 250",
    amount: "PHP 1,250"
  },
  {
    itemno: "00005",
    desc: "Acrylic Spray Paint(Blue)",
    qty: 100,
    uom: "cans",
    price: "PHP 250",
    amount: "PHP 25,000"
  },
  {
    itemno: "00006",
    desc: "Acrylic Spray Paint(Red)",
    qty: 9,
    uom: "cans",
    price: "PHP 250",
    amount: "PHP 2,250"
  }
];

export const POdata = [
  {
    id: "0000000001",
    items: data,
    status: "Delivered",
    color: "green",
    deliverTo: "187 Mobstah st, Barangay Matao, Ilocos Norte",
    supplier: {
      id: "00001",
      name: "Paint Supplier",
      address: "1234 Bulusan St, Barangay Hulo, Mandaluyong City"
    }
  },
  {
    id: "0000000002",
    items: data,
    status: "Pending",
    color: "orange",
    deliverTo: "187 Mobstah st, Barangay Matao, Ilocos Norte",
    supplier: {
      id: "00001",
      name: "Adhesive Supplier",
      address: "1245 Mabato St, La Paz, Makati City"
    }
  },
  {
    id: "0000000003",
    items: data,
    status: "Cancelled",
    deliverTo: "187 Mobstah st, Barangay Matao, Ilocos Norte",
    color: "red",
    supplier: {
      id: "00001",
      name: "Acrylic Paint Supplier",
      address: "1245 Mabato St, La Paz, Makati City"
    }
  }
];
