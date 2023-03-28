// Copyright (c) 2020 Janet Do All rights reserved
//
// Created by: Janet Do
// Created on: Sep 2020
// This file generates pay and tax deductions

"use strict"

function calculate() {
  const deductions = 0.18
  // input
  const hours = parseInt(document.getElementById("hours").value)
  const rate = parseInt(document.getElementById("rate").value)

  // process
  const pay = hours * rate * (1 - deductions)
  const tax = hours * rate * deductions
  
  // output
  document.getElementById("pay").innerHTML = "Your pay will be: $" + pay.toFixed(2)
  document.getElementById("tax").innerHTML = "The government will take: $" + tax.toFixed(2)
}
