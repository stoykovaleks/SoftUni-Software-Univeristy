using System;

namespace _06_Supplies_For_School_
{
    class Program
    {
        static void Main(string[] args)
        {
            int countPacksPens = int.Parse(Console.ReadLine());
            int countPacksMarkers = int.Parse(Console.ReadLine());
            int litersChalkBoardCl = int.Parse(Console.ReadLine());
            double percentageDiscount = double.Parse(Console.ReadLine());

            double sumPacksPens = countPacksPens * 5.80;
            double sumPackMarkers = countPacksMarkers * 7.20;
            double sumChalkBoardCl = litersChalkBoardCl * 1.20;
            double sum = sumPacksPens + sumPackMarkers + sumChalkBoardCl;
            double totalSum = sum - ((sum * percentageDiscount)/100);

            Console.WriteLine(totalSum);
        }
    }
}