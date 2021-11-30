// components/m-text/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text: String,
    size: Number,
    color: String,
    align: String,
    style: String,
    isTruncation: Boolean,
    w: Number,
    h: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    _text: "",
    _size: 16,
    _color: "black",
    _align: "center",
    _style: "",
    _isTruncation: false,
    _w: 0,
    _h: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
  }
})
