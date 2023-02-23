 export default columns= [
    {
      name: "propertyCode",
      value: "Mã tài sản",
      type: "text",
      total: false,
    },
    {
      name: "propertyName",
      value: "Tên tài sản",
      type: "text",
      total: false,
    },
    {
      name: "propertyTypeName",
      value: "Loại tài sản",
      type: "text",
      total: false,
    },
    {
      name: "departmentName",
      value: "Tên bộ phận sử dụng",
      type: "text",
      total: false,
    },
    {
      name: "quantity",
      value: "Số lượng",
      type: "number",
      total: true,
    },
    {
      name: "markedPrice",
      value: "Nguyên giá",
      type: "number",
      total: true,
    },
    {
      name: "attritionValue",
      value: "KH/HM Lũy kế",
      type: "number",
      total: true,
    },
    {
      name: "presentValue",
      value: "Giá trị còn lại",
      type: "number",
      total: true,
    },
    {
      name: "control",
      value: "Chức năng",
      type: "control",
      control: ["Edit", "Duplicate"],
      total: false,
    },
  ] 