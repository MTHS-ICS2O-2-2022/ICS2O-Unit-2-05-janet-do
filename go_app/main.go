// Copyright (c) 2020 Janet Do All rights reserved
//
// Created by: Janet Do
// Created on: Sep 2020
// This generates pay and tax deductions
package main

import (
	"fmt"
)

const taxRate = 0.18

func main() {
	//input
	var hours, rate int
	fmt.Print("Enter the number of hours worked: ")
	fmt.Scanln(&hours)
	fmt.Print("Enter the hourly rate: ")
	fmt.Scanln(&rate)

	//proccess
	pay := float64(hours*rate) * (1 - taxRate)
	tax := float64(hours*rate) * taxRate
	
	//output
	fmt.Printf("Your pay will be: $%.2f\n", pay)
	fmt.Printf("The government will take: $%.2f\n", tax)
}
