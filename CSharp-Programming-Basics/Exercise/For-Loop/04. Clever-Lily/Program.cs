using System;

namespace _04_Clever_Lily_
{
    class Program
    {
        static void Main(string[] args)
        {
            int age = int.Parse(Console.ReadLine());
            double priceWashingMachine = double.Parse(Console.ReadLine());
            double priceToy = double.Parse(Console.ReadLine());

            double sum = 0.0;
            int money = 10;

            for (int i = 1; i <= age; i++)
            {
                if (i % 2 == 0)
                {
                    sum += money;
                    money += 10;
                    sum--;
                }
                else
                {
                    sum += priceToy;
                }
            }
            if (sum >= priceWashingMachine)
            {
                double leftSum = sum - priceWashingMachine;
                Console.WriteLine($"Yes! {leftSum:f2}");
            }
            else
            {
                double neededSum = priceWashingMachine - sum;
                Console.WriteLine($"No! {neededSum:f2}");
            }
        }
    }
}
