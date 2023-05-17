using System;

namespace godzilaVsKingKong
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double boudget = double.Parse(Console.ReadLine());
            int statists = int.Parse(Console.ReadLine());
            double clothingPrice = double.Parse(Console.ReadLine());

            double priceDecor = boudget * 0.1;
            double clothing = statists * clothingPrice;
            

            if (statists >= 150) //ако статистите са повече от 150
            {
                clothing = clothing - (clothing * 0.1);
            }
            double neededMoney = clothing + priceDecor;
            double diff = neededMoney + priceDecor;

            if (diff >= 0)
            {
                Console.WriteLine("Action!");
                Console.WriteLine($"Wingard starts filming with {neededMoney:f2} leva left.");
            }
            else
            {
                difference = Math.Abs(difference);
                Console.WriteLine("Not enough money!");
                Console.WriteLine($"Wingard needs {difference:F2} leva more.");

            }
        }
    }
}