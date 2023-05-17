using System;

namespace _03_Vacantion
{
    class Program
    {
        static void Main(string[] args)
        {
            double neededMoneyForVacantion = double.Parse(Console.ReadLine());
            double money = double.Parse(Console.ReadLine());
            int daysCount = 0;
            int days = 0;

            while (true)
            {
                string command = Console.ReadLine();
                double commandMoney = double.Parse(Console.ReadLine());

                if (command == "spend")
                {
                    daysCount++;
                    money -= commandMoney;
                    if (money < 0)
                    {
                        money = 0;
                    }
                }
                else if (command == "save")
                {
                    daysCount = 0;
                    money += commandMoney;
                }
                days++;

                if (money >= neededMoneyForVacantion)
                {
                    Console.WriteLine($"You saved the money for {days} days.");
                    break;
                }
                if (daysCount == 5)
                {
                    Console.WriteLine("You can't save the money.");
                    Console.WriteLine(days);
                    break; 
                }
            }
        }
    }
}