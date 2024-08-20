/*
#################################################
Bài 1 - Quản lý tuyển sinh
#################################################
*/


/*
#################################################
Bài 2 - Tính tiền điện
#################################################
*/
function calElectricity(kwValue) {
  let electValue = 0;

  if (kwValue <= 50) {
    electValue = kwValue * 500;
  } else if (kwValue <= 100) {
    electValue = 50 * 500 + (kwValue - 50) * 650;
  } else if (kwValue <= 200) {
    electValue = 50 * 500 + 50 * 650 + (kwValue - 100) * 850;
  } else if (kwValue <= 350) {
    electValue = 50 * 500 + 50 * 650 + 100 * 850 + (kwValue - 200) * 1100;
  } else {
    electValue = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kwValue - 350) * 1300;
  }

  return electValue.toLocaleString();
}

document.getElementById("electricity-calculator").onclick = function () {
  let fullName = document.getElementById("full-name").value;
  let kwValue = +document.getElementById("kw-value").value;
  let electValue = calElectricity(kwValue);
  let electResult = `➡️Họ tên: ${fullName}\n➡️Tiền điện: ${electValue} VND`;
  console.log("Electricity bill =", electValue);

  document.getElementById("electricity-result").value = electResult;
};


/*
#################################################
Bài 3 - Tính thuế thu nhập cá nhân
#################################################
*/
function calTax(annualSalary, dependant) {
  const deductionPerDependent = 1.6e+6;
  const baseDeduction = 4e+6;
  let taxSalary = annualSalary - baseDeduction - (dependant*deductionPerDependent);

  if (taxSalary <= 60e+6) {
    taxRate = 5;
  } else if (taxSalary <= 120e+6) {
    taxRate = 10;
  } else if (taxSalary <= 210e+6) {
    taxRate = 15;
  } else if (taxSalary <= 384e+6) {
    taxRate = 20;
  } else if (taxSalary <= 624e+6) {
    taxRate = 25;
  } else if (taxSalary <= 960e+6) {
    taxRate = 30;
  } else {
    taxRate = 35;
  }

  const taxValue = (taxSalary*taxRate) / 100;

  return taxValue.toLocaleString();
}

document.getElementById("tax-calculator").onclick = function () {
  let fullName = document.getElementById("fullName").value;
  let annualSalary = +document.getElementById("annualSalary").value;
  let dependant = +document.getElementById("dependant").value;
  let taxValue = calTax(annualSalary, dependant);
  let taxtResult = `➡️Họ tên: ${fullName}\n➡️Tiền thuế: ${taxValue} VND`;
  console.log("Tax value =", taxValue);

  document.getElementById("tax-result").value = taxtResult;
};


/*
#################################################
Bài 4 - Tính tiền cáp
#################################################
*/