/*
 * @Author: your name
 * @Date: 2021-04-22 10:37:45
 * @LastEditTime: 2021-12-15 09:19:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Drill\React\meituan-react\src\utils\url.js
 */
export default {
  getProductList: (path, rowIndex, pageSize) => `/mock/products/${path}.json?rowIndex=${rowIndex}&pageSize=${pageSize}`,
  getDiscountList: (pageNo, pageSize) => `/jeecg-boot/meituan/meituanDiscount/mobile/list?pageNo=${pageNo}&pageSize=${pageSize}`,
  getProductDetail: (id) => `/mock/product_detail/${id}.json`,
  getShopById: (id) => `/mock/shops/${id}.json`,
  getPopularKeywords: () => '/mock/keywords/popular.json',
  getRelatedKeywords: (text) => `/mock/keywords/related.json?keyword=${text}`,
  getRelatedShops: (keyword) => `/mock/shops/related.json?keyword=${keyword}`,
  getOrders: () => `/mock/orders/orders.json`,
}