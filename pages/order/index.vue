<template>
    <div class="order-container">
        <div>
            <p class="order-title">Giỏ hàng của bạn</p>
        </div>
        <div class="order-cart">
            <div class="order-list">
                <div class="order-all" >
                    <div class="check-box" style="display: inline-block;">
                        <input type="checkbox" id="selectAll" name="selectAll" class="checkbox">
                        <label for="selectAll">Chọn tất cả</label>
                      </div>
                    <span >Đơn giá</span>
                    <span >Số lượng</span>
                    <span>Thành tiền</span>
                    <button @click="resetSelectedItems">Xóa tất cả</button>
              
                </div>
                <div class="order-detail">
                    <div class="order-detail-header">
                        <div class="check-box" data-v-inspector="pages/order/index.vue:30:29" data-v-17a44f9d="">
                            <input
                            type="checkbox" id="tickBoxHeader" name="tickBoxHeader" class="checkbox" v-model="allItemsChecked" @change="checkAllItems"
                                data-v-inspector="pages/order/index.vue:31:33" data-v-17a44f9d="">
                            </div>
                            <div class="header-location" @click="handleHeaderClick" style="cursor: pointer">
                        <span>
                            <img src="/images/location.png" alt="ketqualol" class="location" style="margin-right: 5px;">
                        </span>
                        <span>OEG Stadium Chợ Mơ</span>
                    </div>
                    </div>
                    <div class="order-detail-list">
                        <div v-for="(item, index) in items1" :key="index" class="order-detail-rows">
                            <div class="check-box">
                                <input type="checkbox" :id="'tickBox' + index" name="tickBox" class="checkbox" v-model="item.checked">
                            </div>
                            <div>
                                <img src="/images/D1-new 1.png" alt="ketqualol" class="location" style="margin-right: 5px;">
                            </div>
                            <div class="order-name">
                                <p class="order-name-title">Combo Burger Bò Teriyaki</p>
                                <p>01 Burger Bò Teriyaki</p>
                                <p>01 Khoai tây chiên (M)</p>
                            </div>
                            <div class="order-price">
                                <span class="original-price">{{ formatPrice(60000) }}</span>
                                <span class="sale-price">{{ formatPrice(55000) }}</span>
                            </div>
                            <div class="order-quantity" >
                                <button @click="decrementQuantity(index, 1)">
                                    <img src="/images/Ellipse 31.png" alt="esclip" class="ellipse" style="cursor: pointer">
                                    <div style="position: relative;cursor:pointer">
                                        <img src="/images/minus.png" alt="minus" class="operator">
                                    </div>
                                </button>

                                <span>{{ item.quantity }}</span>

                                <button @click="incrementQuantity(index, 1)">
                                    <img src="/images/Ellipse 32.png" alt="esclip" class="ellipse" style="cursor: pointer">
                                    <div style="position: relative;cursor:pointer">
                                        <img src="/images/plus.png" alt="plus" class="operator">
                                    </div>
                                </button>
                            </div>
                            <div class="order-money">
                                <span class="total-price">{{ formatPrice(calculateTotal(item)) }}</span>
                            </div>
                            <div class="order-delete" style="cursor:pointer" @click="resetItem(index, items1)">
                                <img src="/images/delete.png" alt="delete">
                            </div>
                        </div>
                        <div v-for="(item, index) in items2" :key="index" class="order-detail-rows">
                            <div class="check-box">
                                <input type="checkbox" :id="'tickBox' + index" name="tickBox" class="checkbox" v-model="item.checked">
                            </div>
                            <div>
                                <img src="/images/D6 2.png" alt="ketqualol" class="location" style="margin-right: 5px;">
                            </div>
                            <div class="order-name">
                                <p class="order-name-title">Combo Burger Bò Teriyaki</p>
                                <p>01 Burger Bò Teriyaki</p>
                                <p>01 Khoai tây chiên (M)</p>
                            </div>
                            <div class="order-price">
                                <span class="original-price">{{ formatPrice(60000) }}</span>
                                <span class="sale-price">{{ formatPrice(40000) }}</span>
                            </div>
                            <div class="order-quantity">
                                <button @click="decrementQuantity(index, 2)">
                                    <img src="/images/Ellipse 31.png" alt="esclip" class="ellipse" style="cursor: pointer">
                                    <div style="position: relative;cursor:pointer">
                                        <img src="/images/minus.png" alt="minus" class="operator">
                                    </div>
                                </button>

                                <span>{{ item.quantity }}</span>

                                <button @click="incrementQuantity(index, 2)">
                                    <img src="/images/Ellipse 32.png" alt="esclip" class="ellipse" style="cursor: pointer">
                                    <div style="position: relative;cursor:pointer">
                                        <img src="/images/plus.png" alt="plus" class="operator">
                                    </div>
                                </button>
                            </div>
                            <div class="order-money">
                                <span class="total-price">{{ formatPrice(calculateTotal(item)) }}</span>
                            </div>
                            <div class="order-delete" style="cursor:pointer" @click="resetItem(index, items2)">
                                <img src="/images/delete.png" alt="delete">
                            </div>
                        </div>
                        <div class="order-detail-rows">
                            <div class="check-box">
                                <input type="checkbox" id="tickBox" name="tickBox" class="checkbox">
                            </div>
                            <div>
                                <img src="/images/Rice-TENDERODS 2.png" alt="ketqualol" class="location"
                                    style="margin-right: 5px;">
                            </div>
                            <div class="order-name-sold-out">
                                <p class="order-name-title-sold-out">Combo Burger Bò Teriyaki</p>
                                <p>01 Burger Bò Teriyaki</p>
                                <p>01 Khoai tây chiên (M)</p>
                            </div>
                            <div class="order-price">
                                <span class="original-price">{{ formatPrice(60000) }}</span>
                                <span class="sale-price-soldout">{{ formatPrice(55000) }}</span>
                                <p class="sold-out">Hết hàng</p>
                            </div>
                            <div class="order-quantity">
                                <div>
                                    <img src="/images/Ellipse 31.png" alt="esclip" class="ellipse" style="cursor: pointer">
                                    <div style="position: relative;cursor:pointer">
                                        <img src="/images/minus.png" alt="minus" class="operator">
                                    </div>
                                </div>

                                <span>0</span>

                                <div>
                                    <img src="/images/Ellipse 33.png" alt="esclip" class="ellipse" style="cursor: pointer">
                                    <div style="position: relative;cursor:pointer">
                                        <img src="/images/plus-soldout.png" alt="plus" class="operator  ">
                                    </div>
                                </div>
                            </div>
                            <div class="order-money">
                                <span class="total-price-soldout">0đ</span>
                            </div>
                            <div class="order-delete" style="cursor:pointer" >
                                <img src="/images/delete.png" alt="delete">
                            </div>
                        </div>
                        <div v-for="(item, index) in items3" :key="index" class="order-detail-rows">
                            <div class="check-box">
                                <input type="checkbox" :id="'tickBox' + index" name="tickBox" class="checkbox" v-model="item.checked">
                            </div>
                            <div>
                                <img src="/images/D1-new 1.png" alt="ketqualol" class="location" style="margin-right: 5px;">
                            </div>
                            <div class="order-name">
                                <p class="order-name-title">Combo Burger Bò Teriyaki</p>
                                <p>01 Burger Bò Teriyaki</p>
                                <p>01 Khoai tây chiên (M)</p>
                            </div>
                            <div class="order-price">
                                <span class="original-price">{{ formatPrice(60000) }}</span>
                                <span class="sale-price">{{ formatPrice(55000) }}</span>
                            </div>
                            <div class="order-quantity">
                                <button @click="decrementQuantity(index, 3)">
                                    <img src="/images/Ellipse 31.png" alt="esclip" class="ellipse">
                                    <div style="position: relative;cursor:pointer">
                                        <img src="/images/minus.png" alt="minus" class="operator">
                                    </div>
                                </button>

                                <span>{{ item.quantity }}</span>

                                <button @click="incrementQuantity(index, 3)">
                                    <img src="/images/Ellipse 32.png" alt="esclip" class="ellipse" style="cursor: pointer">
                                    <div style="position: relative;cursor:pointer">
                                        <img src="/images/plus.png" alt="plus" class="operator">
                                    </div>
                                </button>
                            </div>
                            <div class="order-money">
                                <span class="total-price">{{ formatPrice(calculateTotal(item)) }}</span>
                            </div>
                            <div class="order-delete" style="cursor:pointer" @click="resetItem(index, items3)">
                                <img src="/images/delete.png" alt="delete">
                            </div>
                        </div>
                    </div>

                </div>
                <!-- <div class="order-detail">
                    <div class="order-detail-header">
                        <div class="check-box" data-v-inspector="pages/order/index.vue:30:29" data-v-17a44f9d=""><input
                            type="checkbox" id="tickBox" name="tickBox" class="checkbox"
                            data-v-inspector="pages/order/index.vue:31:33" data-v-17a44f9d="">
                        </div>
                        <span>
                            <img src="/images/location.png" alt="ketqualol" class="location" style="margin-right: 5px;">
                        </span>
                        <span>OEG Stadium Đống Đa</span>
                    </div>
                    <div class="order-detail-list">
                        <div class="order-detail-rows">
                            <div class="check-box">
                                <input type="checkbox" id="tickBox" name="tickBox" class="checkbox">
                            </div>
                            <div>
                                <img src="/images/D1-new 1.png" alt="ketqualol" class="location" style="margin-right: 5px;">
                            </div>
                            <div class="order-name">
                                <p class="order-name-title">Combo Burger Bò Teriyaki</p>
                                <p>01 Burger Bò Teriyaki</p>
                                <p>01 Khoai tây chiên (M)</p>
                            </div>
                            <div class="order-price">
                                <span class="original-price">60.000 đ</span>
                                <span class="sale-price">55.000 đ</span>
                            </div>
                            <div class="order-quantity">
                                <button @click="decrementQuantity(index, 4)">
                                    <img src="/images/Ellipse 31.png" alt="esclip" class="ellipse" style="cursor: pointer">
                                    <div style="position: relative;cursor:pointer">
                                        <img src="/images/minus.png" alt="minus" class="operator">
                                    </div>
                                </button>

                                <span>{{ item.quantity }}</span>

                                <button @click="incrementQuantity(index, 4)">
                                    <img src="/images/Ellipse 32.png" alt="esclip" class="ellipse" style="cursor: pointer">
                                    <div style="position: relative;cursor:pointer">
                                        <img src="/images/plus.png" alt="plus" class="operator">
                                    </div>
                                </button>
                            </div>
                            <div class="order-money">
                                <span class="total-price">{{ formatPrice(calculateTotal(item)) }}</span>
                            </div>
                            <div class="order-delete" style="cursor:pointer">
                                <img src="/images/delete.png" alt="delete">
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
            <div class=order-payment-container>
                <div class="order-payment">
                    <div class="order-discount">
                        <div class="discount-header">
                            <span class="order-discount-fontbasic">Mã giảm giá</span>
                            <span class="order-discount-fontbasic1">Có thể chọn 2</span>
                        </div>

                        <div>
                            <div class="discount-infor" v-if="!showDiscountInput">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                                    <path
                                        d="M10.2401 2.99997L11.2001 3.89996L5.76006 8.99996L4.80006 8.09996L10.2401 2.99997ZM1.60006 -3.48968e-05H14.4001C15.2881 -3.48968e-05 16.0001 0.667465 16.0001 1.49997V4.49996C15.5757 4.49996 15.1688 4.658 14.8687 4.93931C14.5686 5.22061 14.4001 5.60214 14.4001 5.99996C14.4001 6.39779 14.5686 6.77932 14.8687 7.06063C15.1688 7.34193 15.5757 7.49996 16.0001 7.49996V10.5C16.0001 11.3325 15.2881 12 14.4001 12H1.60006C1.17572 12 0.768749 11.8419 0.468691 11.5606C0.168633 11.2793 6.21736e-05 10.8978 6.21736e-05 10.5V7.49996C0.888062 7.49996 1.60006 6.83247 1.60006 5.99996C1.60006 5.60214 1.43149 5.22061 1.13143 4.93931C0.831375 4.658 0.424409 4.49996 6.21736e-05 4.49996V1.49997C6.21736e-05 1.10214 0.168633 0.720609 0.468691 0.439305C0.768749 0.158 1.17572 -3.48968e-05 1.60006 -3.48968e-05ZM1.20006 1.12497L1.13143 3.40496C1.61758 3.66776 2.11934 4.04442 2.40006 4.49996C2.68078 4.95551 2.80006 5.47387 2.80006 5.99996C2.80006 6.52606 2.68078 6.66942 2.40006 7.12496C2.11934 7.58051 1.68621 7.83716 1.20006 8.09996V10.875H14.8001V8.24996C14.3139 7.98717 13.8808 7.95551 13.6001 7.49996C13.3193 7.04442 13.2001 6.52606 13.2001 5.99996C13.2001 5.47387 13.3193 4.95551 13.6001 4.49996C13.8808 4.04442 14.3139 4.01276 14.8001 3.74996V1.12497H1.20006ZM6.00006 2.99997C6.66406 2.99997 7.20006 3.50247 7.20006 4.12496C7.20006 4.74747 6.66406 5.24996 6.00006 5.24996C5.33606 5.24996 4.80006 4.74747 4.80006 4.12496C4.80006 3.50247 5.33606 2.99997 6.00006 2.99997ZM10.0001 6.74996C10.6641 6.74996 11.2001 7.25246 11.2001 7.87496C11.2001 8.49747 10.6641 8.99996 10.0001 8.99996C9.33606 8.99996 8.80006 8.49747 8.80006 7.87496C8.80006 7.25246 9.33606 6.74996 10.0001 6.74996Z"
                                        fill="#1D92FF" />
                                </svg>
                            
                                <span @click="toggleDiscountInput" style="color: #1D92FF; font-family: Barlow; font-size: 16px; font-style: normal; font-weight: 400; line-height: normal;">
                                    Chọn hoặc nhập mã</span> 
                            </div>
                            <div v-if="showDiscountInput" class="apply-voucher">
                                <input type="text" v-model="discountCode" class="input">
                                <button @click="applyDiscountCode" class="btn-apply">Áp dụng</button>
                              </div>
                           
                          </div>
                    </div>
                </div>
                <div class="order-total">
                    <div class="order-discount">
                        <div class="discount-header">
                            <div>
                                <div class="discount-infor" v-if="!showDiscountInput">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none" style="margin-top: 5px">
                                        <path
                                            d="M10.2401 2.99997L11.2001 3.89996L5.76006 8.99996L4.80006 8.09996L10.2401 2.99997ZM1.60006 -3.48968e-05H14.4001C15.2881 -3.48968e-05 16.0001 0.667465 16.0001 1.49997V4.49996C15.5757 4.49996 15.1688 4.658 14.8687 4.93931C14.5686 5.22061 14.4001 5.60214 14.4001 5.99996C14.4001 6.39779 14.5686 6.77932 14.8687 7.06063C15.1688 7.34193 15.5757 7.49996 16.0001 7.49996V10.5C16.0001 11.3325 15.2881 12 14.4001 12H1.60006C1.17572 12 0.768749 11.8419 0.468691 11.5606C0.168633 11.2793 6.21736e-05 10.8978 6.21736e-05 10.5V7.49996C0.888062 7.49996 1.60006 6.83247 1.60006 5.99996C1.60006 5.60214 1.43149 5.22061 1.13143 4.93931C0.831375 4.658 0.424409 4.49996 6.21736e-05 4.49996V1.49997C6.21736e-05 1.10214 0.168633 0.720609 0.468691 0.439305C0.768749 0.158 1.17572 -3.48968e-05 1.60006 -3.48968e-05ZM1.20006 1.12497L1.13143 3.40496C1.61758 3.66776 2.11934 4.04442 2.40006 4.49996C2.68078 4.95551 2.80006 5.47387 2.80006 5.99996C2.80006 6.52606 2.68078 6.66942 2.40006 7.12496C2.11934 7.58051 1.68621 7.83716 1.20006 8.09996V10.875H14.8001V8.24996C14.3139 7.98717 13.8808 7.95551 13.6001 7.49996C13.3193 7.04442 13.2001 6.52606 13.2001 5.99996C13.2001 5.47387 13.3193 4.95551 13.6001 4.49996C13.8808 4.04442 14.3139 4.01276 14.8001 3.74996V1.12497H1.20006ZM6.00006 2.99997C6.66406 2.99997 7.20006 3.50247 7.20006 4.12496C7.20006 4.74747 6.66406 5.24996 6.00006 5.24996C5.33606 5.24996 4.80006 4.74747 4.80006 4.12496C4.80006 3.50247 5.33606 2.99997 6.00006 2.99997ZM10.0001 6.74996C10.6641 6.74996 11.2001 7.25246 11.2001 7.87496C11.2001 8.49747 10.6641 8.99996 10.0001 8.99996C9.33606 8.99996 8.80006 8.49747 8.80006 7.87496C8.80006 7.25246 9.33606 6.74996 10.0001 6.74996Z"
                                            fill="#1D92FF" />
                                    </svg>
                                
                                    <!-- <span @click="toggleDiscountInput" style="color: #1D92FF; font-family: Barlow; font-size: 16px; font-style: normal; font-weight: 400; line-height: normal;">
                                        Chọn hoặc nhập mã</span>  -->
                                        <span @click.native="toggleDiscountInput">Chọn hoặc nhập mã</span>
                                </div>
                                <div v-if="showDiscountInput" class="apply-voucher">
                                    <input type="text" v-model="discountCode" class="input">
                                    <button @click="applyDiscountCode" class="btn-apply">Áp dụng</button>
                                  </div>
                               
                              </div>
                            <span class="order-discount-fontbasic1">Có thể chọn 2</span>
                        </div>                       
                    </div>
                    <div class="line">

                    </div>
                    <div class="tamtinh">
                        <span class="order-discount-fontbasic">Tạm tính</span>
                        <span class="order-discount-fontbasic1">{{ formatPrice(total) }}</span>
                    </div>
                    <div class="giamgia">
                        <span class="order-discount-fontbasic">Giảm giá</span>
                        <span class="order-discount-fontbasic1">{{ formatPrice(0) }}</span>
                    </div>
                    <div class="order-line">

                    </div>
                    <div class="tongtien">
                        <span class="order-discount-fontbasic3">Tổng tiền</span>
                        <span class="order-discount-fontbasic1">{{ formatPrice(total) }}</span>
                    </div>
                </div>

                  <div>
                    <button v-if="totalQuantity > 0" class="btn-payment">
                        <NuxtLink to="/order/thanh-toan">
                            <div>
                              <button @click="handleOrder">Đặt hàng ({{ totalQuantity }})</button>
                            </div>
                          </NuxtLink>
                    </button>
                    <button v-else class="btn-payment">
                        <div>
                            <button @click="displayError">Đặt hàng ({{ totalQuantity }})</button>
                        </div>
                    </button>
                  </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
      showDiscountInput: false,
      discountCode: '',
      totalQuantity: 0,
      selectedAll: false

    }
  },

  methods: {
    /*handle 2 click checkbox*/
    handleHeaderClick() {
        this.checkHeaderCheckbox();
        this.checkAllItems();
    },
    /*check the checkbox when click on name*/
    checkHeaderCheckbox() {
        this.allItemsChecked = !this.allItemsChecked;
    },
    /*check all the checkbox on the rows*/
    checkAllItems() {
  for (let item of this.items1) {
    item.checked = this.allItemsChecked;
  }
  for (let item of this.items2) {
    item.checked = this.allItemsChecked;
  }
  for (let item of this.items3) {
    item.checked = this.allItemsChecked;
  }
}, 
resetSelectedItems() {
    for (let item of this.items1) {
      if (item.checked) {
        item.quantity = 0;
        item.price = price;
      }
    }
    for (let item of this.items2) {
      if (item.checked) {
        item.quantity = 0;
        item.price = price;
      }
    }
    for (let item of this.items3) {
      if (item.checked) {
        item.quantity = 0;
        item.price = price;
      }
    }
  },

    toggleDiscountInput() {
        console.log('Toggle method called');
      this.showDiscountInput = !this.showDiscountInput;
    },
    applyDiscountCode() {
      alert('Mã giảm giá đã được áp dụng: ' + this.discountCode);
    },
    displayError() {
      alert('Your shopping cart is empty.');
    },
    
    resetItem(index, itemList){
        itemList[index].quantity=0;
        itemList[index].price = price;
    },
    resetAll(index, items) {
    items.forEach(item => {
      item.quantity = 0;
    });
},


    incrementQuantity(index, set) {
    if (set === 1) {
      this.items1[index].quantity++;
    } else if (set === 2) {
      this.items2[index].quantity++;
    } else if(set === 3){
        this.items3[index].quantity++;
    }
  },

  decrementQuantity(index, set) {
    if (set === 1 && this.items1[index].quantity > 0) {
      this.items1[index].quantity--;
    } else if (set === 2 && this.items2[index].quantity > 0) {
      this.items2[index].quantity--;
    }else if(set === 3 && this.items3[index].quantity>0){
        this.items3[index].quantity--;
    }
  },

  calculateTotal(item) {
    return item.quantity * item.price;
  },

  formatPrice(price) {
    const formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    return formattedPrice.replace(/\D00(?=\D*$)/, ''); // Remove decimal if .00
  },
  

  },
  data() {
    return {
        allItemsChecked: false,
        items1: [
                    { checked: false, name: 'Combo Burger Bò Teriyaki', quantity: 0, price: 55000},
                ],
                items2: [
                    { checked: false, name: 'Combo Burger Bò Teriyaki', quantity: 0, price: 40000},
                ],
                items3: [
                    { checked: false, name: 'Combo Burger Bò MacDonald', quantity: 0, price: 45000},
                ],
                items4: [
                    { checked: false, name: 'Combo Burger Bò Teriyaki', quantity: 0, price: 55000}
                ],
            
    };
  },

computed: {
    
    /*total each items*/
  total() {
    let total = 0;
    for (const item of this.items1) {
      total += item.quantity * item.price;
    }
    for (const item of this.items2) {
      total += item.quantity * item.price;
    }
    for (const item of this.items3) {
      total += item.quantity * item.price;
    }
    return total;
},
/*total cart*/
  updateTotal() {
  this.total = 0;
  for (const item of this.items1) {
    this.total += item.quantity * item.price;
  }
  for (const item of this.items2) {
    this.total += item.quantity * item.price;
  }
  for (const item of this.items3) {
    this.total += item.quantity * item.price;
  }
},
/*total quantity*/
totalQuantity() {
  let total = 0;
  for (const item of this.items1) {
    total += item.quantity;
  }
  for (const item of this.items2) {
    total += item.quantity;
  }
  for (const item of this.items3) {
    total += item.quantity;
  }
  return total;
},

}
}
</script>

<style scoped>
/*responsive*/
/**mobile screen**/

@media screen and (max-width: 768px) {

    .order-container{
        padding: 20px 20px;
    }
    .order-detail-rows{
        display:grid;
        grid-template-columns: 5% 27% 60%;
        gap: 10px;
        align-items: center;
        padding: 5px 10px;
    }
    
      .order-name, 
      .order-price,
      .order-quantity {
        grid-column: 3;
      }
      .total-price,
      .order-delete img,
      .sold-out,
      .total-price-soldout {
        display: none;
      }
      .order-all{
        grid-template-columns: 70% 32%;
        font-size: 15px;
        display: grid;
    }   
    .order-all span{
        display: none;
    }
    .order-payment{
        display: none;
    }
    .order-total{
        margin-top: 15px;
    }
    .order-detail-header{
        padding-left: 10px;
    }
    
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
    .order-detail-header{
        padding-left: 10px;
    }
    
    .order-container{
        padding: 20px 40px;
    }
    .line{
        width: 390px;
    height: 1px;
    }
    .order-detail-rows{
        display:grid;
        grid-template-columns: 5% 14% 25%;
        gap: 10px;
        align-items: center;
        padding: 5px 10px;
    }
    
      .order-name, 
      .order-price,
      .order-quantity {
        grid-column: 3;
      }
      .total-price,
      .order-delete img,
      .sold-out,
      .total-price-soldout {
        display: none;
      }
      .order-all{
        grid-template-columns: 80% 18%;
        font-size: 15px;
        display: grid;
    }   
    .order-all span{
        display: none;
    }
    .order-payment{
        display: none;
    }
    .order-total{
        margin-top: 15px;
    }
        
}
@media screen and (min-width: 1025px) and (max-width: 1280px) {
    .order-detail-rows{
        grid-template-columns:5% 12% 25% 18% 22% 13% 5%;
        display: grid;
        align-items: center;
        padding: 20px 20px;
    }
    .order-detail-header{
        padding-left: 20px;
    }
    .order-total .discount-header {
        display: none;
    }
    .order-container{
        padding: 30px 50px
    }
    .btn-apply{
        width: 35%;
    }
    .sale-price{
        font-size: 14px
    }
    .original-price{
        font-size: 12px;
    }
    .sale-price-soldout{
        font-size:14px;
    }
    .total-price-soldout{
        font-size: 14px;
    }
    .total-price{
        font-size: 14px;
    }
    .order-all{
        grid-template-columns: 45% 18% 14% 12% 13%;
        font-size: 15px;
        display: grid;
    }
    .order-all button{
        font-size: 14px
    }
    .order-cart {
        display: grid;
        grid-template-columns: 70% 29%;
        gap: 10px;
    }
}
@media screen and (min-width: 1281px) {
    .order-detail-rows{
        grid-template-columns: 5% 12% 27% 18% 18% 13% 7%;
        display: grid;
        align-items: center;
        padding: 20px 20px;
    }

    .order-detail-header{
        padding-left: 20px;
    }
    .order-total .discount-header {
        display: none;
    }
   
    .order-all button{
        font-size: 16px
    }
    .order-all{
        grid-template-columns: 46% 19% 12% 10% 13%;
        font-size: 16px;
        display: grid;
    }
    .order-container{
        padding: 30px 120px;
    }
    .btn-apply{
        width: 30%;
    }
    .sale-price{
        font-size: 16px
    }
    .original-price{
        font-size: 14px;
    }
    .sale-price-soldout{
        font-size:16px;
    }
    .total-price-soldout{
        font-size: 16px;
    }
    .total-price{
        font-size: 16px;
    }
    .order-cart {
        display: grid;
        grid-template-columns: 70% 29%;
        gap: 10px;
    }
}

.header-location{
    display: flex;
}
.line{
    width: 100%;
height: 1px;
}
.apply-voucher{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.btn-apply{
    border-radius: 22px;
border: 1px solid rgba(9, 29, 62, 0.10);
background: linear-gradient(83deg, #0038FF 0%, #1D92FF 99.39%);
height: auto;
flex-shrink: 0;
padding: 10px;
}
.btn-apply{
    color: #FFF;
text-align: center;
font-family: Barlow;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
.input {
    width: 65%;
    height: auto;
    flex-shrink: 0;
    border-radius: 100px;
    border: 1px solid rgba(9, 29, 62, 0.30);
    font-size: 16px;
    font-weight: bold;
    color: #09283E;
    padding: 7px;
  }
.checkbox {
    border-radius: 5px;
    border: 2px solid #838D9E;
    box-shadow: 0px 30px 90px 0px rgba(83, 83, 83, 0.07);
    width: 21px; 
    height: 21px;
    flex-shrink: 0;
  }
.checkbox {
    margin-right: 7px;
  border-radius: 5px;
  border: 2px solid #838D9E;
  box-shadow: 0px 30px 90px 0px rgba(83, 83, 83, 0.07);
  width: 21px; 
  height: 21px;
  flex-shrink: 0;

}

.btn-payment {
    border-radius: 50px;
    background: linear-gradient(88deg, #0038FF 4.76%, #1D92FF 99.54%);
    width: 100%;
    height: auto;
    flex-shrink: 0;
    padding: 5px 0;
    margin-top: 10px;
}

.btn-payment {
    color: #FFF;
    text-align: center;
    font-family: Barlow;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
}

.order-discount-fontbasic3 {
    color: #091D3E;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.tongtien {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 15px;
    justify-content: space-between;
}

.order-line {
    width: 100%;
    height: 1px;
    background: rgba(9, 29, 62, 0.10);
}

.tamtinh,
.giamgia {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

.order-total {
    border-radius: 20px;
    border: 1px solid rgba(248, 248, 248, 0.10);
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(9, 29, 62, 0.10);
    width: 100%;
    height: auto;
    flex-shrink: 0;
    padding: 20px;

}

.discount-infor {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
}

.discount-header {
    display: flex;
    margin-bottom: 20px;
  justify-content: space-between;
  align-items: center;
}

.order-discount-fontvoucher {
    color: #1D92FF;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.order-discount-fontbasic1 {
    color: rgba(9, 29, 62, 0.70);
    text-align: right;
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.order-discount-fontbasic {
    color: #091D3E;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.order-payment {
    border-radius: 20px;
    border: 1px solid rgba(248, 248, 248, 0.10);
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(9, 29, 62, 0.10);
    width: 100%;
    height: auto;
    flex-shrink: 0;
    padding: 20px;
    margin-bottom: 20px;
}

.sold-out {
    position: absolute;
    transform: translate(50%, 90%);
    color: #F00;
    text-align: center;
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
}

.total-price-soldout {
    color: rgba(9, 29, 62, 0.50);
    text-align: center;
    font-family: Barlow;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
}

.sale-price-soldout {
    color: rgba(9, 29, 62, 0.50);
    font-family: Barlow;
    font-style: normal;
    font-weight: 400;
    line-height: 20px
}

.order-name-sold-out {
    color: rgba(9, 29, 62, 0.50);

    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
}

.order-name-title-sold-out {

    color: rgba(9, 29, 62, 0.50);

    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
}

.total-price {
    color: #1D92FF;
    text-align: center;
    font-family: Barlow;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
}

.operator {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -135%);
}

.order-quantity {
    display: flex;
    align-items: center;
    gap: 15px;
}

.order-price {
    display: flex;
    gap: 10px;

}

.original-price {
    color: rgba(9, 29, 62, 0.50);

    font-family: Barlow;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    text-decoration: line-through;
}

.sale-price {
    color: #091D3E;
    font-family: Barlow;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    /* 125% */
}

.order-name {
    color: #091D3E;
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;

}

.order-name {}

.order-name-title {
    color: #091D3E;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    /* 125% */
}

.order-detail-header {
    display: flex;
    align-items: center;
    color: #FFF;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.order-detail-list {
    width: 100%;
    height: auto;
    flex-shrink: 0;
    border-radius: 0 0 20px 20px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(9, 29, 62, 0.10);
    row-gap: 20px;
}

.order-detail {
    margin-top: 20px;
}

.order-detail-header {
    border-radius: 20px 20px 0px 0px;
    background: #091D3E;
    width: 100%;
    height: 58px;
    flex-shrink: 0;
}

.order-all {
    color: #091D3E;
    font-family: Barlow;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

}

.order-all button {
    border-radius: 100px;
    border: 1px solid #1D92FF;
    width: 100%;
    height: auto;
    flex-shrink: 0;
    color: #1D92FF;
    font-family: Barlow;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 5px
}

.order-title {
    color: #091D3E;
    font-family: Barlow;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 20px;
}

.order-all {
    border-radius: 20px;
    border: 1px solid rgba(248, 248, 248, 0.10);
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(9, 29, 62, 0.10);
    width: 100%;
    height: 50px;
    flex-shrink: 0;
    flex-direction: column;
    align-items: center;
    padding: 0px 20px;
}



.order-container {
    background: #EDF1F5;
}

.check-box input[type="checkbox"] {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    border-radius: 3px;
    border: 1px solid rgba(9, 29, 62, 0.20);
    box-shadow: 0px 30px 90px 0px rgba(83, 83, 83, 0.07);
}


.check-box label {
    display: inline-block;
    margin-left: 5px; 
    cursor: pointer; 
}


.apply-voucher{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.btn-apply{
    border-radius: 22px;
border: 1px solid rgba(9, 29, 62, 0.10);
background: linear-gradient(83deg, #0038FF 0%, #1D92FF 99.39%);
height: auto;
flex-shrink: 0;
padding: 10px;
}
.btn-apply{
    color: #FFF;
text-align: center;
font-family: Barlow;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
.input {
    width: 65%;
    height: auto;
    flex-shrink: 0;
    border-radius: 100px;
    border: 1px solid rgba(9, 29, 62, 0.30);
    font-size: 16px;
    font-weight: bold;
    color: #09283E;
    padding: 7px;
  }
.checkbox {
    border-radius: 5px;
    border: 2px solid #838D9E;
    box-shadow: 0px 30px 90px 0px rgba(83, 83, 83, 0.07);
    width: 21px; 
    height: 21px;
    flex-shrink: 0;
  }
.checkbox {
    margin-right: 7px;
    .checkbox {
  border-radius: 5px;
  border: 2px solid #838D9E;
  box-shadow: 0px 30px 90px 0px rgba(83, 83, 83, 0.07);
  width: 21px; 
  height: 21px;
  flex-shrink: 0;
}
}

.btn-payment {
    border-radius: 50px;
    background: linear-gradient(88deg, #0038FF 4.76%, #1D92FF 99.54%);
    width: 100%;
    height: auto;
    flex-shrink: 0;
    padding: 5px 0;
    margin-top: 10px;
}

.btn-payment {
    color: #FFF;
    text-align: center;
    font-family: Barlow;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
}

.order-discount-fontbasic3 {
    color: #091D3E;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.order-line {
    width: 100%;
    height: 1px;
    background: rgba(9, 29, 62, 0.10);
}

.tamtinh,
.giamgia {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

.order-total {
    border-radius: 20px;
    border: 1px solid rgba(248, 248, 248, 0.10);
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(9, 29, 62, 0.10);
    width: 100%;
    height: auto;
    flex-shrink: 0;
    padding: 20px;

}


.discount-header {
    display: flex;
    margin-bottom: 20px;
  justify-content: space-between;
  align-items: center;
}

.order-discount-fontvoucher {
    color: #1D92FF;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.order-discount-fontbasic1 {
    color: rgba(9, 29, 62, 0.70);
    text-align: right;
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.order-discount-fontbasic {
    color: #091D3E;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.order-payment {
    border-radius: 20px;
    border: 1px solid rgba(248, 248, 248, 0.10);
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(9, 29, 62, 0.10);
    width: 100%;
    height: auto;
    flex-shrink: 0;
    padding: 20px;
    margin-bottom: 20px;
}

.sold-out {
    position: absolute;
    transform: translate(50%, 90%);
    color: #F00;
    text-align: center;
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
}

.total-price-soldout {
    color: rgba(9, 29, 62, 0.50);
    text-align: center;
    font-family: Barlow;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
}

.sale-price-soldout {
    color: rgba(9, 29, 62, 0.50);
    font-family: Barlow;
    font-style: normal;
    font-weight: 400;
    line-height: 20px
}

.order-name-sold-out {
    color: rgba(9, 29, 62, 0.50);

    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
}

.order-name-title-sold-out {

    color: rgba(9, 29, 62, 0.50);

    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
}

.total-price {
    color: #1D92FF;
    text-align: center;
    font-family: Barlow;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
}

.operator {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -135%);
}

.order-quantity {
    display: flex;
    align-items: center;
    gap: 15px;
}

.order-price {
    display: flex;
    gap: 10px;

}

.original-price {
    color: rgba(9, 29, 62, 0.50);

    font-family: Barlow;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    text-decoration: line-through;
}

.sale-price {
    color: #091D3E;
    font-family: Barlow;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    /* 125% */
}


.order-name {
    color: #091D3E;
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;

}

.order-name-title {
    color: #091D3E;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    /* 125% */
}

.order-detail-list {
    width: 100%;
    height: auto;
    flex-shrink: 0;
    border-radius: 0 0 20px 20px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(9, 29, 62, 0.10);
    row-gap: 20px;
}

.order-detail {
    margin-top: 20px;
}

.order-detail-header {
    border-radius: 20px 20px 0px 0px;
    background: #091D3E;
    width: 100%;
    height: 58px;
    flex-shrink: 0;
}

.order-all {
    color: #091D3E;
    font-family: Barlow;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

}



.order-all button {
    border-radius: 100px;
    border: 1px solid #1D92FF;
    width: 100%;
    height: 30px;
    flex-shrink: 0;
    color: #1D92FF;
    font-family: Barlow;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.order-title {
    color: #091D3E;
    font-family: Barlow;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 20px;
}

.order-all {
    border-radius: 20px;
    border: 1px solid rgba(248, 248, 248, 0.10);
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(9, 29, 62, 0.10);
    width: 100%;
    height: auto;
    flex-shrink: 0;
    flex-direction: column;
    align-items: center;
    padding: 10px 20px;
}



.order-container {
    background: #EDF1F5;
}
</style>
