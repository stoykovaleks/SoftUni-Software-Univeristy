using System;

namespace _07_Pet_Shop_
{
    class Program
    {
        static void Main(string[] args)
        {
            int packDogFood = int.Parse(Console.ReadLine());
            int packCatFood = int.Parse(Console.ReadLine());

            double totalSumDogFood = packDogFood * 2.5;
            double totalSumCatFood = packCatFood * 4;
            double totalSum = totalSumDogFood + totalSumCatFood;

            Console.WriteLine($"{totalSum} lv.");
        }
    }
}