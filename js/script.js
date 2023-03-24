// Copyright (c) 2020 Janet Do All rights reserved
//
// Created by: Janet Do
// Created on: Sep 2020
// This file generates the area of a triangle
"use strict"
function calculate() {
  // input
  const hours = parseInt(document.getElementById("hours").value)
  const rate = parseInt(document.getElementById("rate").value)
  xx = parseFloat(document.getElementById('pay').value)

  // process
  const pay = (hours * rate) * (1 - 0.18)
  const tax = (hours * rate) * 0.18

  // output
  document.getElementById('pay').innerHTML = `Your pay will be: $ ${takeHomeSalary.toFixed(2)}`
  document.getElementById('pay').innerHTML = 'Your pay will be: $' + takeHomeSalary.toFixed(2)
}
