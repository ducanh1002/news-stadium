<template>
    <div class="order-container">
        <div>
            <h1 class="payment-title">Thanh Toán</h1>
        </div>
        <div class="order-cart">
            <div class="order-list">
                <div class="order-detail">
                    <div class="order-detail-header">
                        <div class="payment-header">
                            <span style="display: inline-block;">Sản phẩm</span>
                            <span style="display: inline-block;">Đơn giá</span>
                            <span style="display: inline-block;">Số lượng</span>
                            <span style="display: inline-block;">Thành tiền</span>
                        </div>
                        <div class="payment-header-mobile">
                            <div class="payment-header-mobile-location" style="display: flex; gap: 5px;
                            color: #FFF;
                            font-family: Barlow;
                            font-size: 16px;
                            font-style: normal;
                            font-weight: 500;
                            line-height: normal;">
                                <img src="/images/location1.png" alt="ketqualol" class="location">
                                <span>OEG Stadium Chợ Mơ</span>
                            </div>

                            <p style="color: #FFF;
                            font-family: Barlow;
                            font-size: 14px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: normal;">Số 459 P. Bạch Mai, Trương Định, Hai Bà Trưng, Thành phố Hà Nội</p>
                        </div>
                    </div>

                    <div class="order-detail-list">
                        <div class="order-detail-rows">
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

                                <span class="quantity-mobile">Số lượng:</span>
                                <span>1</span>


                            </div>
                            <div class="order-money">
                                <span class="total-price">55.000đ</span>
                            </div>

                        </div>
                        <div class="order-detail-rows">

                            <div>
                                <img src="/images/D6 2.png" alt="ketqualol" class="location" style="margin-right: 5px;">
                            </div>
                            <div class="order-name">
                                <p class="order-name-title">Combo Burger Bò Teriyaki</p>
                                <p>01 Burger Bò Teriyaki</p>
                                <p>01 Khoai tây chiên (M)</p>
                            </div>
                            <div class="order-price">
                                <span class="original-price">60.000 đ</span>
                                <span class="sale-price">40.000 đ</span>
                            </div>
                            <div class="order-quantity">
                                <span class="quantity-mobile">Số lượng:</span>
                                <span>3</span>

                            </div>
                            <div class="order-money">
                                <span class="total-price">120.000đ</span>
                            </div>

                        </div>

                        <div class="order-detail-rows">

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
                                <span class="quantity-mobile">Số lượng:</span>
                                <span>1</span>
                            </div>
                            <div class="order-money">
                                <span class="total-price">55.000đ</span>
                            </div>

                        </div>
                    </div>

                    
                </div>

                <div class=order-payment-container-mobile>
                <div class="order-discount">
                    <div class="discount-header">
                        <span class="order-discount-fontbasic">Mã giảm giá</span>
                        <span class="order-discount-fontbasic1">Có thể chọn 2</span>
                    </div>

                    <div class="payment-discount-apply">
                        <div>
                            <img src="/images/OEG-Stadium-Logo-2 1.png" alt="ketqualol" class="location"
                                style="margin-right: 5px;">
                        </div>
                        <div class="vertical-line">

                        </div>
                        <div class="voucher-detail">
                            <span>Giảm 10% - Khách hàng mới</span>
                            <p>Chi tiết</p>
                        </div>
                    </div>

                    <div class="btn-un">
                        <button>Bỏ chọn</button>
                    </div>

                    <div>
                        <div class="discount-infor" v-if="!showDiscountInput">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                                <path
                                    d="M10.2401 2.99997L11.2001 3.89996L5.76006 8.99996L4.80006 8.09996L10.2401 2.99997ZM1.60006 -3.48968e-05H14.4001C15.2881 -3.48968e-05 16.0001 0.667465 16.0001 1.49997V4.49996C15.5757 4.49996 15.1688 4.658 14.8687 4.93931C14.5686 5.22061 14.4001 5.60214 14.4001 5.99996C14.4001 6.39779 14.5686 6.77932 14.8687 7.06063C15.1688 7.34193 15.5757 7.49996 16.0001 7.49996V10.5C16.0001 11.3325 15.2881 12 14.4001 12H1.60006C1.17572 12 0.768749 11.8419 0.468691 11.5606C0.168633 11.2793 6.21736e-05 10.8978 6.21736e-05 10.5V7.49996C0.888062 7.49996 1.60006 6.83247 1.60006 5.99996C1.60006 5.60214 1.43149 5.22061 1.13143 4.93931C0.831375 4.658 0.424409 4.49996 6.21736e-05 4.49996V1.49997C6.21736e-05 1.10214 0.168633 0.720609 0.468691 0.439305C0.768749 0.158 1.17572 -3.48968e-05 1.60006 -3.48968e-05ZM1.20006 1.12497L1.13143 3.40496C1.61758 3.66776 2.11934 4.04442 2.40006 4.49996C2.68078 4.95551 2.80006 5.47387 2.80006 5.99996C2.80006 6.52606 2.68078 6.66942 2.40006 7.12496C2.11934 7.58051 1.68621 7.83716 1.20006 8.09996V10.875H14.8001V8.24996C14.3139 7.98717 13.8808 7.95551 13.6001 7.49996C13.3193 7.04442 13.2001 6.52606 13.2001 5.99996C13.2001 5.47387 13.3193 4.95551 13.6001 4.49996C13.8808 4.04442 14.3139 4.01276 14.8001 3.74996V1.12497H1.20006ZM6.00006 2.99997C6.66406 2.99997 7.20006 3.50247 7.20006 4.12496C7.20006 4.74747 6.66406 5.24996 6.00006 5.24996C5.33606 5.24996 4.80006 4.74747 4.80006 4.12496C4.80006 3.50247 5.33606 2.99997 6.00006 2.99997ZM10.0001 6.74996C10.6641 6.74996 11.2001 7.25246 11.2001 7.87496C11.2001 8.49747 10.6641 8.99996 10.0001 8.99996C9.33606 8.99996 8.80006 8.49747 8.80006 7.87496C8.80006 7.25246 9.33606 6.74996 10.0001 6.74996Z"
                                    fill="#1D92FF" />
                            </svg>

                            <span @click="toggleDiscountInput"
                                style="color: #1D92FF; font-family: Barlow; font-size: 16px; font-style: normal; font-weight: 400; line-height: normal;">
                                Chọn hoặc nhập mã</span>
                        </div>
                        <div v-if="showDiscountInput" class="apply-voucher">
                            <input type="text" v-model="discountCode" class="input">
                            <button @click="applyDiscountCode" class="btn-apply">Áp dụng</button>
                        </div>
                    </div>
                </div>
                <div class="order-total">
                    <div class="tamtinh">
                        <span class="order-discount-fontbasic">Tạm tính</span>
                        <p>295.000 đ</p>
                    </div>
                    <div class="giamgia">
                        <span class="order-discount-fontbasic">Giảm giá</span>
                        <p>-29.500 đ</p>
                    </div>
                    <div class="order-line">

                    </div>
                    <div class="tongtien">
                        <span class="order-discount-fontbasic3">Tổng tiền</span>
                        <p>265.500 đ</p>
                    </div>

                </div>
            </div>

                <div class="order-detail">
                    <div class="order-detail-header">
                        <span>Phương thức thanh toán</span>
                    </div>
                    <div class="order-detail-list">
                        <div class="payment-detail-rows">
                            
                            <div class="check-box">
                                <input type="checkbox" id="tickBox" name="tickBox" class="checkbox">
                            </div>
                            <div class="payment-methods">
                                <div>
                                    <img src="/images/card 1.png" alt="ketqualol" class="location"
                                        style="margin-right: 5px;">
                                </div>
                                <span>ATM Card(Thẻ nội địa)</span>
                            </div>

                            <div class="check-box">
                                <input type="checkbox" id="tickBox" name="tickBox" class="checkbox">
                            </div>
                            <div class="payment-methods">
                                <div>
                                    <img src="/images/visa 1.png" alt="ketqualol" class="location"
                                        style="margin-right: 5px;">
                                </div>
                                <span>Thẻ quốc tế (Visa, Master, Amex, JCB)</span>
                            </div>
                            <div class="check-box">
                                <input type="checkbox" id="tickBox" name="tickBox" class="checkbox">
                            </div>
                            <div class="payment-methods">
                                <div>
                                    <img src="/images/Logo_Opay 1.png" alt="ketqualol" class="location"
                                        style="margin-right: 5px;">
                                </div>
                                <span>OEG Pay - Nhập mã <span style="color: #091D3E;
                                    font-family: Barlow;
                                    font-size: 16px;
                                    font-style: normal;
                                    font-weight: 600;
                                    line-height: normal;">GRANDOPENING</span> giảm ngay 20K</span>
                            </div>
                            <div class="check-box">
                                <input type="checkbox" id="tickBox" name="tickBox" class="checkbox">
                            </div>
                            <div class="payment-methods">
                                <div>
                                    <img src="/images/momo 1.png" alt="ketqualol" class="location"
                                        style="margin-right: 5px;">
                                </div>
                                <span>Thanh toán qua Momo</span>
                            </div>
                            <div class="check-box">
                                <input type="checkbox" id="tickBox" name="tickBox" class="checkbox">
                            </div>
                            <div class="payment-methods">
                                <div>
                                    <img src="/images/ZaloPay-logo 1.png" alt="ketqualol" class="location"
                                        style="margin-right: 5px;">
                                </div>
                                <span>Thanh toán qua Zalopay</span>
                            </div>
                            <div class="check-box">
                                <input type="checkbox" id="tickBox" name="tickBox" class="checkbox">
                            </div>
                            <div class="payment-methods">
                                <div>
                                    <img src="/images/point 1.png" alt="ketqualol" class="location"
                                        style="margin-right: 5px;">
                                </div>
                                <span>OEG Point</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class=order-payment-container>
                    <div class="payment-discount">
                        <div class="discount-header">
                            <span class="order-discount-fontbasic">Địa điểm</span>
                        </div>

                        <div class="payment-location">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 18" fill="none">
                                <path
                                    d="M14 7.54545C14 12.6364 7.5 17 7.5 17C7.5 17 1 12.6364 1 7.54545C1 5.80949 1.68482 4.14463 2.90381 2.91712C4.12279 1.68961 5.77609 1 7.5 1C9.22391 1 10.8772 1.68961 12.0962 2.91712C13.3152 4.14463 14 5.80949 14 7.54545Z"
                                    stroke="#091D3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M7.5 9.72727C8.69662 9.72727 9.66667 8.75044 9.66667 7.54545C9.66667 6.34047 8.69662 5.36364 7.5 5.36364C6.30338 5.36364 5.33333 6.34047 5.33333 7.54545C5.33333 8.75044 6.30338 9.72727 7.5 9.72727Z"
                                    stroke="#091D3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span>OEG Stadium Chợ Mơ</span>

                        </div>
                        <p>Số 459 P. Bạch Mai, Trương Định, Hai Bà Trưng, Thành phố Hà Nội</p>
                    </div>
                <div class="order-discount">
                    <div class="discount-header">
                        <span class="order-discount-fontbasic">Mã giảm giá</span>
                        <span class="order-discount-fontbasic1">Có thể chọn 2</span>
                    </div>

                    <div class="payment-discount-apply">
                        <div>
                            <img src="/images/OEG-Stadium-Logo-2 1.png" alt="ketqualol" class="location"
                                style="margin-right: 5px;">
                        </div>
                        <div class="vertical-line">

                        </div>
                        <div class="voucher-detail">
                            <span>Giảm 10% - Khách hàng mới</span>
                            <p>Chi tiết</p>
                        </div>
                    </div>

                    <div class="btn-un">
                        <button>Bỏ chọn</button>
                    </div>

                    <div>
                        <div class="discount-infor" v-if="!showDiscountInput">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                                <path
                                    d="M10.2401 2.99997L11.2001 3.89996L5.76006 8.99996L4.80006 8.09996L10.2401 2.99997ZM1.60006 -3.48968e-05H14.4001C15.2881 -3.48968e-05 16.0001 0.667465 16.0001 1.49997V4.49996C15.5757 4.49996 15.1688 4.658 14.8687 4.93931C14.5686 5.22061 14.4001 5.60214 14.4001 5.99996C14.4001 6.39779 14.5686 6.77932 14.8687 7.06063C15.1688 7.34193 15.5757 7.49996 16.0001 7.49996V10.5C16.0001 11.3325 15.2881 12 14.4001 12H1.60006C1.17572 12 0.768749 11.8419 0.468691 11.5606C0.168633 11.2793 6.21736e-05 10.8978 6.21736e-05 10.5V7.49996C0.888062 7.49996 1.60006 6.83247 1.60006 5.99996C1.60006 5.60214 1.43149 5.22061 1.13143 4.93931C0.831375 4.658 0.424409 4.49996 6.21736e-05 4.49996V1.49997C6.21736e-05 1.10214 0.168633 0.720609 0.468691 0.439305C0.768749 0.158 1.17572 -3.48968e-05 1.60006 -3.48968e-05ZM1.20006 1.12497L1.13143 3.40496C1.61758 3.66776 2.11934 4.04442 2.40006 4.49996C2.68078 4.95551 2.80006 5.47387 2.80006 5.99996C2.80006 6.52606 2.68078 6.66942 2.40006 7.12496C2.11934 7.58051 1.68621 7.83716 1.20006 8.09996V10.875H14.8001V8.24996C14.3139 7.98717 13.8808 7.95551 13.6001 7.49996C13.3193 7.04442 13.2001 6.52606 13.2001 5.99996C13.2001 5.47387 13.3193 4.95551 13.6001 4.49996C13.8808 4.04442 14.3139 4.01276 14.8001 3.74996V1.12497H1.20006ZM6.00006 2.99997C6.66406 2.99997 7.20006 3.50247 7.20006 4.12496C7.20006 4.74747 6.66406 5.24996 6.00006 5.24996C5.33606 5.24996 4.80006 4.74747 4.80006 4.12496C4.80006 3.50247 5.33606 2.99997 6.00006 2.99997ZM10.0001 6.74996C10.6641 6.74996 11.2001 7.25246 11.2001 7.87496C11.2001 8.49747 10.6641 8.99996 10.0001 8.99996C9.33606 8.99996 8.80006 8.49747 8.80006 7.87496C8.80006 7.25246 9.33606 6.74996 10.0001 6.74996Z"
                                    fill="#1D92FF" />
                            </svg>

                            <span @click="toggleDiscountInput"
                                style="color: #1D92FF; font-family: Barlow; font-size: 16px; font-style: normal; font-weight: 400; line-height: normal;">
                                Chọn hoặc nhập mã</span>
                        </div>
                        <div v-if="showDiscountInput" class="apply-voucher">
                            <input type="text" v-model="discountCode" class="input">
                            <button @click="applyDiscountCode" class="btn-apply">Áp dụng</button>
                        </div>
                    </div>
                </div>
                <div class="order-total">
                    <div class="tamtinh">
                        <span class="order-discount-fontbasic">Tạm tính</span>
                        <p>295.000 đ</p>
                    </div>
                    <div class="giamgia">
                        <span class="order-discount-fontbasic">Giảm giá</span>
                        <p>-29.500 đ</p>
                    </div>
                    <div class="order-line">

                    </div>
                    <div class="tongtien">
                        <span class="order-discount-fontbasic3">Tổng tiền</span>
                        <p>265.500 đ</p>
                    </div>

                </div>
                <div class="btn-payment">
                    <button>Thanh toán</button>
                </div>
                <div class="btn-cancel">
                    <button>Hủy</button>
                </div>

            </div>
            <div class="btn-pay">
            <div class="btn-payment">
                <button>Thanh toán</button>
            </div>
            <div class="btn-cancel">
                <button>Hủy</button>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
const { id } = useRoute().params;

export default {
    data() {
        return {
            showDiscountInput: false,
            discountCode: ''
        };
    },
    methods: {
        toggleDiscountInput() {
            this.showDiscountInput = !this.showDiscountInput;
        },
        applyDiscountCode() {
            alert('Discount code applied: ' + this.discountCode);
        }
    },
    computed: {
        routeId() {
            return id;
        }
    }
};
</script>


<style scoped>
/*responsive*/
/**mobile screen**/
@media screen and (max-width: 768px) {  
    .btn-pay{
        margin-bottom: 15px;
    }
    
    .order-payment-container-mobile{
        margin-bottom: 20px;
    }
    .btn-un{
        width: 30%;
    }
    .payment-discount{
        display:none;
    }
    .order-detail{
        margin-bottom: 25px;
    }
    .order-payment-container{
        display:none;
    }
  
    .payment-detail-rows{
        grid-template-columns: 10% 90%;
    }
    .order-payment{
        display: none;
    }
    .order-quantity {
        color: #091D3E;
        font-family: Barlow;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        /* 142.857% */
    }

    .order-detail-rows {
        display: grid;
        grid-template-columns: 39% 0%;
        gap: 10px;
        align-items: center;
        padding: 5px 10px;
    }

    .order-name,
    .order-price,
    .order-quantity {
        grid-column: 3;
    }

    .total-price {
        display: none;
    }

    .order-container {
        padding: 0px 10px;
    }

    .payment-header {
        display: none;
    }

    .order-detail-header {
        padding: 40px 20px;
    }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {

    
    
    .order-detail-rows {
        grid-template-columns: 18% 35% 24% 18% 5%;

    }
    .total-price {
        display: none;
    }

    .order-container {
        padding: 0px 20px;
    }

    .payment-header {
        display: none;
    }

    .order-detail-header {
        padding: 40px 20px;
    }
    .order-payment-container-mobile{
        margin-bottom: 20px;
    }
    .btn-un{
        width: 30%;
    }
    .payment-discount{
        display:none;
    }
    .order-detail{
        margin-bottom: 25px;
    }
    .order-payment-container{
        display:none;
    }
  
    .payment-detail-rows{
        grid-template-columns: 5% 90%;
    }
    .order-payment{
        display: none;
    }
    .order-quantity {
        color: #091D3E;
        font-family: Barlow;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
    }

    .order-detail-header {
        padding: 40px 20px;
    }

    .payment-header {
        display: none;
    }

}

@media screen and (min-width: 1024px) and (max-width: 1280px) {
    .btn-pay{
        display: none;
    }
    .order-detail{
        margin-bottom: 20px;
    }

    .order-payment-container-mobile{
        display: none;
    }
    .payment-discount{
        display: none;
    }

    .payment-detail-rows{
        grid-template-columns: 4% 50%;
    }
    .quantity-mobile {
        display: none;
    }

    .order-detail-header {
        padding-left: 20px;
    }

    .payment-header {
        display: grid;

        width: 100%;
    }

    .payment-header-mobile {
        display: none;
    }

    .btn-un {
        width: 40%;
        font-size: 16px;
        margin-bottom: 5px;
    }

    .payment-header {
        grid-template-columns: 50% 17% 19% 14%;
    }

    .order-container {
        padding: 30px 50px
    }

    .btn-apply {
        width: 35%;
    }

    .sale-price {
        font-size: 14px
    }

    .original-price {
        font-size: 12px;
    }

    .sale-price-soldout {
        font-size: 14px;
    }

    .total-price-soldout {
        font-size: 14px;
    }

    .total-price {
        font-size: 14px;
    }

    .order-detail-rows {
        grid-template-columns: 12% 35% 24% 18% 11%;

    }

    .order-all {
        grid-template-columns: 45% 18% 14% 13% 12%;
        font-size: 15px;
    }

    .order-all button {
        font-size: 15px
    }

    .order-cart {
        display: grid;
        grid-template-columns: 76% 24%;
        gap: 10px;
    }
}

@media screen and (min-width: 1281px) {
    .btn-pay{
        display: none;
    }
    .order-detail{
        margin-bottom: 20px;
    }
    .order-payment-container-mobile{
        display: none;
    }
    .payment-discount{
        display: none;
    }
    .payment-detail-rows{
        grid-template-columns: 4% 50%;
    }
    .quantity-mobile {
        display: none;
    }

    .order-detail-header {
        padding-left: 20px;
    }

    .payment-header {
        display: grid;

        width: 100%;
    }

    .payment-header-mobile {
        display: none;
    }

    .btn-un {
        width: 40%;
        font-size: 16px;
        margin-bottom: 5px;
    }

    .payment-header {
        grid-template-columns: 50% 17% 19% 14%;
    }

    .order-detail-header {
        display: grid;
        grid-template-columns: 10% 20%;
    }

    .order-detail-rows {
        grid-template-columns: 12% 35% 25% 17% 11%;
    }

    .order-container {
        padding: 30px 120px;
    }



    .sale-price {
        font-size: 16px
    }

    .original-price {
        font-size: 14px;
    }

    .total-price {
        font-size: 16px;
    }

    .order-cart {
        display: grid;
        grid-template-columns: 76% 24%;
        gap: 10px;
    }
}

.tamtinh p {
    color: #091D3E;
    text-align: right;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.giamgia p {
    color: #4CAF50;
    text-align: right;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.tongtien p {
    color: #1D92FF;
    text-align: right;
    font-family: Barlow;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.btn-un {
    height: auto;
    flex-shrink: 0;
    border-radius: 100px;
    border: 1px solid #1D92FF;
    padding: 5px;
    margin-left: auto;
}

.btn-un {
    color: #1D92FF;
    text-align: center;
    font-family: Barlow;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}





.payment-discount-apply {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 5px
}

.voucher-detail p {
    color: #1D92FF;
    font-family: Barlow;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    /* 133.333% */
}

.voucher-detail span {
    color: #091D3E;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    /* 150% */
}

.vertical-line {
    background: #000;
    width: 1px;
    height: 36px;
}

.btn-apply {
    border-radius: 22px;
    border: 1px solid rgba(9, 29, 62, 0.10);
    background: linear-gradient(83deg, #0038FF 0%, #1D92FF 99.39%);
    height: auto;
    flex-shrink: 0;
    padding: 10px;
}

.btn-apply {
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

.apply-voucher {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.order-discount {
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

.discount-infor {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
}

.payment-discount p {
    color: #091D3E;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    margin-top: 10px;
}

.payment-location p {
    color: #091D3E;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
}

.payment-location {
    display: flex;
    gap: 5px;
}

.payment-location span {
    color: #091D3E;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.payment-detail-rows {
    display: grid;
    align-items: center;
    padding: 20px 20px;

}

.payment-methods {
    margin-bottom: 15px;
    width: 100%;
    height: 70px;
    flex-shrink: 0;
    border-radius: 5px;
    background: rgba(9, 29, 62, 0.10);
    display: flex;
    align-items: center;
    padding: 0 20px;
    gap: 10px;
}

.payment-methods span {
    color: #091D3E;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}



.payment-title {
    color: #091D3E;
    text-align: center;
    font-family: Barlow;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.payment-title {
    padding: 30px 0;
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

.btn-cancel {
    width: 100%;
    height: auto;
    flex-shrink: 0;
    border-radius: 50px;
    border: 1px solid #1D92FF;
}

.btn-cancel {
    color: #1D92FF;
    text-align: center;
    font-family: Barlow;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    padding: 5px 0;
    margin-top: 10px;
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
    gap: 18px;
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
    padding: 18px;

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



.total-price {
    color: #1D92FF;
    text-align: center;
    font-family: Barlow;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
}


.order-quantity {
    display: flex;
    align-items: center;
    gap: 5px;
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

.order-detail-rows {
    display: grid;
    align-items: center;
    padding: 20px 20px;
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

.order-detail-header {
    border-radius: 20px 20px 0px 0px;
    background: #091D3E;
    width: 100%;
    height: 58px;
    flex-shrink: 0;
}

.order-container {
    background: #EDF1F5;
}

.check-box input {
    border-radius: 5px;
    border: 2px solid rgba(9, 29, 62, 0.20);
    box-shadow: 0px 30px 90px 0px rgba(83, 83, 83, 0.07);
}</style>