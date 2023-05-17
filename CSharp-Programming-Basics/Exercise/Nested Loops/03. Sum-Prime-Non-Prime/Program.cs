using System;

namespace _03_SumPrime_Non_Prime
{
    class Program
    {
        static void Main(string[] args)
        {
            int sumPrime = 0;
            int sumNonPrime = 0;

            while (true)
            {
                string command = Console.ReadLine();
                if (command == "stop")
                {
                    break;
                }

                int number = int.Parse(command);
                if (number < 0)
                {
                    Console.WriteLine("Number is negative.");
                    continue;
                }

                bool isPrime = true;
                for (int i = 2; i < number; i++)
                {
                    if (number % i == 0)
                    {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime)
                {
                    sumPrime += number;
                }
                else
                {
                    sumNonPrime += number;
                }
            }
            Console.WriteLine($"Sum of all prime numbers is: {sumPrime}");
            Console.WriteLine($"Sum of all non prime numbers is: {sumNonPrime}");
        }
    }
}