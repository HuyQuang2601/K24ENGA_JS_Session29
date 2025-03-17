const menu = {};
let choice;

function addDish() {
  let category = prompt("Nhập danh mục:");
  if (!menu[category]) {
    menu[category] = [];
  }
  let name = prompt("Nhập tên món ăn:");
  let price = +prompt("Nhập giá món ăn:");
  if (isNaN(price) || price <= 0) {
    console.log("Giá không hợp lệ");
    return;
  }
  let description = prompt("Nhập mô tả món ăn:");

  menu[category].push({ name, price, description });
  console.log("Thêm món ăn thành công");
}

function deleteDish() {
  let category = prompt("Nhập danh mục:");
  if (!menu[category]) {
    console.log("Danh mục không tồn tại");
    return;
  }
  let name = prompt("Nhập tên món ăn cần xóa:");
  let index = menu[category].findIndex((dish) => dish.name === name);

  if (index !== -1) {
    menu[category].splice(index, 1);
    console.log("Xóa món ăn thành công");
  } else {
    console.log("Không tìm thấy món ăn với tên này");
  }
}

function updateDish() {
  let category = prompt("Nhập danh mục:");
  if (!menu[category]) {
    console.log("Danh mục không tồn tại");
    return;
  }
  let name = prompt("Nhập tên món ăn cần cập nhật:");
  let dish = menu[category].find((dish) => dish.name === name);

  if (dish) {
    dish.name = prompt("Nhập tên mới:", dish.name);
    dish.price = +prompt("Nhập giá mới:", dish.price);
    if (isNaN(dish.price) || dish.price <= 0) {
      console.log("Giá không hợp lệ");
      return;
    }
    dish.description = prompt("Nhập mô tả mới:", dish.description);
    console.log("Cập nhật món ăn thành công!");
  } else {
    console.log("Không tìm thấy món ăn với tên này");
  }
}

function displayMenu() {
  if (Object.keys(menu).length === 0) {
    console.log("Menu trống");
    return;
  }

  for (let category in menu) {
    console.log(`Danh mục: ${category}`);
    for (let dish of menu[category]) {
      console.log(
        `  Tên: ${dish.name}, Giá: ${dish.price}, Mô tả: ${dish.description}`
      );
    }
  }
}

function searchDish() {
  let name = prompt("Nhập tên món ăn cần tìm:");
  let found = false;

  for (let category in menu) {
    for (let dish of menu[category]) {
      if (dish.name === name) {
        console.log(
          `Danh mục: ${category}, Tên: ${dish.name}, Giá: ${dish.price}, Mô tả: ${dish.description}`
        );
        found = true;
      }
    }
  }

  if (!found) {
    console.log("Không tìm thấy món ăn với tên này");
  }
}

do {
  choice = +prompt(`
        1. Thêm món ăn vào danh mục
        2. Xóa món ăn theo tên khỏi danh mục
        3. Cập nhật thông tin món ăn theo tên
        4. Hiển thị toàn bộ menu
        5. Tìm kiếm món ăn theo tên
        6. Thoát
        Lựa chọn của bạn:`);

  switch (choice) {
    case 1:
      addDish();
      break;

    case 2:
      deleteDish();
      break;

    case 3:
      updateDish();
      break;

    case 4:
      displayMenu();
      break;

    case 5:
      searchDish();
      break;

    case 6:
      console.log("Thoát chương trình.");
      break;

    default:
      console.log("Lựa chọn không hợp lệ");
      break;
  }
} while (choice !== 6);