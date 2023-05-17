using System;

namespace _09_Yard_Greening_
{
    class Program
    {
        static void Main(string[] args)
        {
            double cm3ToGreening = double.Parse(Console.ReadLine());

            double sum = cm3ToGreening * 7.61;
            double discount = sum * 0.18;
            double totalSum = sum - discount;

            Console.WriteLine($"The final price is: {totalSum} lv.");
            Console.WriteLine($"The discount is: {discount} lv.");
        }
    }
}