const products = [];
let choice;

function addProduct() {
  let id = +prompt("Nhập ID sản phẩm:");
  if (isNaN(id) || id <= 0) {
    console.log("ID không hợp lệ");
    return;
  }
  let name = prompt("Nhập tên sản phẩm:");
  let price = +prompt("Nhập giá sản phẩm:");
  if (isNaN(price) || price <= 0) {
    console.log("Giá không hợp lệ");
    return;
  }
  let category = prompt("Nhập danh mục sản phẩm:");
  let quantity = +prompt("Nhập số lượng sản phẩm:");
  if (isNaN(quantity) || quantity < 0) {
    console.log("Số lượng không hợp lệ");
    return;
  }

  products.push({ id, name, price, category, quantity });
  console.log("Thêm sản phẩm thành công");
}

function displayProducts() {
  if (products.length === 0) {
    console.log("Danh sách sản phẩm trống");
    return;
  }

  for (let product of products) {
    console.log(`
            ID: ${product.id}
            Name: ${product.name}
            Price: ${product.price}
            Category: ${product.category}
            Quantity: ${product.quantity}`);
  }
}

function displayProductById() {
  let id = +prompt("Nhập ID sản phẩm cần xem:");
  if (isNaN(id) || id <= 0) {
    console.log("ID không hợp lệ");
    return;
  }
  let product = products.find((product) => product.id === id);

  if (product) {
    console.log(`
            ID: ${product.id}
            Name: ${product.name}
            Price: ${product.price}
            Category: ${product.category}
            Quantity: ${product.quantity}`);
  } else {
    console.log("Không tìm thấy sản phẩm với ID này");
  }
}

function updateProduct() {
  let id = +prompt("Nhập ID sản phẩm cần cập nhật:");
  if (isNaN(id) || id <= 0) {
    console.log("ID không hợp lệ");
    return;
  }
  let productIndex = products.findIndex((product) => product.id === id);

  if (productIndex !== -1) {
    let product = products[productIndex];
    product.name = prompt("Nhập tên mới:", product.name);
    product.price = +prompt("Nhập giá mới:", product.price);
    if (isNaN(product.price) || product.price <= 0) {
      console.log("Giá không hợp lệ");
      return;
    }
    product.category = prompt("Nhập danh mục mới:", product.category);
    product.quantity = +prompt("Nhập số lượng mới:", product.quantity);
    if (isNaN(product.quantity) || product.quantity < 0) {
      console.log("Số lượng không hợp lệ");
      return;
    }
    console.log("Cập nhật sản phẩm thành công!");
  } else {
    console.log("Không tìm thấy sản phẩm với ID này");
  }
}

function deleteProduct() {
  let id = +prompt("Nhập ID sản phẩm cần xóa:");
  if (isNaN(id) || id <= 0) {
    console.log("ID không hợp lệ");
    return;
  }
  let index = products.findIndex((product) => product.id === id);

  if (index !== -1) {
    products.splice(index, 1);
    console.log("Xóa sản phẩm thành công");
  } else {
    console.log("Không tìm thấy sản phẩm với ID này!");
  }
}

function filterProductsByPrice() {
  let minPrice = +prompt("Nhập giá tối thiểu:");
  let maxPrice = +prompt("Nhập giá tối đa:");
  if (
    isNaN(minPrice) ||
    isNaN(maxPrice) ||
    minPrice < 0 ||
    maxPrice < 0 ||
    minPrice > maxPrice
  ) {
    console.log("Khoảng giá không hợp lệ");
    return;
  }

  let filteredProducts = products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );
  if (filteredProducts.length === 0) {
    console.log("Không có sản phẩm nào trong khoảng giá này");
    return;
  }

  for (let product of filteredProducts) {
    console.log(`
            ID: ${product.id}
            Name: ${product.name}
            Price: ${product.price}
            Category: ${product.category}
            Quantity: ${product.quantity}`);
  }
}

do {
  choice = +prompt(`
        1. Thêm sản phẩm vào danh sách sản phẩm
        2. Hiển thị tất cả sản phẩm
        3. Hiển thị chi tiết sản phẩm theo id
        4. Cập nhật thông tin sản phẩm theo id
        5. Xóa sản phẩm theo id
        6. Lọc sản phẩm theo khoảng giá
        7. Thoát
        Lựa chọn của bạn:`);

  switch (choice) {
    case 1:
      addProduct();
      break;

    case 2:
      displayProducts();
      break;

    case 3:
      displayProductById();
      break;

    case 4:
      updateProduct();
      break;

    case 5:
      deleteProduct();
      break;

    case 6:
      filterProductsByPrice();
      break;

    case 7:
      console.log("Thoát chương trình.");
      break;

    default:
      console.log("Lựa chọn không hợp lệ");
      break;
  }
} while (choice !== 7);