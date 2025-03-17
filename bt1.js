const manage = [];
let choice;

function addContact() {
  let id = +prompt("Nhập ID:");
  if (isNaN(id) || id <= 0) {
    console.log("ID không hợp lệ");
    return;
  }
  let name = prompt("Nhập tên:");
  let email = prompt("Nhập email:");
  if (!email.includes("@")) {
    console.log("Email không hợp lệ");
    return;
  }
  let phone = +prompt("Nhập số điện thoại:");
  if (isNaN(phone) || phone <= 0) {
    console.log("Số điện thoại không hợp lệ");
    return;
  }

  manage.push({ id, name, email, phone });
  console.log("Thêm liên hệ thành công");
}

function displaymanage() {
  if (manage.length === 0) {
    console.log("Danh bạ trống");
    return;
  }

  for (let index in manage) {
    console.log(`
            ID: ${manage[index].id}
            Name: ${manage[index].name}
            Email: ${manage[index].email}
            Phone: ${manage[index].phone}`);
  }
}

function searchByPhone() {
  let phone = prompt("Nhập số điện thoại cần tìm:");
  if (isNaN(phone) || phone <= 0) {
    console.log("Số điện thoại không hợp lệ");
    return;
  }
  let found = manage.findIndex((contact) => contact.phone === phone);

  if (found !== -1) {
    console.log(`Tìm thấy:
             ID: ${manage[found].id}
             Name: ${manage[found].name}
             Email: ${manage[found].email}
             Phone: ${manage[found].phone}`);
  } else {
    console.log("Không tìm thấy số điện thoại");
  }
}

function updateContact() {
  let id = +prompt("Nhập ID liên hệ cần cập nhật:");
  if (isNaN(id) || id <= 0) {
    console.log("ID không hợp lệ");
    return;
  }
  let contactIndex = manage.findIndex((contact) => contact.id === id);

  if (contactIndex !== -1) {
    let contact = manage[contactIndex];
    contact.name = prompt("Nhập tên mới:", contact.name);
    if (!contact.name) {
      console.log("Tên không hợp lệ");
      return;
    }
    contact.email = prompt("Nhập email mới:", contact.email);
    if (!contact.email.includes("@")) {
      console.log("Email không hợp lệ");
      return;
    }
    contact.phone = prompt("Nhập số điện thoại mới:", contact.phone);
    if (isNaN(contact.phone) || contact.phone <= 0) {
      console.log("Số điện thoại không hợp lệ");
      return;
    }
    console.log("Cập nhật thành công!");
  } else {
    console.log("Không tìm thấy liên hệ với ID này");
  }
}

let id = +prompt("Nhập ID liên hệ cần xóa:");
if (isNaN(id) || id <= 0) {
  console.log("ID không hợp lệ");
  return;
}
let index = manage.findIndex((contact) => contact.id === id);

if (index !== -1) {
  manage.splice(index, 1);
  console.log("Xóa thành công");
} else {
  console.log("Không tìm thấy liên hệ với ID này!");
}

do {
  choice = +prompt(`
        1. Thêm đối tượng Contact vào danh sách liên hệ
        2. Hiển thị danh sách danh bạ
        3. Tìm kiếm thông tin Contact theo số điện thoại
        4. Cập nhật thông tin Contact(name, email, phone) theo id
        5. Xóa một đối tượng Contact khỏi danh sách danh bạ theo id.
        6.Thoát
        Lua chon cua ban`);
  switch (choice) {
    case 1:
      addContact();
      break;

    case 2:
      displaymanage();
      break;

    case 3:
      searchByPhone();
      break;

    case 4:
      updateContact();
      break;

    case 5:
      deleteContact();
      break;

    case 6:
      console.log("Thoát chương trình.");
      break;

    default:
      console.log("Lựa chọn không hợp lệ");
      break;
  }
} while (choice !== 6);