using System;

namespace _02_Deposit_Calc
{
    class Program
    {
        static void Main(string[] args)
        {
            double depositSum = double.Parse(Console.ReadLine());
            int monthlyPeriod = int.Parse(Console.ReadLine());
            double yearlyPercentage = double.Parse(Console.ReadLine());
          
            double interest = (depositSum * yearlyPercentage)/100;
            double monthlyInterest = interest / 12;
            double sum = depositSum + monthlyPeriod * monthlyInterest;

            Console.WriteLine(sum);
        }   
    }
}