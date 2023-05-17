using System;

namespace _08_Basketball_Equp_
{
    class Program
    {
        static void Main(string[] args)
        {
            int yearlyTax = int.Parse(Console.ReadLine());

            double shoesPrice = yearlyTax - (yearlyTax * 0.4);
            double equpPrice = shoesPrice - (shoesPrice * 0.2);
            double ballPrice = equpPrice / 4;
            double accsessoirPrice = ballPrice / 5;

            double totalPrice = yearlyTax + shoesPrice + equpPrice + ballPrice + accsessoirPrice;

            Console.WriteLine(totalPrice);
        }
    }
}