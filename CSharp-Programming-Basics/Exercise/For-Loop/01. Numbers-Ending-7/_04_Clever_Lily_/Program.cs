using System;

namespace _04_CleverLily_
{
    class Program
    {
        static void Main(string[] args)
        {
            int ageLily = int.Parse(Console.ReadLine());
            double priceWashingMachine = double.Parse(Console.ReadLine());
            int toyPrice = int.Parse(Console.ReadLine());
            double sum = 0;
            int money = 10;

            for (int i = 1; i <= ageLily; i++)
            {
                if (i % 2 == 0)
                {
                    sum += money;
                    money += 10;
                    sum--;
                }
                else
                {
                    sum += toyPrice;
                }
            }
            if (sum >= priceWashingMachine)
            {
                Console.WriteLine($"Yes! {sum - priceWashingMachine:f2}");
            }
            else
            {
                Console.WriteLine($"No! {priceWashingMachine - sum:f2}");
            }
        }
    }
}