let choice;
const jobs = [];
let searchID;
const addJob = (jobs) => {
  const jobID = Math.floor(Math.random() * 1000 + 1);
  const jobName = prompt(`Nhap ten cong viec`);
  const jobDescription = prompt(`Nhap mo ta cong viec`);
  const jobStart = prompt(`Nhap thoi gian bat dau (DD/MM/YYYY)`);
  const jobStatus = false;
  const newJob = {
    jobID,
    jobName,
    jobDescription,
    jobStart,
    jobStatus,
  };
  jobs.push(newJob);
  console.log(`Da them cong viec thanh cong`);
  return;
};

const displayJob = (jobs) => {
  jobs.forEach((value, index) => {
    console.log(
      `${index + 1}. ID: ${value.jobID} - Name : ${value.jobName} - Status : ${
        value.jobStatus
      }`
    );
  });
};

const updateJob = (jobs, searchID) => {
  let index = jobs.findIndex((job) => job.jobID === searchID);
  if (index !== -1) {
    let choice = +prompt(`
            1. Chuyen thanh trang thai hoan thanh
            2. Chuyen thanh trang thai chua hoan thanh`);
    switch (choice) {
      case 1:
        jobs[index].jobStatus = true;
        console.log(`Da cap nhat trang thai thanh cong`);
        break;
      case 2:
        jobs[index].jobStatus = false;
        console.log(`Da cap nhat trang thai thanh cong`);
        break;
      default:
        console.log(`Lua chon khong hop le`);
        break;
    }
  } else {
    console.log(`Khong tim thay cong viec`);
    return;
  }
};

const filterJob = (jobs) => {
  let filterList = [];
  let choice = +prompt(`
        1. Loc theo trang thai hoan thanh
        2. Loc theo trang thai chua hoan thanh`);
  switch (choice) {
    case 1:
      filterList = jobs.filter((job) => job.jobStatus === true);
      console.log(`Danh sach sau khi loc :`);
      filterList.forEach((value, index) => {
        console.log(
          `${index + 1}. ID: ${value.jobID} - Name : ${
            value.jobName
          } - Status : ${value.jobStatus}`
        );
      });
      break;
    case 2:
      filterList = jobs.filter((job) => job.jobStatus === false);
      console.log(`Danh sach sau khi loc :`);
      filterList.forEach((value, index) => {
        console.log(
          `${index + 1}. ID: ${value.jobID} - Name : ${
            value.jobName
          } - Status : ${value.jobStatus}`
        );
      });
      break;
    default:
      console.log(`Lua chon khong hop le`);
      break;
  }
};

const sortJob = (jobs) => {
  jobs.sort((a, b) => b.jobStatus - a.jobStatus);
  console.log("Da sap xep cong viec thanh cong.");
};

do {
  searchID = 0;
  choice = +prompt(`
        1. Them cong viec moi
        2. Hien thi tat ca cong viec
        3. Cap nhat trang thai cong viec
        4. Loc cac cong viec theo trang thai
        5. Sap xep cac cong viec theo trang thai
        6. Thoat
        Lua chon cua ban`);
  switch (choice) {
    case 1:
      addJob(jobs);
      break;
    case 2:
      displayJob(jobs);
      break;
    case 3:
      searchID = +prompt("Nhap ID");
      updateJob(jobs, searchID);
      break;
    case 4:
      filterJob(jobs);
      break;
    case 5:
      sortJob(jobs);
      break;
    case 6:
      console.log(`Tam biet`);
      break;
    default:
      console.log(`Lua chon khong hop le`);

      break;
  }
} while (choice !== 6);