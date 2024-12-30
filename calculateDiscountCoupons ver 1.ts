calculateDiscountCoupons() {
  let couponapplied = true;
  let isMerchantIdNull = this.couponsData.couponsfor.find((x: any) => x.couponsformerchantid == null);
  if (isMerchantIdNull && isMerchantIdNull != -1) {
    this.isAdvenzoneCommission = true;
    this.discount = 0;
    if (this.couponsData.maxdiscount && this.couponsData.maxdiscount != null && this.couponsData.maxdiscount != "" && this.couponsData.validforminamount && this.couponsData.validforminamount != null && this.couponsData.validforminamount != "") {
      if (Number(this.couponsData.validforminamount) <= this.totalAmount) {
        this.discount = this.totalAmount * (Number(this.couponsData.discountpercentage) / 100);
        if (this.discount > Number(this.couponsData.maxdiscount)) {
          this.discount = this.couponsData.maxdiscount;
        }
      } else {
        couponapplied = false;
        alert("This coupon is valid for only minimum amount of ₹ " + this.couponsData.validforminamount)
      }
    } else if (this.couponsData.maxdiscount && this.couponsData.maxdiscount != null && this.couponsData.maxdiscount != "") {
      this.discount = this.totalAmount * (Number(this.couponsData.discountpercentage) / 100);
      if (this.discount > Number(this.couponsData.maxdiscount)) {
        this.discount = this.couponsData.maxdiscount;
      }
    } else if (this.couponsData.validforminamount && this.couponsData.validforminamount != null && this.couponsData.validforminamount != "") {
      if (Number(this.couponsData.validforminamount) <= this.totalAmount) {
        this.discount = this.totalAmount * (Number(this.couponsData.discountpercentage) / 100);
      } else {
        couponapplied = false;
        alert("This coupon is valid for only minimum amount of ₹ " + this.couponsData.validforminamount)
      }
    } else {
      this.discount = this.totalAmount * (Number(this.couponsData.discountpercentage) / 100);
    }
    this.discount = Math.floor(this.discount);
    this.discount=Math.min(this.payableAmount,this.discount);
    this.grandTotal = this.totalAmount - this.discount;
    this.payableAmount = this.payableAmount - this.discount;
    this.payableAmount = Math.round(this.payableAmount);
    if (this.payableAmount < 9) {
      // let actualAmount = this.payableAmount;
      this.payableAmount = 9;
      this.discount = this.discount - this.payableAmount;
    }
    this.advancePercentage = Math.round((this.payableAmount / Number(this.totalAmount)) * 100);
    this.remainingPercentage = Math.round(100 - this.advancePercentage);
  } else {
    this.isAdvenzoneCommission = false;
    this.discount = 0;
    if (this.couponsData.maxdiscount && this.couponsData.maxdiscount != null && this.couponsData.maxdiscount != "" && this.couponsData.validforminamount && this.couponsData.validforminamount != null && this.couponsData.validforminamount != "") {
      if (Number(this.couponsData.validforminamount) <= this.totalAmount) {
        this.discount = this.totalAmount * (Number(this.couponsData.discountpercentage) / 100);
        if (this.discount > Number(this.couponsData.maxdiscount)) {
          this.discount = this.couponsData.maxdiscount;
        }
      } else {
        couponapplied = false;
        alert("This coupon is valid for only minimum amount of ₹ " + this.couponsData.validforminamount)
      }
    } else if (this.couponsData.maxdiscount && this.couponsData.maxdiscount != null && this.couponsData.maxdiscount != "") {
      this.discount = this.totalAmount * (Number(this.couponsData.discountpercentage) / 100);
      if (this.discount > Number(this.couponsData.maxdiscount)) {
        this.discount = this.couponsData.maxdiscount;
      }
    } else if (this.couponsData.validforminamount && this.couponsData.validforminamount != null && this.couponsData.validforminamount != "") {
      if (Number(this.couponsData.validforminamount) <= this.totalAmount) {
        this.discount = this.totalAmount * (Number(this.couponsData.discountpercentage) / 100);
      } else {
        couponapplied = false;
        alert("This coupon is valid for only minimum amount of ₹ " + this.couponsData.validforminamount)
      }
    } else {
      this.discount = this.totalAmount * (Number(this.couponsData.discountpercentage) / 100);
    }
    this.discount = Math.floor(this.discount);
    this.discount=Math.min(this.totalAmount-this.payableAmount,this.discount);
    this.grandTotal = this.totalAmount - this.discount;
    this.payableAmount = this.payableAmount;
    this.payableAmount = Math.round(this.payableAmount);
    if (this.payableAmount < 9) {
      // let actualAmount = this.payableAmount;
      this.payableAmount = 9;
      this.discount = this.discount - this.payableAmount;
    }
    this.advancePercentage = Math.round((this.payableAmount / Number(this.grandTotal)) * 100);
    this.remainingPercentage = Math.round(100 - this.advancePercentage);
  }
  return couponapplied;
}
