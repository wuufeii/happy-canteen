Page({

  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var food = [
      {
        "id": "10001",
        "imgUrl": "/images/food.jpg",
        "title": "青椒肉丝",
        "detail": "口味香辣，菜品色香味俱全"
      },
      {
        "id": "10002",
        "imgUrl": "/images/food.jpg",
        "title": "青椒肉丝",
        "detail": "口味香辣，菜品色香味俱全"
      },
      {
        "id": "10003",
        "imgUrl": "/images/food.jpg",
        "title": "青椒肉丝",
        "detail": "口味香辣，菜品色香味俱全"
      },
      {
        "id": "10004",
        "imgUrl": "/images/food.jpg",
        "title": "青椒肉丝",
        "detail": "口味香辣，菜品色香味俱全"
      },
      {
        "id": "10005",
        "imgUrl": "/images/food.jpg",
        "title": "青椒肉丝",
        "detail": "口味香辣，菜品色香味俱全"
      },
      {
        "id": "10006",
        "imgUrl": "/images/food.jpg",
        "title": "青椒肉丝",
        "detail": "口味香辣，菜品色香味俱全"
      }
    ];
    this.setData({
      food: food
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})