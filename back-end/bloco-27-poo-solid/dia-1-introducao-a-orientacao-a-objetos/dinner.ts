class Customer {
  name: string;
}

class OrderItem {
  private _orderItemName: string;
  private _price: number;

  constructor(orderItemName: string, price: number) {
    this._orderItemName = orderItemName;
    this._price = price;
  }
 
  get orderItemName(): string {
    return this._orderItemName;
  }

  get price(): number {
    return this._price;
  }
}

class Order {
  customer: string;
  orderItems: OrderItem[];
  payment: string;
  discount?: number;

  constructor(customer: string, orderItems: OrderItem[], payment: string, discount: number) {
    this.customer = customer;
    this.orderItems = orderItems;
    this.payment = payment;
    this.discount = discount;
  }

  totalOrderPrice(prices: OrderItem[]) {
    const getPrices = prices.map((item) => item.price);

    const totalPrice = getPrices.reduce((acc, item) => {
      return acc + item
    }, 0)

    return totalPrice;
  }

  totalOrderPriceWithDiscount(prices: OrderItem[]) {
    const discount = this.totalOrderPrice(prices) * this.discount;

    const finalPrice = this.totalOrderPrice(prices) - discount;

    return finalPrice;
  }
}