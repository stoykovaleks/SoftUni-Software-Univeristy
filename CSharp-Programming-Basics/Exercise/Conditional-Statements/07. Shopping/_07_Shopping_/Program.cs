using System;

    namespace _07_Shopping_
    {
      class Program
      {
        static void Main(string[] args)
        {
            double budget = double.Parse(Console.ReadLine());

            int countVideoCards = int.Parse(Console.ReadLine());
            int countCPUs = int.Parse(Console.ReadLine());
            int countRAMs = int.Parse(Console.ReadLine());

            double priceVideoCards = countVideoCards * 250;
            double priceCPUs = priceVideoCards - (priceVideoCards * 0.65);
            double sumCPUs = priceCPUs * countCPUs;
            double priceRams = priceVideoCards - (priceVideoCards * 0.9);
            double sumRams = priceRams * countRAMs;

            double totalSum = priceVideoCards + sumCPUs + sumRams;

            if (countVideoCards >= countCPUs)
            {
                totalSum = totalSum - (totalSum * 0.15);
            }
            if (budget >= totalSum )
            {
                double  sumLeft = budget - totalSum;
                Console.WriteLine($"You have {sumLeft:f2} leva left!");
            }
            else
            {
                double sumNeed = totalSum - budget;
                Console.WriteLine($"Not enough money! You need {sumNeed:f2} leva more!");
            }


        }    
      }
    }


