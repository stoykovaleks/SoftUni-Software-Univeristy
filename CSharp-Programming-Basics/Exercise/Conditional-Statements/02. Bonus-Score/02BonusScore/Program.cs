using System;

namespace toyShop
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double vaccantionPrice = double.Parse(Console.ReadLine());

            int countPuzzles = int.Parse(Console.ReadLine());
            int countDolls = int.Parse(Console.ReadLine());
            int countBears = int.Parse(Console.ReadLine());
            int countMinions = int.Parse(Console.ReadLine());
            int countTrucks = int.Parse(Console.ReadLine());

            double profit = (countPuzzles * 2.60) + (countDolls * 3.0) + (countBears * 4.10) + (countMinions * 8.20) + (countTrucks * 2.0);
            double countToys = countPuzzles + countDolls + countBears + countMinions + countTrucks;

            if (countToys >= 50)
            {
               profit = profit - (profit * 0.25);
            }

            profit = profit - (profit * 0.1);
            

            if (profit >= vaccantionPrice)
            {
                Console.WriteLine($"Yes! {profit - vaccantionPrice:f2} lv left.");
            }
            else
            {
                Console.WriteLine($"Not enough money! {vaccantionPrice - profit:f2} lv needed.");
            }

        }
    
    }
}